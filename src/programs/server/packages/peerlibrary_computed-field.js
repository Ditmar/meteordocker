(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var dontStop, equalsFunc, ComputedField;

var require = meteorInstall({"node_modules":{"meteor":{"peerlibrary:computed-field":{"lib.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_computed-field/lib.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ComputedField: () => ComputedField
});

class ComputedField {
  constructor(func, equalsFunc, dontStop) {
    // To support passing boolean as the second argument.
    if (_.isBoolean(equalsFunc)) {
      dontStop = equalsFunc;
      equalsFunc = null;
    }

    let handle = null;
    let lastValue = null; // TODO: Provide an option to prevent using view's autorun.
    //       One can wrap code with Blaze._withCurrentView(null, code) to prevent using view's autorun for now.

    let autorun;
    const currentView = Package.blaze && Package.blaze.Blaze && Package.blaze.Blaze.currentView;

    if (currentView) {
      if (currentView._isInRender) {
        // Inside render we cannot use currentView.autorun directly, so we use our own version of it.
        // This allows computed fields to be created inside Blaze template helpers, which are called
        // the first time inside render. While currentView.autorun is disallowed inside render because
        // autorun would be recreated for reach re-render, this is exactly what computed field does
        // anyway so it is OK for use to use autorun in this way.
        autorun = function (f) {
          const templateInstanceFunc = Package.blaze.Blaze.Template._currentTemplateInstanceFunc;
          const comp = Tracker.autorun(c => {
            Package.blaze.Blaze._withCurrentView(currentView, () => {
              Package.blaze.Blaze.Template._withTemplateInstanceFunc(templateInstanceFunc, () => {
                f.call(currentView, c);
              });
            });
          });

          const stopComputation = () => {
            comp.stop();
          };

          currentView.onViewDestroyed(stopComputation);
          comp.onStop(() => {
            currentView.removeViewDestroyedListener(stopComputation);
          });
          return comp;
        };
      } else {
        autorun = f => {
          return currentView.autorun(f);
        };
      }
    } else {
      autorun = Tracker.autorun;
    }

    const startAutorun = function () {
      handle = autorun(function (computation) {
        const value = func();

        if (!lastValue) {
          lastValue = new ReactiveVar(value, equalsFunc);
        } else {
          lastValue.set(value);
        }

        if (!dontStop) {
          Tracker.afterFlush(function () {
            // If there are no dependents anymore, stop the autorun. We will run
            // it again in the getter's flush call if needed.
            if (!lastValue.dep.hasDependents()) {
              getter.stop();
            }
          });
        }
      }); // If something stops our autorun from the outside, we want to know that and update internal state accordingly.
      // This means that if computed field was created inside an autorun, and that autorun is invalided our autorun is
      // stopped. But then computed field might be still around and it might be asked again for the value. We want to
      // restart our autorun in that case. Instead of trying to recompute the stopped autorun.

      if (handle.onStop) {
        handle.onStop(() => {
          handle = null;
        });
      } else {
        // XXX COMPAT WITH METEOR 1.1.0
        const originalStop = handle.stop;

        handle.stop = function () {
          if (handle) {
            originalStop.call(handle);
          }

          handle = null;
        };
      }
    };

    startAutorun();

    const getter = function () {
      // We always flush so that you get the most recent value. This is a noop if autorun was not invalidated.
      getter.flush();
      return lastValue.get();
    }; // We mingle the prototype so that getter instanceof ComputedField is true.


    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(getter, this.constructor.prototype);
    } else {
      getter.__proto__ = this.constructor.prototype;
    }

    getter.toString = function () {
      return `ComputedField{${this()}}`;
    };

    getter.apply = () => {
      return getter();
    };

    getter.call = () => {
      return getter();
    }; // If this autorun is nested in the outside autorun it gets stopped automatically when the outside autorun gets
    // invalidated, so no need to call destroy. But otherwise you should call destroy when the field is not needed anymore.


    getter.stop = function () {
      if (handle != null) {
        handle.stop();
      }

      return handle = null;
    }; // For tests.


    getter._isRunning = () => {
      return !!handle;
    }; // Sometimes you want to force recomputation of the new value before the global Tracker flush is done.
    // This is a noop if autorun was not invalidated.


    getter.flush = () => {
      Tracker.nonreactive(function () {
        if (handle) {
          handle.flush();
        } else {
          // If there is no autorun, create it now. This will do initial recomputation as well. If there
          // will be no dependents after the global flush, autorun will stop (again).
          startAutorun();
        }
      });
    };

    return getter;
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/peerlibrary:computed-field/lib.js");

/* Exports */
Package._define("peerlibrary:computed-field", exports, {
  ComputedField: ComputedField
});

})();

//# sourceURL=meteor://💻app/packages/peerlibrary_computed-field.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcGVlcmxpYnJhcnk6Y29tcHV0ZWQtZmllbGQvbGliLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkNvbXB1dGVkRmllbGQiLCJjb25zdHJ1Y3RvciIsImZ1bmMiLCJlcXVhbHNGdW5jIiwiZG9udFN0b3AiLCJfIiwiaXNCb29sZWFuIiwiaGFuZGxlIiwibGFzdFZhbHVlIiwiYXV0b3J1biIsImN1cnJlbnRWaWV3IiwiUGFja2FnZSIsImJsYXplIiwiQmxhemUiLCJfaXNJblJlbmRlciIsImYiLCJ0ZW1wbGF0ZUluc3RhbmNlRnVuYyIsIlRlbXBsYXRlIiwiX2N1cnJlbnRUZW1wbGF0ZUluc3RhbmNlRnVuYyIsImNvbXAiLCJUcmFja2VyIiwiYyIsIl93aXRoQ3VycmVudFZpZXciLCJfd2l0aFRlbXBsYXRlSW5zdGFuY2VGdW5jIiwiY2FsbCIsInN0b3BDb21wdXRhdGlvbiIsInN0b3AiLCJvblZpZXdEZXN0cm95ZWQiLCJvblN0b3AiLCJyZW1vdmVWaWV3RGVzdHJveWVkTGlzdGVuZXIiLCJzdGFydEF1dG9ydW4iLCJjb21wdXRhdGlvbiIsInZhbHVlIiwiUmVhY3RpdmVWYXIiLCJzZXQiLCJhZnRlckZsdXNoIiwiZGVwIiwiaGFzRGVwZW5kZW50cyIsImdldHRlciIsIm9yaWdpbmFsU3RvcCIsImZsdXNoIiwiZ2V0IiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfX3Byb3RvX18iLCJ0b1N0cmluZyIsImFwcGx5IiwiX2lzUnVubmluZyIsIm5vbnJlYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFDQyxlQUFhLEVBQUMsTUFBSUE7QUFBbkIsQ0FBZDs7QUFBTyxNQUFNQSxhQUFOLENBQW9CO0FBQ3pCQyxhQUFXLENBQUNDLElBQUQsRUFBT0MsVUFBUCxFQUFtQkMsUUFBbkIsRUFB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QUMsQ0FBQ3pDLE1BQVQ7QUFDRCxLQUZELENBdklzQyxDQTJJdEM7QUFDQTs7O0FBQ0ErQixVQUFNLENBQUNFLEtBQVAsR0FBZSxNQUFNO0FBQ25CcEIsYUFBTyxDQUFDNkIsV0FBUixDQUFvQixZQUFZO0FBQzlCLFlBQUkxQyxNQUFKLEVBQVk7QUFDVkEsZ0JBQU0sQ0FBQ2lDLEtBQVA7QUFDRCxTQUZELE1BR0s7QUFDSDtBQUNBO0FBQ0FWLHNCQUFZO0FBQ2I7QUFDRixPQVREO0FBVUQsS0FYRDs7QUFhQSxXQUFPUSxNQUFQO0FBQ0Q7O0FBNUp3QixDIiwiZmlsZSI6Ii9wYWNrYWdlcy9wZWVybGlicmFyeV9jb21wdXRlZC1maWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21wdXRlZEZpZWxkIHtcbiAgY29uc3RydWN0b3IoZnVuYywgZXF1YWxzRnVuYywgZG9udFN0b3ApIHtcbiAgICAvLyBUbyBzdXBwb3J0IHBhc3NpbmcgYm9vbGVhbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgIGlmIChfLmlzQm9vbGVhbihlcXVhbHNGdW5jKSkge1xuICAgICAgZG9udFN0b3AgPSBlcXVhbHNGdW5jO1xuICAgICAgZXF1YWxzRnVuYyA9IG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZSA9IG51bGw7XG4gICAgbGV0IGxhc3RWYWx1ZSA9IG51bGw7XG5cbiAgICAvLyBUT0RPOiBQcm92aWRlIGFuIG9wdGlvbiB0byBwcmV2ZW50IHVzaW5nIHZpZXcncyBhdXRvcnVuLlxuICAgIC8vICAgICAgIE9uZSBjYW4gd3JhcCBjb2RlIHdpdGggQmxhemUuX3dpdGhDdXJyZW50VmlldyhudWxsLCBjb2RlKSB0byBwcmV2ZW50IHVzaW5nIHZpZXcncyBhdXRvcnVuIGZvciBub3cuXG4gICAgbGV0IGF1dG9ydW47XG4gICAgY29uc3QgY3VycmVudFZpZXcgPSBQYWNrYWdlLmJsYXplICYmIFBhY2thZ2UuYmxhemUuQmxhemUgJiYgUGFja2FnZS5ibGF6ZS5CbGF6ZS5jdXJyZW50Vmlld1xuICAgIGlmIChjdXJyZW50Vmlldykge1xuICAgICAgaWYgKGN1cnJlbnRWaWV3Ll9pc0luUmVuZGVyKSB7XG4gICAgICAgIC8vIEluc2lkZSByZW5kZXIgd2UgY2Fubm90IHVzZSBjdXJyZW50Vmlldy5hdXRvcnVuIGRpcmVjdGx5LCBzbyB3ZSB1c2Ugb3VyIG93biB2ZXJzaW9uIG9mIGl0LlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBjb21wdXRlZCBmaWVsZHMgdG8gYmUgY3JlYXRlZCBpbnNpZGUgQmxhemUgdGVtcGxhdGUgaGVscGVycywgd2hpY2ggYXJlIGNhbGxlZFxuICAgICAgICAvLyB0aGUgZmlyc3QgdGltZSBpbnNpZGUgcmVuZGVyLiBXaGlsZSBjdXJyZW50Vmlldy5hdXRvcnVuIGlzIGRpc2FsbG93ZWQgaW5zaWRlIHJlbmRlciBiZWNhdXNlXG4gICAgICAgIC8vIGF1dG9ydW4gd291bGQgYmUgcmVjcmVhdGVkIGZvciByZWFjaCByZS1yZW5kZXIsIHRoaXMgaXMgZXhhY3RseSB3aGF0IGNvbXB1dGVkIGZpZWxkIGRvZXNcbiAgICAgICAgLy8gYW55d2F5IHNvIGl0IGlzIE9LIGZvciB1c2UgdG8gdXNlIGF1dG9ydW4gaW4gdGhpcyB3YXkuXG4gICAgICAgIGF1dG9ydW4gPSBmdW5jdGlvbiAoZikge1xuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlSW5zdGFuY2VGdW5jID0gUGFja2FnZS5ibGF6ZS5CbGF6ZS5UZW1wbGF0ZS5fY3VycmVudFRlbXBsYXRlSW5zdGFuY2VGdW5jO1xuXG4gICAgICAgICAgY29uc3QgY29tcCA9IFRyYWNrZXIuYXV0b3J1bigoYykgPT4ge1xuICAgICAgICAgICAgUGFja2FnZS5ibGF6ZS5CbGF6ZS5fd2l0aEN1cnJlbnRWaWV3KGN1cnJlbnRWaWV3LCAoKSA9PiB7XG4gICAgICAgICAgICAgIFBhY2thZ2UuYmxhemUuQmxhemUuVGVtcGxhdGUuX3dpdGhUZW1wbGF0ZUluc3RhbmNlRnVuYyh0ZW1wbGF0ZUluc3RhbmNlRnVuYywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGYuY2FsbChjdXJyZW50VmlldywgYyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHN0b3BDb21wdXRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbXAuc3RvcCgpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgY3VycmVudFZpZXcub25WaWV3RGVzdHJveWVkKHN0b3BDb21wdXRhdGlvbik7XG4gICAgICAgICAgY29tcC5vblN0b3AoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFZpZXcucmVtb3ZlVmlld0Rlc3Ryb3llZExpc3RlbmVyKHN0b3BDb21wdXRhdGlvbik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gY29tcDtcbiAgICAgICAgfTtcblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF1dG9ydW4gPSAoZikgPT4ge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50Vmlldy5hdXRvcnVuKGYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYXV0b3J1biA9IFRyYWNrZXIuYXV0b3J1bjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEF1dG9ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGUgPSBhdXRvcnVuKGZ1bmN0aW9uIChjb21wdXRhdGlvbikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGZ1bmMoKTtcblxuICAgICAgICBpZiAoIWxhc3RWYWx1ZSkge1xuICAgICAgICAgIGxhc3RWYWx1ZSA9IG5ldyBSZWFjdGl2ZVZhcih2YWx1ZSwgZXF1YWxzRnVuYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGFzdFZhbHVlLnNldCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRvbnRTdG9wKSB7XG4gICAgICAgICAgVHJhY2tlci5hZnRlckZsdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBkZXBlbmRlbnRzIGFueW1vcmUsIHN0b3AgdGhlIGF1dG9ydW4uIFdlIHdpbGwgcnVuXG4gICAgICAgICAgICAvLyBpdCBhZ2FpbiBpbiB0aGUgZ2V0dGVyJ3MgZmx1c2ggY2FsbCBpZiBuZWVkZWQuXG4gICAgICAgICAgICBpZiAoIWxhc3RWYWx1ZS5kZXAuaGFzRGVwZW5kZW50cygpKSB7XG4gICAgICAgICAgICAgIGdldHRlci5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiBzb21ldGhpbmcgc3RvcHMgb3VyIGF1dG9ydW4gZnJvbSB0aGUgb3V0c2lkZSwgd2Ugd2FudCB0byBrbm93IHRoYXQgYW5kIHVwZGF0ZSBpbnRlcm5hbCBzdGF0ZSBhY2NvcmRpbmdseS5cbiAgICAgIC8vIFRoaXMgbWVhbnMgdGhhdCBpZiBjb21wdXRlZCBmaWVsZCB3YXMgY3JlYXRlZCBpbnNpZGUgYW4gYXV0b3J1biwgYW5kIHRoYXQgYXV0b3J1biBpcyBpbnZhbGlkZWQgb3VyIGF1dG9ydW4gaXNcbiAgICAgIC8vIHN0b3BwZWQuIEJ1dCB0aGVuIGNvbXB1dGVkIGZpZWxkIG1pZ2h0IGJlIHN0aWxsIGFyb3VuZCBhbmQgaXQgbWlnaHQgYmUgYXNrZWQgYWdhaW4gZm9yIHRoZSB2YWx1ZS4gV2Ugd2FudCB0b1xuICAgICAgLy8gcmVzdGFydCBvdXIgYXV0b3J1biBpbiB0aGF0IGNhc2UuIEluc3RlYWQgb2YgdHJ5aW5nIHRvIHJlY29tcHV0ZSB0aGUgc3RvcHBlZCBhdXRvcnVuLlxuICAgICAgaWYgKGhhbmRsZS5vblN0b3ApIHtcbiAgICAgICAgaGFuZGxlLm9uU3RvcCgoKSA9PiB7XG4gICAgICAgICAgaGFuZGxlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gWFhYIENPTVBBVCBXSVRIIE1FVEVPUiAxLjEuMFxuICAgICAgICBjb25zdCBvcmlnaW5hbFN0b3AgPSBoYW5kbGUuc3RvcDtcbiAgICAgICAgaGFuZGxlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZSkge1xuICAgICAgICAgICAgb3JpZ2luYWxTdG9wLmNhbGwoaGFuZGxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGFuZGxlID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3RhcnRBdXRvcnVuKCk7XG5cbiAgICBjb25zdCBnZXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXZSBhbHdheXMgZmx1c2ggc28gdGhhdCB5b3UgZ2V0IHRoZSBtb3N0IHJlY2VudCB2YWx1ZS4gVGhpcyBpcyBhIG5vb3AgaWYgYXV0b3J1biB3YXMgbm90IGludmFsaWRhdGVkLlxuICAgICAgZ2V0dGVyLmZsdXNoKCk7XG4gICAgICByZXR1cm4gbGFzdFZhbHVlLmdldCgpO1xuICAgIH07XG5cbiAgICAvLyBXZSBtaW5nbGUgdGhlIHByb3RvdHlwZSBzbyB0aGF0IGdldHRlciBpbnN0YW5jZW9mIENvbXB1dGVkRmllbGQgaXMgdHJ1ZS5cbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2V0dGVyLCB0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZ2V0dGVyLl9fcHJvdG9fXyA9IHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIH1cblxuICAgIGdldHRlci50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGBDb21wdXRlZEZpZWxkeyR7dGhpcygpfX1gO1xuICAgIH07XG5cbiAgICBnZXR0ZXIuYXBwbHkgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0dGVyKCk7XG4gICAgfTtcblxuICAgIGdldHRlci5jYWxsID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGdldHRlcigpO1xuICAgIH07XG5cbiAgICAvLyBJZiB0aGlzIGF1dG9ydW4gaXMgbmVzdGVkIGluIHRoZSBvdXRzaWRlIGF1dG9ydW4gaXQgZ2V0cyBzdG9wcGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgb3V0c2lkZSBhdXRvcnVuIGdldHNcbiAgICAvLyBpbnZhbGlkYXRlZCwgc28gbm8gbmVlZCB0byBjYWxsIGRlc3Ryb3kuIEJ1dCBvdGhlcndpc2UgeW91IHNob3VsZCBjYWxsIGRlc3Ryb3kgd2hlbiB0aGUgZmllbGQgaXMgbm90IG5lZWRlZCBhbnltb3JlLlxuICAgIGdldHRlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGhhbmRsZSAhPSBudWxsKSB7XG4gICAgICAgIGhhbmRsZS5zdG9wKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFuZGxlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gRm9yIHRlc3RzLlxuICAgIGdldHRlci5faXNSdW5uaW5nID0gKCkgPT4ge1xuICAgICAgcmV0dXJuICEhaGFuZGxlO1xuICAgIH07XG5cbiAgICAvLyBTb21ldGltZXMgeW91IHdhbnQgdG8gZm9yY2UgcmVjb21wdXRhdGlvbiBvZiB0aGUgbmV3IHZhbHVlIGJlZm9yZSB0aGUgZ2xvYmFsIFRyYWNrZXIgZmx1c2ggaXMgZG9uZS5cbiAgICAvLyBUaGlzIGlzIGEgbm9vcCBpZiBhdXRvcnVuIHdhcyBub3QgaW52YWxpZGF0ZWQuXG4gICAgZ2V0dGVyLmZsdXNoID0gKCkgPT4ge1xuICAgICAgVHJhY2tlci5ub25yZWFjdGl2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChoYW5kbGUpIHtcbiAgICAgICAgICBoYW5kbGUuZmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBhdXRvcnVuLCBjcmVhdGUgaXQgbm93LiBUaGlzIHdpbGwgZG8gaW5pdGlhbCByZWNvbXB1dGF0aW9uIGFzIHdlbGwuIElmIHRoZXJlXG4gICAgICAgICAgLy8gd2lsbCBiZSBubyBkZXBlbmRlbnRzIGFmdGVyIHRoZSBnbG9iYWwgZmx1c2gsIGF1dG9ydW4gd2lsbCBzdG9wIChhZ2FpbikuXG4gICAgICAgICAgc3RhcnRBdXRvcnVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiBnZXR0ZXI7XG4gIH1cbn1cbiJdfQ==
