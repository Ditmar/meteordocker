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
var storePrevious, equalsFunc, ReactiveField;

var require = meteorInstall({"node_modules":{"meteor":{"peerlibrary:reactive-field":{"lib.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/peerlibrary_reactive-field/lib.js                                                             //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.export({
  ReactiveField: () => ReactiveField
});

class ReactiveField {
  constructor(initialValue, equalsFunc, storePrevious) {
    // To allow not passing equalsFunc, but just storePrevious.
    if (!_.isFunction(equalsFunc) && arguments.length === 2) {
      storePrevious = equalsFunc;
      equalsFunc = null;
    }

    let previousValue = undefined;
    const value = new ReactiveVar(initialValue, equalsFunc);

    const getterSetter = function (newValue) {
      if (arguments.length > 0) {
        if (storePrevious) {
          Tracker.nonreactive(() => {
            const oldValue = value.get(); // Only if the new value is different than currently stored value, we update the previous value.

            if (!(equalsFunc || ReactiveVar._isEqual)(oldValue, newValue)) {
              previousValue = oldValue;
            }
          });
        }

        value.set(newValue); // We return the value as well, but we do not want to register a dependency.

        return Tracker.nonreactive(() => {
          return value.get();
        });
      }

      return value.get();
    }; // We mingle the prototype so that getterSetter instanceof ReactiveField is true.


    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(getterSetter, this.constructor.prototype);
    } else {
      getterSetter.__proto__ = this.constructor.prototype;
    }

    getterSetter.toString = function () {
      return `ReactiveField{${this()}}`;
    };

    getterSetter.apply = function (obj, args) {
      if (args && args.length > 0) {
        return getterSetter(args[0]);
      } else {
        return getterSetter();
      }
    };

    getterSetter.call = function (obj, arg) {
      if (arguments.length > 1) {
        return getterSetter(arg);
      } else {
        return getterSetter();
      }
    };

    getterSetter.previous = function () {
      if (!storePrevious) {
        throw new Error("Storing previous value is not enabled.");
      }

      return previousValue;
    };

    return getterSetter;
  }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/peerlibrary:reactive-field/lib.js");

/* Exports */
Package._define("peerlibrary:reactive-field", exports, {
  ReactiveField: ReactiveField
});

})();

//# sourceURL=meteor://💻app/packages/peerlibrary_reactive-field.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcGVlcmxpYnJhcnk6cmVhY3RpdmUtZmllbGQvbGliLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIlJlYWN0aXZlRmllbGQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxWYWx1ZSIsImVxdWFsc0Z1bmMiLCJzdG9yZVByZXZpb3VzIiwiXyIsImlzRnVuY3Rpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwcmV2aW91c1ZhbHVlIiwidW5kZWZpbmVkIiwidmFsdWUiLCJSZWFjdGl2ZVZhciIsImdldHRlclNldHRlciIsIm5ld1ZhbHVlIiwiVHJhY2tlciIsIm5vbnJlYWN0aXZlIiwib2xkVmFsdWUiLCJnZXQiLCJfaXNFcXVhbCIsInNldCIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX19wcm90b19fIiwidG9TdHJpbmciLCJhcHBseSIsIm9iaiIsImFyZ3MiLCJjYWxsIiwiYXJnIiwicHJldmlvdXMiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsZUFBYSxFQUFDLE1BQUlBO0FBQW5CLENBQWQ7O0FBQU8sTUFBTUEsYUFBTixDQUFvQjtBQUN6QkMsYUFBVyxDQUFDQyxZQUFELEVBQWVDLFVBQWYsRUFBMkJDLGFBQTNCLEVBQTBDO0FBQ25EO0FBQ0EsUUFBSSxDQUFDQyxDQUFDLENBQUNDLFVBQUYsQ0FBYUgsVUFBYixDQUFELElBQThCSSxTQUFTLENBQUNDLE1BQVYsS0FBcUIsQ0FBdkQsRUFBMkQ7QUFDekRKLG1CQUFhLEdBQUdELFVBQWhCO0FBQ0FBLGdCQUFVLEdBQUcsSUFBYjtBQUNEOztBQUNELFFBQUlNLGFBQWEsR0FBR0MsU0FBcEI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsSUFBSUMsV0FBSixDQUFnQlYsWUFBaEIsRUFBOEJDLFVBQTlCLENBQWQ7O0FBRUEsVUFBTVUsWUFBWSxHQUFHLFVBQVVDLFFBQVYsRUFBb0I7QUFDdkMsVUFBSVAsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLFlBQUlKLGFBQUosRUFBbUI7QUFDakJXLGlCQUFPLENBQUNDLFdBQVIsQ0FBb0IsTUFBTTtBQUN4QixrQkFBTUMsUUFBUSxHQUFHTixLQUFLLENBQUNPLEdBQU4sRUFBakIsQ0FEd0IsQ0FFeEI7O0FBQ0EsZ0JBQUksQ0FBQyxDQUFDZixVQUFVLElBQUlTLFdBQVcsQ0FBQ08sUUFBM0IsRUFBcUNGLFFBQXJDLEVBQStDSCxRQUEvQyxDQUFMLEVBQStEO0FBQzdETCwyQkFBYSxHQUFHUSxRQUFoQjtBQUNEO0FBQ0YsV0FORDtBQU9EOztBQUVETixhQUFLLENBQUNTLEdBQU4sQ0FBVU4sUUFBVixFQVh3QixDQVl4Qjs7QUFDQSxlQUFPQyxPQUFPLENBQUNDLFdBQVIsQ0FBb0IsTUFBTTtBQUMvQixpQkFBT0wsS0FBSyxDQUFDTyxHQUFOLEVBQVA7QUFDRCxTQUZNLENBQVA7QUFHRDs7QUFFRCxhQUFPUCxLQUFLLENBQUNPLEdBQU4sRUFBUDtBQUNELEtBcEJELENBVG1ELENBK0JuRDs7O0FBQ0EsUUFBSUcsTUFBTSxDQUFDQyxjQUFYLEVBQTJCO0FBQ3pCRCxZQUFNLENBQUNDLGNBQVAsQ0FBc0JULFlBQXRCLEVBQW9DLEtBQUtaLFdBQUwsQ0FBaUJzQixTQUFyRDtBQUNELEtBRkQsTUFHSztBQUNIVixrQkFBWSxDQUFDVyxTQUFiLEdBQXlCLEtBQUt2QixXQUFMLENBQWlCc0IsU0FBMUM7QUFDRDs7QUFFRFYsZ0JBQVksQ0FBQ1ksUUFBYixHQUF3QixZQUFZO0FBQ2xDLGFBQVEsaUJBQWdCLE1BQU8sR0FBL0I7QUFDRCxLQUZEOztBQUlBWixnQkFBWSxDQUFDYSxLQUFiLEdBQXFCLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUN4QyxVQUFJQSxJQUFJLElBQUlBLElBQUksQ0FBQ3BCLE1BQUwsR0FBYyxDQUExQixFQUE2QjtBQUMzQixlQUFPSyxZQUFZLENBQUNlLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBbkI7QUFDRCxPQUZELE1BR0s7QUFDSCxlQUFPZixZQUFZLEVBQW5CO0FBQ0Q7QUFDRixLQVBEOztBQVNBQSxnQkFBWSxDQUFDZ0IsSUFBYixHQUFvQixVQUFVRixHQUFWLEVBQWVHLEdBQWYsRUFBb0I7QUFDdEMsVUFBSXZCLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN4QixlQUFPSyxZQUFZLENBQUNpQixHQUFELENBQW5CO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsZUFBT2pCLFlBQVksRUFBbkI7QUFDRDtBQUNGLEtBUEQ7O0FBU0FBLGdCQUFZLENBQUNrQixRQUFiLEdBQXdCLFlBQVc7QUFDakMsVUFBSSxDQUFDM0IsYUFBTCxFQUFvQjtBQUNsQixjQUFNLElBQUk0QixLQUFKLENBQVUsd0NBQVYsQ0FBTjtBQUNEOztBQUNELGFBQU92QixhQUFQO0FBQ0QsS0FMRDs7QUFPQSxXQUFPSSxZQUFQO0FBQ0Q7O0FBdEV3QixDIiwiZmlsZSI6Ii9wYWNrYWdlcy9wZWVybGlicmFyeV9yZWFjdGl2ZS1maWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZWFjdGl2ZUZpZWxkIHtcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlLCBlcXVhbHNGdW5jLCBzdG9yZVByZXZpb3VzKSB7XG4gICAgLy8gVG8gYWxsb3cgbm90IHBhc3NpbmcgZXF1YWxzRnVuYywgYnV0IGp1c3Qgc3RvcmVQcmV2aW91cy5cbiAgICBpZiAoIV8uaXNGdW5jdGlvbihlcXVhbHNGdW5jKSAmJiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgIHN0b3JlUHJldmlvdXMgPSBlcXVhbHNGdW5jO1xuICAgICAgZXF1YWxzRnVuYyA9IG51bGw7XG4gICAgfVxuICAgIGxldCBwcmV2aW91c1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFJlYWN0aXZlVmFyKGluaXRpYWxWYWx1ZSwgZXF1YWxzRnVuYyk7XG5cbiAgICBjb25zdCBnZXR0ZXJTZXR0ZXIgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoc3RvcmVQcmV2aW91cykge1xuICAgICAgICAgIFRyYWNrZXIubm9ucmVhY3RpdmUoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB2YWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIC8vIE9ubHkgaWYgdGhlIG5ldyB2YWx1ZSBpcyBkaWZmZXJlbnQgdGhhbiBjdXJyZW50bHkgc3RvcmVkIHZhbHVlLCB3ZSB1cGRhdGUgdGhlIHByZXZpb3VzIHZhbHVlLlxuICAgICAgICAgICAgaWYgKCEoZXF1YWxzRnVuYyB8fCBSZWFjdGl2ZVZhci5faXNFcXVhbCkob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgICBwcmV2aW91c1ZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZS5zZXQobmV3VmFsdWUpO1xuICAgICAgICAvLyBXZSByZXR1cm4gdGhlIHZhbHVlIGFzIHdlbGwsIGJ1dCB3ZSBkbyBub3Qgd2FudCB0byByZWdpc3RlciBhIGRlcGVuZGVuY3kuXG4gICAgICAgIHJldHVybiBUcmFja2VyLm5vbnJlYWN0aXZlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuZ2V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUuZ2V0KCk7XG4gICAgfTtcblxuICAgIC8vIFdlIG1pbmdsZSB0aGUgcHJvdG90eXBlIHNvIHRoYXQgZ2V0dGVyU2V0dGVyIGluc3RhbmNlb2YgUmVhY3RpdmVGaWVsZCBpcyB0cnVlLlxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZXR0ZXJTZXR0ZXIsIHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBnZXR0ZXJTZXR0ZXIuX19wcm90b19fID0gdGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgfVxuXG4gICAgZ2V0dGVyU2V0dGVyLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGBSZWFjdGl2ZUZpZWxkeyR7dGhpcygpfX1gO1xuICAgIH07XG5cbiAgICBnZXR0ZXJTZXR0ZXIuYXBwbHkgPSBmdW5jdGlvbiAob2JqLCBhcmdzKSB7XG4gICAgICBpZiAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGdldHRlclNldHRlcihhcmdzWzBdKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0dGVyU2V0dGVyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdldHRlclNldHRlci5jYWxsID0gZnVuY3Rpb24gKG9iaiwgYXJnKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIGdldHRlclNldHRlcihhcmcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXR0ZXJTZXR0ZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0dGVyU2V0dGVyLnByZXZpb3VzID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXN0b3JlUHJldmlvdXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RvcmluZyBwcmV2aW91cyB2YWx1ZSBpcyBub3QgZW5hYmxlZC5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGdldHRlclNldHRlcjtcbiAgfVxufVxuIl19
