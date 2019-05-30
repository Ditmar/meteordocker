(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var EJSON = Package.ejson.EJSON;
var Spacebars = Package.spacebars.Spacebars;
var BaseComponent = Package['peerlibrary:base-component'].BaseComponent;
var BaseComponentDebug = Package['peerlibrary:base-component'].BaseComponentDebug;
var assert = Package['peerlibrary:assert'].assert;
var ReactiveField = Package['peerlibrary:reactive-field'].ReactiveField;
var ComputedField = Package['peerlibrary:computed-field'].ComputedField;
var DataLookup = Package['peerlibrary:data-lookup'].DataLookup;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare, Template, AttributeHandler, ElementAttributesUpdater, BlazeComponent, BlazeComponentDebug;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/template.coffee.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
             

Template = Blaze.Template;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/templating.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5903
   If it is a copy of templating.js file wrapped into a condition.

   TODO: Remove this file eventually.
 */

if (!Blaze.Template.__checkName) {
  // Packages and apps add templates on to this object.

  /**
   * @summary The class for defining templates
   * @class
   * @instanceName Template.myTemplate
   */
  Template = Blaze.Template;

  var RESERVED_TEMPLATE_NAMES = "__proto__ name".split(" ");

  // Check for duplicate template names and illegal names that won't work.
  Template.__checkName = function (name) {
    // Some names can't be used for Templates. These include:
    //  - Properties Blaze sets on the Template object.
    //  - Properties that some browsers don't let the code to set.
    //    These are specified in RESERVED_TEMPLATE_NAMES.
    if (name in Template || _.contains(RESERVED_TEMPLATE_NAMES, name)) {
      if ((Template[name] instanceof Template) && name !== "body")
        throw new Error("There are multiple templates named '" + name + "'. Each template needs a unique name.");
      throw new Error("This template name is reserved: " + name);
    }
  };

  // XXX COMPAT WITH 0.8.3
  Template.__define__ = function (name, renderFunc) {
    Template.__checkName(name);
    Template[name] = new Template("Template." + name, renderFunc);
    // Exempt packages built pre-0.9.0 from warnings about using old
    // helper syntax, because we can.  It's not very useful to get a
    // warning about someone else's code (like a package on Atmosphere),
    // and this should at least put a bit of a dent in number of warnings
    // that come from packages that haven't been updated lately.
    Template[name]._NOWARN_OLDSTYLE_HELPERS = true;
  };

  // Define a template `Template.body` that renders its
  // `contentRenderFuncs`.  `<body>` tags (of which there may be
  // multiple) will have their contents added to it.

  /**
   * @summary The [template object](#templates_api) representing your `<body>`
   * tag.
   * @locus Client
   */
  Template.body = new Template('body', function () {
    var view = this;
    return _.map(Template.body.contentRenderFuncs, function (func) {
      return func.apply(view);
    });
  });
  Template.body.contentRenderFuncs = []; // array of Blaze.Views
  Template.body.view = null;

  Template.body.addContent = function (renderFunc) {
    Template.body.contentRenderFuncs.push(renderFunc);
  };

  // This function does not use `this` and so it may be called
  // as `Meteor.startup(Template.body.renderIntoDocument)`.
  Template.body.renderToDocument = function () {
    // Only do it once.
    if (Template.body.view)
      return;

    var view = Blaze.render(Template.body, document.body);
    Template.body.view = view;
  };

  // XXX COMPAT WITH 0.9.0
  UI.body = Template.body;

  // XXX COMPAT WITH 0.9.0
  // (<body> tags in packages built with 0.9.0)
  Template.__body__ = Template.body;
  Template.__body__.__contentParts = Template.body.contentViews;
  Template.__body__.__instantiate = Template.body.renderToDocument;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/template.dynamic.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("__dynamicBackport");
Template["__dynamicBackport"] = new Template("Template.__dynamicBackport", (function() {
  var view = this;
  return [ Blaze.View("lookup:checkContext", function() {
    return Spacebars.mustache(view.lookup("checkContext"));
  }), "\n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("dataContextPresent"));
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("__dynamicWithDataContext"), function() {
      return Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      });
    }), "\n  " ];
  }, function() {
    return [ "\n    \n    ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("template")),
        data: Spacebars.call(view.lookup(".."))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("__dynamicWithDataContext"), function() {
        return Blaze._InOuterTemplateScope(view, function() {
          return Spacebars.include(function() {
            return Spacebars.call(view.templateContentBlock);
          });
        });
      });
    }), "\n  " ];
  }) ];
}));

Template.__checkName("__dynamicWithDataContextBackport");
Template["__dynamicWithDataContextBackport"] = new Template("Template.__dynamicWithDataContextBackport", (function() {
  var view = this;
  return Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("chooseTemplate"), view.lookup("template"));
  }, function() {
    return [ "\n    \n    ", Blaze._TemplateWith(function() {
      return Spacebars.call(Spacebars.dot(view.lookup(".."), "data"));
    }, function() {
      return Spacebars.include(view.lookupTemplate(".."), function() {
        return Blaze._InOuterTemplateScope(view, function() {
          return Spacebars.include(function() {
            return Spacebars.call(view.templateContentBlock);
          });
        });
      });
    }), "\n  " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/dynamic.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5903
   If it is a copy of dynamic.js file wrapped into a condition with renaming of backported templates.

   TODO: Remove this file eventually.
 */

if (!Blaze.Template.__dynamicWithDataContext) {
  Blaze.Template.__dynamicWithDataContext = Blaze.Template.__dynamicWithDataContextBackport;
  Blaze.Template.__dynamicWithDataContext.viewName = 'Template.__dynamicWithDataContext';
  Blaze.Template.__dynamic = Blaze.Template.__dynamicBackport;
  Blaze.Template.__dynamic.viewName = 'Template.__dynamic';

  var Template = Blaze.Template;

  /**
   * @isTemplate true
   * @memberOf Template
   * @function dynamic
   * @summary Choose a template to include dynamically, by name.
   * @locus Templates
   * @param {String} template The name of the template to include.
   * @param {Object} [data] Optional. The data context in which to include the
   * template.
   */

  Template.__dynamicWithDataContext.helpers({
    chooseTemplate: function (name) {
      return Blaze._getTemplate(name, function () {
        return Template.instance();
      });
    }
  });

  Template.__dynamic.helpers({
    dataContextPresent: function () {
      return _.has(this, "data");
    },
    checkContext: function () {
      if (!_.has(this, "template")) {
        throw new Error("Must specify name in the 'template' argument " +
          "to {{> Template.dynamic}}.");
      }

      _.each(this, function (v, k) {
        if (k !== "template" && k !== "data") {
          throw new Error("Invalid argument to {{> Template.dynamic}}: " +
            k);
        }
      });
    }
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/lookup.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file backports Blaze lookup.js from Meteor 1.2 so that required Blaze features to support Blaze
   Components are available also in older Meteor versions.
   It is a copy of lookup.js file from Meteor 1.2 with lexical scope lookup commented out.

   TODO: Remove this file eventually.
 */

// Check if we are not running Meteor 1.2+.
if (! Blaze._getTemplate) {
  // If `x` is a function, binds the value of `this` for that function
  // to the current data context.
  var bindDataContext = function (x) {
    if (typeof x === 'function') {
      return function () {
        var data = Blaze.getData();
        if (data == null)
          data = {};
        return x.apply(data, arguments);
      };
    }
    return x;
  };

  Blaze._getTemplateHelper = function (template, name, tmplInstanceFunc) {
    // XXX COMPAT WITH 0.9.3
    var isKnownOldStyleHelper = false;

    if (template.__helpers.has(name)) {
      var helper = template.__helpers.get(name);
      if (helper === Blaze._OLDSTYLE_HELPER) {
        isKnownOldStyleHelper = true;
      } else if (helper != null) {
        return wrapHelper(bindDataContext(helper), tmplInstanceFunc);
      } else {
        return null;
      }
    }

    // old-style helper
    if (name in template) {
      // Only warn once per helper
      if (!isKnownOldStyleHelper) {
        template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);
        if (!template._NOWARN_OLDSTYLE_HELPERS) {
          Blaze._warn('Assigning helper with `' + template.viewName + '.' +
            name + ' = ...` is deprecated.  Use `' + template.viewName +
            '.helpers(...)` instead.');
        }
      }
      if (template[name] != null) {
        return wrapHelper(bindDataContext(template[name]), tmplInstanceFunc);
      }
    }

    return null;
  };

  var wrapHelper = function (f, templateFunc) {
    // XXX COMPAT WITH METEOR 1.0.3.2
    if (!Blaze.Template._withTemplateInstanceFunc) {
      return Blaze._wrapCatchingExceptions(f, 'template helper');
    }

    if (typeof f !== "function") {
      return f;
    }

    return function () {
      var self = this;
      var args = arguments;

      return Blaze.Template._withTemplateInstanceFunc(templateFunc, function () {
        return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);
      });
    };
  };

  // templateInstance argument is provided to be available for possible
  // alternative implementations of this function by 3rd party packages.
  Blaze._getTemplate = function (name, templateInstance) {
    if ((name in Blaze.Template) && (Blaze.Template[name] instanceof Blaze.Template)) {
      return Blaze.Template[name];
    }
    return null;
  };

  Blaze._getGlobalHelper = function (name, templateInstance) {
    if (Blaze._globalHelpers[name] != null) {
      return wrapHelper(bindDataContext(Blaze._globalHelpers[name]), templateInstance);
    }
    return null;
  };

  Blaze.View.prototype.lookup = function (name, _options) {
    var template = this.template;
    var lookupTemplate = _options && _options.template;
    var helper;
    var binding;
    var boundTmplInstance;
    var foundTemplate;

    if (this.templateInstance) {
      boundTmplInstance = _.bind(this.templateInstance, this);
    }

    // 0. looking up the parent data context with the special "../" syntax
    if (/^\./.test(name)) {
      // starts with a dot. must be a series of dots which maps to an
      // ancestor of the appropriate height.
      if (!/^(\.)+$/.test(name))
        throw new Error("id starting with dot must be a series of dots");

      return Blaze._parentData(name.length - 1, true /*_functionWrapped*/);

    }

    // 1. look up a helper on the current template
    if (template && ((helper = Blaze._getTemplateHelper(template, name, boundTmplInstance)) != null)) {
      return helper;
    }

    // 2. look up a binding by traversing the lexical view hierarchy inside the
    // current template
    /*if (template && (binding = Blaze._lexicalBindingLookup(Blaze.currentView, name)) != null) {
      return binding;
    }*/

    // 3. look up a template by name
    if (lookupTemplate && ((foundTemplate = Blaze._getTemplate(name, boundTmplInstance)) != null)) {
      return foundTemplate;
    }

    // 4. look up a global helper
    if ((helper = Blaze._getGlobalHelper(name, boundTmplInstance)) != null) {
      return helper;
    }

    // 5. look up in a data context
    return function () {
      var isCalledAsFunction = (arguments.length > 0);
      var data = Blaze.getData();
      var x = data && data[name];
      if (!x) {
        if (lookupTemplate) {
          throw new Error("No such template: " + name);
        } else if (isCalledAsFunction) {
          throw new Error("No such function: " + name);
        } /*else if (name.charAt(0) === '@' && ((x === null) ||
          (x === undefined))) {
          // Throw an error if the user tries to use a `@directive`
          // that doesn't exist.  We don't implement all directives
          // from Handlebars, so there's a potential for confusion
          // if we fail silently.  On the other hand, we want to
          // throw late in case some app or package wants to provide
          // a missing directive.
          throw new Error("Unsupported directive: " + name);
        }*/
      }
      if (!data) {
        return null;
      }
      if (typeof x !== 'function') {
        if (isCalledAsFunction) {
          throw new Error("Can't call non-function: " + x);
        }
        return x;
      }
      return x.apply(data, arguments);
    };
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/attrs.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5893
   It is a copy of attrs.js file with the changes from the above pull request merged in.

   TODO: Remove this file eventually.
 */

var jsUrlsAllowed = false;
Blaze._allowJavascriptUrls = function () {
  jsUrlsAllowed = true;
};
Blaze._javascriptUrlsAllowed = function () {
  return jsUrlsAllowed;
};

// An AttributeHandler object is responsible for updating a particular attribute
// of a particular element.  AttributeHandler subclasses implement
// browser-specific logic for dealing with particular attributes across
// different browsers.
//
// To define a new type of AttributeHandler, use
// `var FooHandler = AttributeHandler.extend({ update: function ... })`
// where the `update` function takes arguments `(element, oldValue, value)`.
// The `element` argument is always the same between calls to `update` on
// the same instance.  `oldValue` and `value` are each either `null` or
// a Unicode string of the type that might be passed to the value argument
// of `setAttribute` (i.e. not an HTML string with character references).
// When an AttributeHandler is installed, an initial call to `update` is
// always made with `oldValue = null`.  The `update` method can access
// `this.name` if the AttributeHandler class is a generic one that applies
// to multiple attribute names.
//
// AttributeHandlers can store custom properties on `this`, as long as they
// don't use the names `element`, `name`, `value`, and `oldValue`.
//
// AttributeHandlers can't influence how attributes appear in rendered HTML,
// only how they are updated after materialization as DOM.

AttributeHandler = function (name, value) {
  this.name = name;
  this.value = value;
};
Blaze._AttributeHandler = AttributeHandler;

AttributeHandler.prototype.update = function (element, oldValue, value) {
  if (value === null) {
    if (oldValue !== null)
      element.removeAttribute(this.name);
  } else {
    element.setAttribute(this.name, value);
  }
};

AttributeHandler.extend = function (options) {
  var curType = this;
  var subType = function AttributeHandlerSubtype(/*arguments*/) {
    AttributeHandler.apply(this, arguments);
  };
  subType.prototype = new curType;
  subType.extend = curType.extend;
  if (options)
    _.extend(subType.prototype, options);
  return subType;
};

/// Apply the diff between the attributes of "oldValue" and "value" to "element."
//
// Each subclass must implement a parseValue method which takes a string
// as an input and returns a dict of attributes. The keys of the dict
// are unique identifiers (ie. css properties in the case of styles), and the
// values are the entire attribute which will be injected into the element.
//
// Extended below to support classes, SVG elements and styles.

Blaze._DiffingAttributeHandler = AttributeHandler.extend({
  update: function (element, oldValue, value) {
    if (!this.getCurrentValue || !this.setValue || !this.parseValue)
      throw new Error("Missing methods in subclass of 'DiffingAttributeHandler'");

    var oldAttrsMap = oldValue ? this.parseValue(oldValue) : {};
    var newAttrsMap = value ? this.parseValue(value) : {};

    // the current attributes on the element, which we will mutate.

    var attrString = this.getCurrentValue(element);
    var attrsMap = attrString ? this.parseValue(attrString) : {};

    _.each(_.keys(oldAttrsMap), function (t) {
      if (! (t in newAttrsMap))
        delete attrsMap[t];
    });

    _.each(_.keys(newAttrsMap), function (t) {
      attrsMap[t] = newAttrsMap[t];
    });

    this.setValue(element, _.values(attrsMap).join(' '));
  }
});

var ClassHandler = Blaze._DiffingAttributeHandler.extend({
  // @param rawValue {String}
  getCurrentValue: function (element) {
    return element.className;
  },
  setValue: function (element, className) {
    element.className = className;
  },
  parseValue: function (attrString) {
    var tokens = {};

    _.each(attrString.split(' '), function(token) {
      if (token)
        tokens[token] = token;
    });
    return tokens;
  }
});

var SVGClassHandler = ClassHandler.extend({
  getCurrentValue: function (element) {
    return element.className.baseVal;
  },
  setValue: function (element, className) {
    element.setAttribute('class', className);
  }
});

var StyleHandler = Blaze._DiffingAttributeHandler.extend({
  getCurrentValue: function (element) {
    return element.getAttribute('style');
  },
  setValue: function (element, style) {
    if (style === '') {
      element.removeAttribute('style');
    } else {
      element.setAttribute('style', style);
    }
  },

  // Parse a string to produce a map from property to attribute string.
  //
  // Example:
  // "color:red; foo:12px" produces a token {color: "color:red", foo:"foo:12px"}
  parseValue: function (attrString) {
    var tokens = {};

    // Regex for parsing a css attribute declaration, taken from css-parse:
    // https://github.com/reworkcss/css-parse/blob/7cef3658d0bba872cde05a85339034b187cb3397/index.js#L219
    var regex = /(\*?[-#\/\*\\\w]+(?:\[[0-9a-z_-]+\])?)\s*:\s*(?:\'(?:\\\'|.)*?\'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+[;\s]*/g;
    var match = regex.exec(attrString);
    while (match) {
      // match[0] = entire matching string
      // match[1] = css property
      // Prefix the token to prevent conflicts with existing properties.

      // XXX No `String.trim` on Safari 4. Swap out $.trim if we want to
      // remove strong dep on jquery.
      tokens[' ' + match[1]] = match[0].trim ?
        match[0].trim() : $.trim(match[0]);

      match = regex.exec(attrString);
    }

    return tokens;
  }
});

var BooleanHandler = AttributeHandler.extend({
  update: function (element, oldValue, value) {
    var name = this.name;
    if (value == null) {
      if (oldValue != null)
        element[name] = false;
    } else {
      element[name] = true;
    }
  }
});

var DOMPropertyHandler = AttributeHandler.extend({
  update: function (element, oldValue, value) {
    var name = this.name;
    if (value !== element[name])
      element[name] = value;
  }
});

// attributes of the type 'xlink:something' should be set using
// the correct namespace in order to work
var XlinkHandler = AttributeHandler.extend({
  update: function(element, oldValue, value) {
    var NS = 'http://www.w3.org/1999/xlink';
    if (value === null) {
      if (oldValue !== null)
        element.removeAttributeNS(NS, this.name);
    } else {
      element.setAttributeNS(NS, this.name, this.value);
    }
  }
});

// cross-browser version of `instanceof SVGElement`
var isSVGElement = function (elem) {
  return 'ownerSVGElement' in elem;
};

var isUrlAttribute = function (tagName, attrName) {
  // Compiled from http://www.w3.org/TR/REC-html40/index/attributes.html
  // and
  // http://www.w3.org/html/wg/drafts/html/master/index.html#attributes-1
  var urlAttrs = {
    FORM: ['action'],
    BODY: ['background'],
    BLOCKQUOTE: ['cite'],
    Q: ['cite'],
    DEL: ['cite'],
    INS: ['cite'],
    OBJECT: ['classid', 'codebase', 'data', 'usemap'],
    APPLET: ['codebase'],
    A: ['href'],
    AREA: ['href'],
    LINK: ['href'],
    BASE: ['href'],
    IMG: ['longdesc', 'src', 'usemap'],
    FRAME: ['longdesc', 'src'],
    IFRAME: ['longdesc', 'src'],
    HEAD: ['profile'],
    SCRIPT: ['src'],
    INPUT: ['src', 'usemap', 'formaction'],
    BUTTON: ['formaction'],
    BASE: ['href'],
    MENUITEM: ['icon'],
    HTML: ['manifest'],
    VIDEO: ['poster']
  };

  if (attrName === 'itemid') {
    return true;
  }

  var urlAttrNames = urlAttrs[tagName] || [];
  return _.contains(urlAttrNames, attrName);
};

// To get the protocol for a URL, we let the browser normalize it for
// us, by setting it as the href for an anchor tag and then reading out
// the 'protocol' property.
if (Meteor.isClient) {
  var anchorForNormalization = document.createElement('A');
}

var getUrlProtocol = function (url) {
  if (Meteor.isClient) {
    anchorForNormalization.href = url;
    return (anchorForNormalization.protocol || "").toLowerCase();
  } else {
    throw new Error('getUrlProtocol not implemented on the server');
  }
};

// UrlHandler is an attribute handler for all HTML attributes that take
// URL values. It disallows javascript: URLs, unless
// Blaze._allowJavascriptUrls() has been called. To detect javascript:
// urls, we set the attribute on a dummy anchor element and then read
// out the 'protocol' property of the attribute.
var origUpdate = AttributeHandler.prototype.update;
var UrlHandler = AttributeHandler.extend({
  update: function (element, oldValue, value) {
    var self = this;
    var args = arguments;

    if (Blaze._javascriptUrlsAllowed()) {
      origUpdate.apply(self, args);
    } else {
      var isJavascriptProtocol = (getUrlProtocol(value) === "javascript:");
      if (isJavascriptProtocol) {
        Blaze._warn("URLs that use the 'javascript:' protocol are not " +
                    "allowed in URL attribute values. " +
                    "Call Blaze._allowJavascriptUrls() " +
                    "to enable them.");
        origUpdate.apply(self, [element, oldValue, null]);
      } else {
        origUpdate.apply(self, args);
      }
    }
  }
});

// XXX make it possible for users to register attribute handlers!
Blaze._makeAttributeHandler = function (elem, name, value) {
  // generally, use setAttribute but certain attributes need to be set
  // by directly setting a JavaScript property on the DOM element.
  if (name === 'class') {
    if (isSVGElement(elem)) {
      return new SVGClassHandler(name, value);
    } else {
      return new ClassHandler(name, value);
    }
  } else if (name === 'style') {
    return new StyleHandler(name, value);
  } else if ((elem.tagName === 'OPTION' && name === 'selected') ||
             (elem.tagName === 'INPUT' && name === 'checked')) {
    return new BooleanHandler(name, value);
  } else if ((elem.tagName === 'TEXTAREA' || elem.tagName === 'INPUT')
             && name === 'value') {
    // internally, TEXTAREAs tracks their value in the 'value'
    // attribute just like INPUTs.
    return new DOMPropertyHandler(name, value);
  } else if (name.substring(0,6) === 'xlink:') {
    return new XlinkHandler(name.substring(6), value);
  } else if (isUrlAttribute(elem.tagName, name)) {
    return new UrlHandler(name, value);
  } else {
    return new AttributeHandler(name, value);
  }

  // XXX will need one for 'style' on IE, though modern browsers
  // seem to handle setAttribute ok.
};


ElementAttributesUpdater = function (elem) {
  this.elem = elem;
  this.handlers = {};
};

// Update attributes on `elem` to the dictionary `attrs`, whose
// values are strings.
ElementAttributesUpdater.prototype.update = function(newAttrs) {
  var elem = this.elem;
  var handlers = this.handlers;

  for (var k in handlers) {
    if (! _.has(newAttrs, k)) {
      // remove attributes (and handlers) for attribute names
      // that don't exist as keys of `newAttrs` and so won't
      // be visited when traversing it.  (Attributes that
      // exist in the `newAttrs` object but are `null`
      // are handled later.)
      var handler = handlers[k];
      var oldValue = handler.value;
      handler.value = null;
      handler.update(elem, oldValue, null);
      delete handlers[k];
    }
  }

  for (var k in newAttrs) {
    var handler = null;
    var oldValue;
    var value = newAttrs[k];
    if (! _.has(handlers, k)) {
      if (value !== null) {
        // make new handler
        handler = Blaze._makeAttributeHandler(elem, k, value);
        handlers[k] = handler;
        oldValue = null;
      }
    } else {
      handler = handlers[k];
      oldValue = handler.value;
    }
    if (oldValue !== value) {
      handler.value = value;
      handler.update(elem, oldValue, value);
      if (value === null)
        delete handlers[k];
    }
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/materializer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5893
   It is a copy of the materializer.js file and is needed because it references symbols from attrs.js.

   TODO: Remove this file eventually.
 */

// Turns HTMLjs into DOM nodes and DOMRanges.
//
// - `htmljs`: the value to materialize, which may be any of the htmljs
//   types (Tag, CharRef, Comment, Raw, array, string, boolean, number,
//   null, or undefined) or a View or Template (which will be used to
//   construct a View).
// - `intoArray`: the array of DOM nodes and DOMRanges to push the output
//   into (required)
// - `parentView`: the View we are materializing content for (optional)
// - `_existingWorkStack`: optional argument, only used for recursive
//   calls when there is some other _materializeDOM on the call stack.
//   If _materializeDOM called your function and passed in a workStack,
//   pass it back when you call _materializeDOM (such as from a workStack
//   task).
//
// Returns `intoArray`, which is especially useful if you pass in `[]`.
Blaze._materializeDOM = function (htmljs, intoArray, parentView,
                                  _existingWorkStack) {
  // In order to use fewer stack frames, materializeDOMInner can push
  // tasks onto `workStack`, and they will be popped off
  // and run, last first, after materializeDOMInner returns.  The
  // reason we use a stack instead of a queue is so that we recurse
  // depth-first, doing newer tasks first.
  var workStack = (_existingWorkStack || []);
  materializeDOMInner(htmljs, intoArray, parentView, workStack);

  if (! _existingWorkStack) {
    // We created the work stack, so we are responsible for finishing
    // the work.  Call each "task" function, starting with the top
    // of the stack.
    while (workStack.length) {
      // Note that running task() may push new items onto workStack.
      var task = workStack.pop();
      task();
    }
  }

  return intoArray;
};

var materializeDOMInner = function (htmljs, intoArray, parentView, workStack) {
  if (htmljs == null) {
    // null or undefined
    return;
  }

  switch (typeof htmljs) {
  case 'string': case 'boolean': case 'number':
    intoArray.push(document.createTextNode(String(htmljs)));
    return;
  case 'object':
    if (htmljs.htmljsType) {
      switch (htmljs.htmljsType) {
      case HTML.Tag.htmljsType:
        intoArray.push(materializeTag(htmljs, parentView, workStack));
        return;
      case HTML.CharRef.htmljsType:
        intoArray.push(document.createTextNode(htmljs.str));
        return;
      case HTML.Comment.htmljsType:
        intoArray.push(document.createComment(htmljs.sanitizedValue));
        return;
      case HTML.Raw.htmljsType:
        // Get an array of DOM nodes by using the browser's HTML parser
        // (like innerHTML).
        var nodes = Blaze._DOMBackend.parseHTML(htmljs.value);
        for (var i = 0; i < nodes.length; i++)
          intoArray.push(nodes[i]);
        return;
      }
    } else if (HTML.isArray(htmljs)) {
      for (var i = htmljs.length-1; i >= 0; i--) {
        workStack.push(_.bind(Blaze._materializeDOM, null,
                              htmljs[i], intoArray, parentView, workStack));
      }
      return;
    } else {
      if (htmljs instanceof Blaze.Template) {
        htmljs = htmljs.constructView();
        // fall through to Blaze.View case below
      }
      if (htmljs instanceof Blaze.View) {
        Blaze._materializeView(htmljs, parentView, workStack, intoArray);
        return;
      }
    }
  }

  throw new Error("Unexpected object in htmljs: " + htmljs);
};

var materializeTag = function (tag, parentView, workStack) {
  var tagName = tag.tagName;
  var elem;
  if ((HTML.isKnownSVGElement(tagName) || isSVGAnchor(tag))
      && document.createElementNS) {
    // inline SVG
    elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);
  } else {
    // normal elements
    elem = document.createElement(tagName);
  }

  var rawAttrs = tag.attrs;
  var children = tag.children;
  if (tagName === 'textarea' && tag.children.length &&
      ! (rawAttrs && ('value' in rawAttrs))) {
    // Provide very limited support for TEXTAREA tags with children
    // rather than a "value" attribute.
    // Reactivity in the form of Views nested in the tag's children
    // won't work.  Compilers should compile textarea contents into
    // the "value" attribute of the tag, wrapped in a function if there
    // is reactivity.
    if (typeof rawAttrs === 'function' ||
        HTML.isArray(rawAttrs)) {
      throw new Error("Can't have reactive children of TEXTAREA node; " +
                      "use the 'value' attribute instead.");
    }
    rawAttrs = _.extend({}, rawAttrs || null);
    rawAttrs.value = Blaze._expand(children, parentView);
    children = [];
  }

  if (rawAttrs) {
    var attrUpdater = new ElementAttributesUpdater(elem);
    var updateAttributes = function () {
      var expandedAttrs = Blaze._expandAttributes(rawAttrs, parentView);
      var flattenedAttrs = HTML.flattenAttributes(expandedAttrs);
      var stringAttrs = {};
      for (var attrName in flattenedAttrs) {
        stringAttrs[attrName] = Blaze._toText(flattenedAttrs[attrName],
                                              parentView,
                                              HTML.TEXTMODE.STRING);
      }
      attrUpdater.update(stringAttrs);
    };
    var updaterComputation;
    if (parentView) {
      updaterComputation =
        parentView.autorun(updateAttributes, undefined, 'updater');
    } else {
      updaterComputation = Tracker.nonreactive(function () {
        return Tracker.autorun(function () {
          Tracker._withCurrentView(parentView, updateAttributes);
        });
      });
    }
    Blaze._DOMBackend.Teardown.onElementTeardown(elem, function attrTeardown() {
      updaterComputation.stop();
    });
  }

  if (children.length) {
    var childNodesAndRanges = [];
    // push this function first so that it's done last
    workStack.push(function () {
      for (var i = 0; i < childNodesAndRanges.length; i++) {
        var x = childNodesAndRanges[i];
        if (x instanceof Blaze._DOMRange)
          x.attach(elem);
        else
          elem.appendChild(x);
      }
    });
    // now push the task that calculates childNodesAndRanges
    workStack.push(_.bind(Blaze._materializeDOM, null,
                          children, childNodesAndRanges, parentView,
                          workStack));
  }

  return elem;
};


var isSVGAnchor = function (node) {
  // We generally aren't able to detect SVG <a> elements because
  // if "A" were in our list of known svg element names, then all
  // <a> nodes would be created using
  // `document.createElementNS`. But in the special case of <a
  // xlink:href="...">, we can at least detect that attribute and
  // create an SVG <a> tag in that case.
  //
  // However, we still have a general problem of knowing when to
  // use document.createElementNS and when to use
  // document.createElement; for example, font tags will always
  // be created as SVG elements which can cause other
  // problems. #1977
  return (node.tagName === "a" &&
          node.attrs &&
          node.attrs["xlink:href"] !== undefined);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/lib.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ComponentsNamespaceReference, HTMLJSExpander, REQUIRE_RENDERED_INSTANCE, SUPPORTS_REACTIVE_INSTANCE, addEvents, argumentsConstructor, bindComponent, bindDataContext, callTemplateBaseHooks, contentAsFunc, contentAsView, createMatcher, currentViewIfRendering, expand, expandView, getTemplateBase, getTemplateInstance, getTemplateInstanceFunction, method, methodName, originalDot, originalFlattenAttributes, originalGetTemplate, originalInclude, originalVisitTag, ref, registerFirstCreatedHook, registerHooks, templateInstanceToComponent, withTemplateInstanceFunc, wrapHelper, wrapViewAndTemplate,                
  slice = [].slice,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

createMatcher = function(propertyOrMatcherOrFunction, checkMixins) {
  var matcher, property;
  if (_.isString(propertyOrMatcherOrFunction)) {
    property = propertyOrMatcherOrFunction;
    propertyOrMatcherOrFunction = (function(_this) {
      return function(child, parent) {
        if (checkMixins && child !== parent && child.getFirstWith) {
          return !!child.getFirstWith(null, property);
        } else {
          return property in child;
        }
      };
    })(this);
  } else if (!_.isFunction(propertyOrMatcherOrFunction)) {
    assert(_.isObject(propertyOrMatcherOrFunction));
    matcher = propertyOrMatcherOrFunction;
    propertyOrMatcherOrFunction = (function(_this) {
      return function(child, parent) {
        var childWithProperty, value;
        for (property in matcher) {
          value = matcher[property];
          if (checkMixins && child !== parent && child.getFirstWith) {
            childWithProperty = child.getFirstWith(null, property);
          } else {
            if (property in child) {
              childWithProperty = child;
            }
          }
          if (!childWithProperty) {
            return false;
          }
          if (_.isFunction(childWithProperty[property])) {
            if (childWithProperty[property]() !== value) {
              return false;
            }
          } else {
            if (childWithProperty[property] !== value) {
              return false;
            }
          }
        }
        return true;
      };
    })(this);
  }
  return propertyOrMatcherOrFunction;
};

getTemplateInstance = function(view, skipBlockHelpers) {
  while (view && !view._templateInstance) {
    if (skipBlockHelpers) {
      view = view.parentView;
    } else {
      view = view.originalParentView || view.parentView;
    }
  }
  return view != null ? view._templateInstance : void 0;
};

templateInstanceToComponent = function(templateInstanceFunc, skipBlockHelpers) {
  var templateInstance;
  templateInstance = typeof templateInstanceFunc === "function" ? templateInstanceFunc() : void 0;
  templateInstance = getTemplateInstance(templateInstance != null ? templateInstance.view : void 0, skipBlockHelpers);
  while (templateInstance) {
    if ('component' in templateInstance) {
      return templateInstance.component;
    }
    if (skipBlockHelpers) {
      templateInstance = getTemplateInstance(templateInstance.view.parentView, skipBlockHelpers);
    } else {
      templateInstance = getTemplateInstance(templateInstance.view.originalParentView || templateInstance.view.parentView, skipBlockHelpers);
    }
  }
  return null;
};

getTemplateInstanceFunction = function(view, skipBlockHelpers) {
  var templateInstance;
  templateInstance = getTemplateInstance(view, skipBlockHelpers);
  return function() {
    return templateInstance;
  };
};

ComponentsNamespaceReference = (function() {
  function ComponentsNamespaceReference(namespace, templateInstance1) {
    this.namespace = namespace;
    this.templateInstance = templateInstance1;
  }

  return ComponentsNamespaceReference;

})();

originalDot = Spacebars.dot;

Spacebars.dot = function() {
  var args, value;
  value = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  if (value instanceof ComponentsNamespaceReference) {
    return Blaze._getTemplate(value.namespace + "." + (args.join('.')), value.templateInstance);
  }
  return originalDot.apply(null, [value].concat(slice.call(args)));
};

originalInclude = Spacebars.include;

Spacebars.include = function() {
  var args, templateOrFunction;
  templateOrFunction = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  if (templateOrFunction instanceof ComponentsNamespaceReference) {
    templateOrFunction = Blaze._getTemplate(templateOrFunction.namespace, templateOrFunction.templateInstance);
  }
  return originalInclude.apply(null, [templateOrFunction].concat(slice.call(args)));
};

Blaze._getTemplateHelper = function(template, name, templateInstance) {
  var component, helper, isKnownOldStyleHelper, mixinOrComponent, ref, ref1, ref2;
  isKnownOldStyleHelper = false;
  if (template.__helpers.has(name)) {
    helper = template.__helpers.get(name);
    if (helper === Blaze._OLDSTYLE_HELPER) {
      isKnownOldStyleHelper = true;
    } else if (helper != null) {
      return wrapHelper(bindDataContext(helper), templateInstance);
    } else {
      return null;
    }
  }
  if (name in template) {
    if (!isKnownOldStyleHelper) {
      template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);
      if (!template._NOWARN_OLDSTYLE_HELPERS) {
        Blaze._warn("Assigning helper with `" + template.viewName + "." + name + " = ...` is deprecated.  Use `" + template.viewName + ".helpers(...)` instead.");
      }
    }
    if (template[name] != null) {
      return wrapHelper(bindDataContext(template[name]), templateInstance);
    } else {
      return null;
    }
  }
  if (!templateInstance) {
    return null;
  }
  if ((ref = template.viewName) === 'Template.__dynamicWithDataContext' || ref === 'Template.__dynamic') {
    return null;
  }
  component = Tracker.nonreactive(function() {
    return templateInstanceToComponent(templateInstance, true);
  });
  if (component) {
    if (mixinOrComponent = component.getFirstWith(null, name)) {
      return wrapHelper(bindComponent(mixinOrComponent, mixinOrComponent[name]), templateInstance);
    }
  }
  if (name && name in BlazeComponent.components) {
    return new ComponentsNamespaceReference(name, templateInstance);
  }
  if (component) {
    if ((helper = (ref1 = component._componentInternals) != null ? (ref2 = ref1.templateBase) != null ? ref2.__helpers.get(name) : void 0 : void 0) != null) {
      return wrapHelper(bindDataContext(helper), templateInstance);
    }
  }
  return null;
};

share.inExpandAttributes = false;

bindComponent = function(component, helper) {
  if (_.isFunction(helper)) {
    return function() {
      var args, name, result, value;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      result = helper.apply(component, args);
      if (share.inExpandAttributes && _.isObject(result)) {
        for (name in result) {
          value = result[name];
          if (share.EVENT_HANDLER_REGEX.test(name)) {
            if (_.isFunction(value)) {
              result[name] = _.bind(value, component);
            } else if (_.isArray(value)) {
              result[name] = _.map(value, function(fun) {
                if (_.isFunction(fun)) {
                  return _.bind(fun, component);
                } else {
                  return fun;
                }
              });
            }
          }
        }
      }
      return result;
    };
  } else {
    return helper;
  }
};

bindDataContext = function(helper) {
  if (_.isFunction(helper)) {
    return function() {
      var data;
      data = Blaze.getData();
      if (data == null) {
        data = {};
      }
      return helper.apply(data, arguments);
    };
  } else {
    return helper;
  }
};

wrapHelper = function(f, templateFunc) {
  if (!Blaze.Template._withTemplateInstanceFunc) {
    return Blaze._wrapCatchingExceptions(f, 'template helper');
  }
  if (!_.isFunction(f)) {
    return f;
  }
  return function() {
    var args, self;
    self = this;
    args = arguments;
    return Blaze.Template._withTemplateInstanceFunc(templateFunc, function() {
      return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);
    });
  };
};

if (Blaze.Template._withTemplateInstanceFunc) {
  withTemplateInstanceFunc = Blaze.Template._withTemplateInstanceFunc;
} else {
  withTemplateInstanceFunc = function(templateInstance, f) {
    return f();
  };
}

getTemplateBase = function(component) {
  return Tracker.nonreactive(function() {
    var componentTemplate, templateBase;
    componentTemplate = component.template();
    if (_.isString(componentTemplate)) {
      templateBase = Template[componentTemplate];
      if (!templateBase) {
        throw new Error("Template '" + componentTemplate + "' cannot be found.");
      }
    } else if (componentTemplate) {
      templateBase = componentTemplate;
    } else {
      throw new Error("Template for the component '" + (component.componentName() || 'unnamed') + "' not provided.");
    }
    return templateBase;
  });
};

callTemplateBaseHooks = function(component, hookName) {
  var callbacks, templateInstance;
  if (component !== component.component()) {
    return;
  }
  templateInstance = Tracker.nonreactive(function() {
    return component._componentInternals.templateInstance();
  });
  callbacks = component._componentInternals.templateBase._getCallbacks(hookName);
  Template._withTemplateInstanceFunc(function() {
    return templateInstance;
  }, function() {
    var callback, i, len, results;
    results = [];
    for (i = 0, len = callbacks.length; i < len; i++) {
      callback = callbacks[i];
      results.push(callback.call(templateInstance));
    }
    return results;
  });
};

wrapViewAndTemplate = function(currentView, f) {
  var templateInstance;
  templateInstance = getTemplateInstanceFunction(currentView, true);
  return withTemplateInstanceFunc(templateInstance, function() {
    return Blaze._withCurrentView(currentView, function() {
      return f();
    });
  });
};

addEvents = function(view, component) {
  var eventMap, events, eventsList, fn, handler, i, len, spec;
  eventsList = component.events();
  if (!_.isArray(eventsList)) {
    throw new Error("'events' method from the component '" + (component.componentName() || 'unnamed') + "' did not return a list of event maps.");
  }
  for (i = 0, len = eventsList.length; i < len; i++) {
    events = eventsList[i];
    eventMap = {};
    fn = function(spec, handler) {
      return eventMap[spec] = function() {
        var args, currentView, event;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        event = args[0];
        currentView = Blaze.getView(event.currentTarget);
        wrapViewAndTemplate(currentView, function() {
          return handler.apply(component, args);
        });
      };
    };
    for (spec in events) {
      handler = events[spec];
      fn(spec, handler);
    }
    Blaze._addEventMap(view, eventMap, view);
  }
};

originalGetTemplate = Blaze._getTemplate;

Blaze._getTemplate = function(name, templateInstance) {
  var template;
  template = Tracker.nonreactive(function() {
    var parentComponent, ref;
    if (Blaze.currentView) {
      parentComponent = BlazeComponent.currentComponent();
    } else {
      parentComponent = templateInstanceToComponent(templateInstance, false);
    }
    return (ref = BlazeComponent.getComponent(name)) != null ? ref.renderComponent(parentComponent) : void 0;
  });
  if (template && (template instanceof Blaze.Template || _.isFunction(template))) {
    return template;
  }
  return originalGetTemplate(name);
};

registerHooks = function(template, hooks) {
  if (template.onCreated) {
    template.onCreated(hooks.onCreated);
    template.onRendered(hooks.onRendered);
    return template.onDestroyed(hooks.onDestroyed);
  } else {
    template.created = hooks.onCreated;
    template.rendered = hooks.onRendered;
    return template.destroyed = hooks.onDestroyed;
  }
};

registerFirstCreatedHook = function(template, onCreated) {
  var oldCreated;
  if (template._callbacks) {
    return template._callbacks.created.unshift(onCreated);
  } else {
    oldCreated = template.created;
    return template.created = function() {
      onCreated.call(this);
      return oldCreated != null ? oldCreated.call(this) : void 0;
    };
  }
};

Template.__dynamicWithDataContext.__helpers.set('chooseTemplate', function(name) {
  return Blaze._getTemplate(name, (function(_this) {
    return function() {
      return Template.instance();
    };
  })(this));
});

argumentsConstructor = function() {
  return assert(false);
};

Template.registerHelper('args', function() {
  var obj;
  obj = {};
  obj.constructor = argumentsConstructor;
  obj._arguments = arguments;
  return obj;
});

share.EVENT_HANDLER_REGEX = /^on[A-Z]/;

share.isEventHandler = function(fun) {
  return _.isFunction(fun) && fun.eventHandler;
};

originalFlattenAttributes = HTML.flattenAttributes;

HTML.flattenAttributes = function(attrs) {
  var name, value;
  if (attrs = originalFlattenAttributes(attrs)) {
    for (name in attrs) {
      value = attrs[name];
      if (!(share.EVENT_HANDLER_REGEX.test(name))) {
        continue;
      }
      if (share.isEventHandler(value)) {
        continue;
      }
      if (_.isArray(value) && _.some(value, share.isEventHandler)) {
        continue;
      }
      if (_.isArray(value)) {
        attrs[name] = _.map(value, Spacebars.event);
      } else {
        attrs[name] = Spacebars.event(value);
      }
    }
  }
  return attrs;
};

Spacebars.event = function() {
  var args, eventHandler, fun;
  eventHandler = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  if (!_.isFunction(eventHandler)) {
    throw new Error("Event handler not a function: " + eventHandler);
  }
  args = Spacebars.mustacheImpl.apply(Spacebars, [(function() {
    var xs;
    xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return xs;
  })].concat(slice.call(args)));
  fun = function() {
    var currentView, event, eventArgs;
    event = arguments[0], eventArgs = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    currentView = Blaze.getView(event.currentTarget);
    return wrapViewAndTemplate(currentView, function() {
      return eventHandler.apply(null, [event].concat(args, eventArgs));
    });
  };
  fun.eventHandler = true;
  return fun;
};

originalVisitTag = HTML.ToHTMLVisitor.prototype.visitTag;

HTML.ToHTMLVisitor.prototype.visitTag = function(tag) {
  var attrs, name;
  if (attrs = tag.attrs) {
    attrs = HTML.flattenAttributes(attrs);
    for (name in attrs) {
      if (share.EVENT_HANDLER_REGEX.test(name)) {
        delete attrs[name];
      }
    }
    tag.attrs = attrs;
  }
  return originalVisitTag.call(this, tag);
};

currentViewIfRendering = function() {
  var view;
  view = Blaze.currentView;
  if (view != null ? view._isInRender : void 0) {
    return view;
  } else {
    return null;
  }
};

contentAsFunc = function(content) {
  if (!_.isFunction(content)) {
    return function() {
      return content;
    };
  }
  return content;
};

contentAsView = function(content) {
  if (content instanceof Blaze.Template) {
    return content.constructView();
  } else if (content instanceof Blaze.View) {
    return content;
  } else {
    return Blaze.View('render', contentAsFunc(content));
  }
};

HTMLJSExpander = Blaze._HTMLJSExpander.extend();

HTMLJSExpander.def({
  visitObject: function(x) {
    if (x instanceof Blaze.Template) {
      x = x.constructView();
    }
    if (x instanceof Blaze.View) {
      return expandView(x, this.parentView);
    }
    return HTML.TransformingVisitor.prototype.visitObject.call(this, x);
  }
});

expand = function(htmljs, parentView) {
  parentView = parentView || currentViewIfRendering();
  return (new HTMLJSExpander({
    parentView: parentView
  })).visit(htmljs);
};

expandView = function(view, parentView) {
  var htmljs, result;
  Blaze._createView(view, parentView, true);
  view._isInRender = true;
  htmljs = Blaze._withCurrentView(view, function() {
    return view._render();
  });
  view._isInRender = false;
  Tracker.flush();
  result = expand(htmljs, view);
  Tracker.flush();
  if (Tracker.active) {
    Tracker.onInvalidate(function() {
      return Blaze._destroyView(view);
    });
  } else {
    Blaze._destroyView(view);
  }
  Tracker.flush();
  return result;
};

BlazeComponent = (function(superClass) {
  extend(BlazeComponent, superClass);

  function BlazeComponent() {
    return BlazeComponent.__super__.constructor.apply(this, arguments);
  }

  BlazeComponent.getComponentForElement = function(domElement) {
    var templateInstance;
    if (!domElement) {
      return null;
    }
    if (domElement.nodeType !== Node.ELEMENT_NODE) {
      throw new Error("Expected DOM element.");
    }
    templateInstance = getTemplateInstanceFunction(Blaze.getView(domElement), true);
    return templateInstanceToComponent(templateInstance, true);
  };

  BlazeComponent.prototype.childComponents = function(nameOrComponent) {
    var component;
    if ((component = this.component()) !== this) {
      return component.childComponents(nameOrComponent);
    } else {
      return BlazeComponent.__super__.childComponents.apply(this, arguments);
    }
  };

  BlazeComponent.prototype.childComponentsWith = function(propertyOrMatcherOrFunction) {
    var component;
    if ((component = this.component()) !== this) {
      return component.childComponentsWith(propertyOrMatcherOrFunction);
    } else {
      assert(propertyOrMatcherOrFunction);
      propertyOrMatcherOrFunction = createMatcher(propertyOrMatcherOrFunction, true);
      return BlazeComponent.__super__.childComponentsWith.call(this, propertyOrMatcherOrFunction);
    }
  };

  BlazeComponent.prototype.parentComponent = function(parentComponent) {
    var component;
    if ((component = this.component()) !== this) {
      return component.parentComponent(parentComponent);
    } else {
      return BlazeComponent.__super__.parentComponent.apply(this, arguments);
    }
  };

  BlazeComponent.prototype.addChildComponent = function(childComponent) {
    var component;
    if ((component = this.component()) !== this) {
      return component.addChildComponent(childComponent);
    } else {
      return BlazeComponent.__super__.addChildComponent.apply(this, arguments);
    }
  };

  BlazeComponent.prototype.removeChildComponent = function(childComponent) {
    var component;
    if ((component = this.component()) !== this) {
      return component.removeChildComponent(childComponent);
    } else {
      return BlazeComponent.__super__.removeChildComponent.apply(this, arguments);
    }
  };

  BlazeComponent.prototype.mixins = function() {
    return [];
  };

  BlazeComponent.prototype.mixinParent = function(mixinParent) {
    if (this._componentInternals == null) {
      this._componentInternals = {};
    }
    if (mixinParent) {
      this._componentInternals.mixinParent = mixinParent;
      return this;
    }
    return this._componentInternals.mixinParent || null;
  };

  BlazeComponent.prototype.requireMixin = function(nameOrMixin) {
    var ref;
    assert((ref = this._componentInternals) != null ? ref.mixins : void 0);
    Tracker.nonreactive((function(_this) {
      return function() {
        var base, component, mixinInstance, mixinInstanceComponent, ref1, ref2, ref3;
        if (_this.getMixin(nameOrMixin)) {
          return;
        }
        if (_.isString(nameOrMixin)) {
          if (_this.constructor.getComponent) {
            mixinInstanceComponent = _this.constructor.getComponent(nameOrMixin);
          } else {
            mixinInstanceComponent = BlazeComponent.getComponent(nameOrMixin);
          }
          if (!mixinInstanceComponent) {
            throw new Error("Unknown mixin '" + nameOrMixin + "'.");
          }
          mixinInstance = new mixinInstanceComponent();
        } else if (_.isFunction(nameOrMixin)) {
          mixinInstance = new nameOrMixin();
        } else {
          mixinInstance = nameOrMixin;
        }
        _this._componentInternals.mixins.push(mixinInstance);
        if (mixinInstance.mixinParent) {
          mixinInstance.mixinParent(_this);
        }
        if (typeof mixinInstance.createMixins === "function") {
          mixinInstance.createMixins();
        }
        if (component = _this.component()) {
          if (component._componentInternals == null) {
            component._componentInternals = {};
          }
          if ((base = component._componentInternals).templateInstance == null) {
            base.templateInstance = new ReactiveField(null, function(a, b) {
              return a === b;
            });
          }
          if (!((ref1 = component._componentInternals.templateInstance()) != null ? ref1.view.isDestroyed : void 0)) {
            if (!component._componentInternals.inOnCreated && ((ref2 = component._componentInternals.templateInstance()) != null ? ref2.view.isCreated : void 0)) {
              if (typeof mixinInstance.onCreated === "function") {
                mixinInstance.onCreated();
              }
            }
            if (!component._componentInternals.inOnRendered && ((ref3 = component._componentInternals.templateInstance()) != null ? ref3.view.isRendered : void 0)) {
              return typeof mixinInstance.onRendered === "function" ? mixinInstance.onRendered() : void 0;
            }
          }
        }
      };
    })(this));
    return this;
  };

  BlazeComponent.prototype.createMixins = function() {
    var i, len, mixin, ref;
    if (this._componentInternals == null) {
      this._componentInternals = {};
    }
    if (this._componentInternals.mixins) {
      return;
    }
    this._componentInternals.mixins = [];
    ref = this.mixins();
    for (i = 0, len = ref.length; i < len; i++) {
      mixin = ref[i];
      this.requireMixin(mixin);
    }
    return this;
  };

  BlazeComponent.prototype.getMixin = function(nameOrMixin) {
    if (_.isString(nameOrMixin)) {
      return this.getFirstWith(this, (function(_this) {
        return function(child, parent) {
          var mixinComponentName;
          mixinComponentName = (typeof child.componentName === "function" ? child.componentName() : void 0) || null;
          return mixinComponentName && mixinComponentName === nameOrMixin;
        };
      })(this));
    } else {
      return this.getFirstWith(this, (function(_this) {
        return function(child, parent) {
          if (child.constructor === nameOrMixin) {
            return true;
          }
          if (child === nameOrMixin) {
            return true;
          }
          return false;
        };
      })(this));
    }
  };

  BlazeComponent.prototype.callFirstWith = function() {
    var afterComponentOrMixin, args, componentOrMixin, propertyName;
    afterComponentOrMixin = arguments[0], propertyName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    assert(_.isString(propertyName));
    componentOrMixin = this.getFirstWith(afterComponentOrMixin, propertyName);
    if (!componentOrMixin) {
      return;
    }
    if (_.isFunction(componentOrMixin[propertyName])) {
      return componentOrMixin[propertyName].apply(componentOrMixin, args);
    } else {
      return componentOrMixin[propertyName];
    }
  };

  BlazeComponent.prototype.getFirstWith = function(afterComponentOrMixin, propertyOrMatcherOrFunction) {
    var found, i, len, mixin, ref, ref1;
    assert((ref = this._componentInternals) != null ? ref.mixins : void 0);
    assert(propertyOrMatcherOrFunction);
    propertyOrMatcherOrFunction = createMatcher(propertyOrMatcherOrFunction, false);
    if (!afterComponentOrMixin) {
      if (propertyOrMatcherOrFunction.call(this, this, this)) {
        return this;
      }
      found = true;
    } else if (afterComponentOrMixin && afterComponentOrMixin === this) {
      found = true;
    } else {
      found = false;
    }
    ref1 = this._componentInternals.mixins;
    for (i = 0, len = ref1.length; i < len; i++) {
      mixin = ref1[i];
      if (found && propertyOrMatcherOrFunction.call(this, mixin, this)) {
        return mixin;
      }
      if (mixin === afterComponentOrMixin) {
        found = true;
      }
    }
    return null;
  };

  BlazeComponent.renderComponent = function(parentComponent) {
    return Tracker.nonreactive((function(_this) {
      return function() {
        var componentClass, data;
        componentClass = _this;
        if (Blaze.currentView) {
          data = Template.currentData();
        } else {
          data = null;
        }
        if ((data != null ? data.constructor : void 0) !== argumentsConstructor) {
          return wrapViewAndTemplate(Blaze.currentView, function() {
            var component;
            component = new componentClass();
            return component.renderComponent(parentComponent);
          });
        }
        return function() {
          var currentWith, nonreactiveArguments, reactiveArguments;
          assert(Tracker.active);
          currentWith = Blaze.getView('with');
          reactiveArguments = new ComputedField(function() {
            data = currentWith.dataVar.get();
            assert.equal(data != null ? data.constructor : void 0, argumentsConstructor);
            return data._arguments;
          }, EJSON.equals);
          nonreactiveArguments = reactiveArguments();
          return Tracker.nonreactive(function() {
            var template;
            template = Blaze._withCurrentView(Blaze.currentView.parentView.parentView, (function(_this) {
              return function() {
                return wrapViewAndTemplate(Blaze.currentView, function() {
                  var component;
                  component = (function(func, args, ctor) {
                    ctor.prototype = func.prototype;
                    var child = new ctor, result = func.apply(child, args);
                    return Object(result) === result ? result : child;
                  })(componentClass, nonreactiveArguments, function(){});
                  return component.renderComponent(parentComponent);
                });
              };
            })(this));
            registerFirstCreatedHook(template, function() {
              this.view.originalParentView = this.view.parentView;
              return this.view.parentView = this.view.parentView.parentView.parentView;
            });
            return template;
          });
        };
      };
    })(this));
  };

  BlazeComponent.prototype.renderComponent = function(parentComponent) {
    return Tracker.nonreactive((function(_this) {
      return function() {
        var component, template, templateBase;
        component = _this.component();
        component.createMixins();
        templateBase = getTemplateBase(component);
        template = new Blaze.Template("BlazeComponent." + (component.componentName() || 'unnamed'), templateBase.renderFunction);
        if (component._componentInternals == null) {
          component._componentInternals = {};
        }
        component._componentInternals.templateBase = templateBase;
        registerHooks(template, {
          onCreated: function() {
            var base, base1, base2, base3, componentOrMixin, results;
            if (parentComponent) {
              Tracker.nonreactive((function(_this) {
                return function() {
                  var ref;
                  assert(!component.parentComponent(), "Component '" + (component.componentName() || 'unnamed') + "' parent component '" + (((ref = component.parentComponent()) != null ? ref.componentName() : void 0) || 'unnamed') + "' already set.");
                  component.parentComponent(parentComponent);
                  return parentComponent.addChildComponent(component);
                };
              })(this));
            }
            this.view._onViewRendered((function(_this) {
              return function() {
                var componentOrMixin, results;
                if (_this.view.renderCount !== 1) {
                  return;
                }
                componentOrMixin = null;
                results = [];
                while (componentOrMixin = _this.component.getFirstWith(componentOrMixin, 'events')) {
                  results.push(addEvents(_this.view, componentOrMixin));
                }
                return results;
              };
            })(this));
            this.component = component;
            assert(!Tracker.nonreactive((function(_this) {
              return function() {
                var base;
                return typeof (base = _this.component._componentInternals).templateInstance === "function" ? base.templateInstance() : void 0;
              };
            })(this)));
            if ((base = this.component._componentInternals).templateInstance == null) {
              base.templateInstance = new ReactiveField(this, function(a, b) {
                return a === b;
              });
            }
            this.component._componentInternals.templateInstance(this);
            if ((base1 = this.component._componentInternals).isCreated == null) {
              base1.isCreated = new ReactiveField(true);
            }
            this.component._componentInternals.isCreated(true);
            if ((base2 = this.component._componentInternals).isRendered == null) {
              base2.isRendered = new ReactiveField(false);
            }
            this.component._componentInternals.isRendered(false);
            if ((base3 = this.component._componentInternals).isDestroyed == null) {
              base3.isDestroyed = new ReactiveField(false);
            }
            this.component._componentInternals.isDestroyed(false);
            try {
              this.component._componentInternals.inOnCreated = true;
              componentOrMixin = null;
              results = [];
              while (componentOrMixin = this.component.getFirstWith(componentOrMixin, 'onCreated')) {
                results.push(componentOrMixin.onCreated());
              }
              return results;
            } finally {
              delete this.component._componentInternals.inOnCreated;
            }
          },
          onRendered: function() {
            var base, componentOrMixin, results;
            if ((base = this.component._componentInternals).isRendered == null) {
              base.isRendered = new ReactiveField(true);
            }
            this.component._componentInternals.isRendered(true);
            Tracker.nonreactive((function(_this) {
              return function() {
                return assert.equal(_this.component._componentInternals.isCreated(), true);
              };
            })(this));
            try {
              this.component._componentInternals.inOnRendered = true;
              componentOrMixin = null;
              results = [];
              while (componentOrMixin = this.component.getFirstWith(componentOrMixin, 'onRendered')) {
                results.push(componentOrMixin.onRendered());
              }
              return results;
            } finally {
              delete this.component._componentInternals.inOnRendered;
            }
          },
          onDestroyed: function() {
            return this.autorun((function(_this) {
              return function(computation) {
                if (_this.component.childComponents().length) {
                  return;
                }
                computation.stop();
                return Tracker.nonreactive(function() {
                  var base, base1, componentOrMixin;
                  assert.equal(_this.component._componentInternals.isCreated(), true);
                  _this.component._componentInternals.isCreated(false);
                  if ((base = _this.component._componentInternals).isRendered == null) {
                    base.isRendered = new ReactiveField(false);
                  }
                  _this.component._componentInternals.isRendered(false);
                  if ((base1 = _this.component._componentInternals).isDestroyed == null) {
                    base1.isDestroyed = new ReactiveField(true);
                  }
                  _this.component._componentInternals.isDestroyed(true);
                  componentOrMixin = null;
                  while (componentOrMixin = _this.component.getFirstWith(componentOrMixin, 'onDestroyed')) {
                    componentOrMixin.onDestroyed();
                  }
                  if (parentComponent) {
                    component.parentComponent(null);
                    parentComponent.removeChildComponent(component);
                  }
                  return _this.component._componentInternals.templateInstance(null);
                });
              };
            })(this));
          }
        });
        return template;
      };
    })(this));
  };

  BlazeComponent.prototype.removeComponent = function() {
    if (this.isRendered()) {
      return Blaze.remove(this.component()._componentInternals.templateInstance().view);
    }
  };

  BlazeComponent._renderComponentTo = function(visitor, parentComponent, parentView, data) {
    var component;
    component = Tracker.nonreactive((function(_this) {
      return function() {
        var componentClass;
        componentClass = _this;
        parentView = parentView || currentViewIfRendering() || ((parentComponent != null ? parentComponent.isRendered() : void 0) && parentComponent._componentInternals.templateInstance().view) || null;
        return wrapViewAndTemplate(parentView, function() {
          return new componentClass();
        });
      };
    })(this));
    if (arguments.length > 2) {
      return component._renderComponentTo(visitor, parentComponent, parentView, data);
    } else {
      return component._renderComponentTo(visitor, parentComponent, parentView);
    }
  };

  BlazeComponent.renderComponentToHTML = function(parentComponent, parentView, data) {
    if (arguments.length > 2) {
      return this._renderComponentTo(new HTML.ToHTMLVisitor(), parentComponent, parentView, data);
    } else {
      return this._renderComponentTo(new HTML.ToHTMLVisitor(), parentComponent, parentView);
    }
  };

  BlazeComponent.prototype._renderComponentTo = function(visitor, parentComponent, parentView, data) {
    var expandedView, template;
    template = Tracker.nonreactive((function(_this) {
      return function() {
        parentView = parentView || currentViewIfRendering() || ((parentComponent != null ? parentComponent.isRendered() : void 0) && parentComponent._componentInternals.templateInstance().view) || null;
        return wrapViewAndTemplate(parentView, function() {
          return _this.component().renderComponent(parentComponent);
        });
      };
    })(this));
    if (arguments.length > 2) {
      expandedView = expandView(Blaze._TemplateWith(data, contentAsFunc(template)), parentView);
    } else {
      expandedView = expandView(contentAsView(template), parentView);
    }
    return visitor.visit(expandedView);
  };

  BlazeComponent.prototype.renderComponentToHTML = function(parentComponent, parentView, data) {
    if (arguments.length > 2) {
      return this._renderComponentTo(new HTML.ToHTMLVisitor(), parentComponent, parentView, data);
    } else {
      return this._renderComponentTo(new HTML.ToHTMLVisitor(), parentComponent, parentView);
    }
  };

  BlazeComponent.prototype.template = function() {
    return this.callFirstWith(this, 'template') || this.constructor.componentName();
  };

  BlazeComponent.prototype.onCreated = function() {
    return callTemplateBaseHooks(this, 'created');
  };

  BlazeComponent.prototype.onRendered = function() {
    return callTemplateBaseHooks(this, 'rendered');
  };

  BlazeComponent.prototype.onDestroyed = function() {
    return callTemplateBaseHooks(this, 'destroyed');
  };

  BlazeComponent.prototype.isCreated = function() {
    var base, component;
    component = this.component();
    if (component._componentInternals == null) {
      component._componentInternals = {};
    }
    if ((base = component._componentInternals).isCreated == null) {
      base.isCreated = new ReactiveField(false);
    }
    return component._componentInternals.isCreated();
  };

  BlazeComponent.prototype.isRendered = function() {
    var base, component;
    component = this.component();
    if (component._componentInternals == null) {
      component._componentInternals = {};
    }
    if ((base = component._componentInternals).isRendered == null) {
      base.isRendered = new ReactiveField(false);
    }
    return component._componentInternals.isRendered();
  };

  BlazeComponent.prototype.isDestroyed = function() {
    var base, component;
    component = this.component();
    if (component._componentInternals == null) {
      component._componentInternals = {};
    }
    if ((base = component._componentInternals).isDestroyed == null) {
      base.isDestroyed = new ReactiveField(false);
    }
    return component._componentInternals.isDestroyed();
  };

  BlazeComponent.prototype.insertDOMElement = function(parent, node, before) {
    if (before == null) {
      before = null;
    }
    if (parent && node && (node.parentNode !== parent || node.nextSibling !== before)) {
      parent.insertBefore(node, before);
    }
  };

  BlazeComponent.prototype.moveDOMElement = function(parent, node, before) {
    if (before == null) {
      before = null;
    }
    if (parent && node && (node.parentNode !== parent || node.nextSibling !== before)) {
      parent.insertBefore(node, before);
    }
  };

  BlazeComponent.prototype.removeDOMElement = function(parent, node) {
    if (parent && node && node.parentNode === parent) {
      parent.removeChild(node);
    }
  };

  BlazeComponent.prototype.events = function() {
    var eventMap, events, fn, handler, i, len, ref, results, spec, templateInstance, view;
    if (this !== this.component()) {
      return [];
    }
    if (this._componentInternals == null) {
      this._componentInternals = {};
    }
    view = Tracker.nonreactive((function(_this) {
      return function() {
        return _this._componentInternals.templateInstance().view;
      };
    })(this));
    templateInstance = getTemplateInstanceFunction(view, true);
    ref = this._componentInternals.templateBase.__eventMaps;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      events = ref[i];
      eventMap = {};
      fn = function(spec, handler) {
        return eventMap[spec] = function() {
          var args;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return withTemplateInstanceFunc(templateInstance, function() {
            return Blaze._withCurrentView(view, function() {
              return handler.apply(view, args);
            });
          });
        };
      };
      for (spec in events) {
        handler = events[spec];
        fn(spec, handler);
      }
      results.push(eventMap);
    }
    return results;
  };

  BlazeComponent.prototype.data = function(path, equalsFunc) {
    var base, component, ref, view;
    component = this.component();
    if (component._componentInternals == null) {
      component._componentInternals = {};
    }
    if ((base = component._componentInternals).templateInstance == null) {
      base.templateInstance = new ReactiveField(null, function(a, b) {
        return a === b;
      });
    }
    if (view = (ref = component._componentInternals.templateInstance()) != null ? ref.view : void 0) {
      if (path != null) {
        return Blaze._withCurrentView(null, (function(_this) {
          return function() {
            return DataLookup.get(function() {
              return Blaze.getData(view);
            }, path, equalsFunc);
          };
        })(this));
      } else {
        return Blaze.getData(view);
      }
    }
    return void 0;
  };

  BlazeComponent.currentData = function(path, equalsFunc) {
    var currentView;
    if (!Blaze.currentView) {
      return void 0;
    }
    currentView = Blaze.currentView;
    if (_.isString(path)) {
      path = path.split('.');
    } else if (!_.isArray(path)) {
      return Blaze.getData(currentView);
    }
    return Blaze._withCurrentView(null, (function(_this) {
      return function() {
        return DataLookup.get(function() {
          var lexicalData, result;
          if (Blaze._lexicalBindingLookup && (lexicalData = Blaze._lexicalBindingLookup(currentView, path[0]))) {
            result = {};
            result[path[0]] = lexicalData;
            return result;
          }
          return Blaze.getData(currentView);
        }, path, equalsFunc);
      };
    })(this));
  };

  BlazeComponent.prototype.currentData = function(path, equalsFunc) {
    return this.constructor.currentData(path, equalsFunc);
  };

  BlazeComponent.prototype.component = function() {
    var component, mixinParent;
    component = this;
    while (true) {
      if (!component.mixinParent) {
        return null;
      }
      if (!(mixinParent = component.mixinParent())) {
        return component;
      }
      component = mixinParent;
    }
  };

  BlazeComponent.currentComponent = function() {
    var templateInstance;
    templateInstance = getTemplateInstanceFunction(Blaze.currentView, false);
    return templateInstanceToComponent(templateInstance, false);
  };

  BlazeComponent.prototype.currentComponent = function() {
    return this.constructor.currentComponent();
  };

  BlazeComponent.prototype.firstNode = function() {
    if (this.isRendered()) {
      return this.component()._componentInternals.templateInstance().view._domrange.firstNode();
    }
    return void 0;
  };

  BlazeComponent.prototype.lastNode = function() {
    if (this.isRendered()) {
      return this.component()._componentInternals.templateInstance().view._domrange.lastNode();
    }
    return void 0;
  };

  BlazeComponent.prototype.autorun = function(runFunc) {
    var templateInstance;
    templateInstance = Tracker.nonreactive((function(_this) {
      return function() {
        var ref;
        return (ref = _this.component()._componentInternals) != null ? typeof ref.templateInstance === "function" ? ref.templateInstance() : void 0 : void 0;
      };
    })(this));
    if (!templateInstance) {
      throw new Error("The component has to be created before calling 'autorun'.");
    }
    return templateInstance.autorun(_.bind(runFunc, this));
  };

  return BlazeComponent;

})(BaseComponent);

SUPPORTS_REACTIVE_INSTANCE = ['subscriptionsReady'];

REQUIRE_RENDERED_INSTANCE = ['$', 'find', 'findAll'];

ref = Blaze.TemplateInstance.prototype;
for (methodName in ref) {
  method = ref[methodName];
  if (!(methodName in BlazeComponent.prototype)) {
    (function(methodName, method) {
      if (indexOf.call(SUPPORTS_REACTIVE_INSTANCE, methodName) >= 0) {
        return BlazeComponent.prototype[methodName] = function() {
          var args, base, component, templateInstance;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          component = this.component();
          if (component._componentInternals == null) {
            component._componentInternals = {};
          }
          if ((base = component._componentInternals).templateInstance == null) {
            base.templateInstance = new ReactiveField(null, function(a, b) {
              return a === b;
            });
          }
          if (templateInstance = component._componentInternals.templateInstance()) {
            return templateInstance[methodName].apply(templateInstance, args);
          }
          return void 0;
        };
      } else if (indexOf.call(REQUIRE_RENDERED_INSTANCE, methodName) >= 0) {
        return BlazeComponent.prototype[methodName] = function() {
          var args, ref1;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (this.isRendered()) {
            return (ref1 = this.component()._componentInternals.templateInstance())[methodName].apply(ref1, args);
          }
          return void 0;
        };
      } else {
        return BlazeComponent.prototype[methodName] = function() {
          var args, templateInstance;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          templateInstance = Tracker.nonreactive((function(_this) {
            return function() {
              var ref1;
              return (ref1 = _this.component()._componentInternals) != null ? typeof ref1.templateInstance === "function" ? ref1.templateInstance() : void 0 : void 0;
            };
          })(this));
          if (!templateInstance) {
            throw new Error("The component has to be created before calling '" + methodName + "'.");
          }
          return templateInstance[methodName].apply(templateInstance, args);
        };
      }
    })(methodName, method);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/debug.coffee.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var                     
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

BlazeComponentDebug = (function(superClass) {
  extend(BlazeComponentDebug, superClass);

  function BlazeComponentDebug() {
    return BlazeComponentDebug.__super__.constructor.apply(this, arguments);
  }

  BlazeComponentDebug.startComponent = function(component) {
    BlazeComponentDebug.__super__.constructor.startComponent.apply(this, arguments);
    return console.log(component.data());
  };

  BlazeComponentDebug.startMarkedComponent = function(component) {
    BlazeComponentDebug.__super__.constructor.startMarkedComponent.apply(this, arguments);
    return console.log(component.data());
  };

  BlazeComponentDebug.dumpComponentSubtree = function(rootComponentOrElement) {
    if ('nodeType' in rootComponentOrElement && rootComponentOrElement.nodeType === Node.ELEMENT_NODE) {
      rootComponentOrElement = BlazeComponent.getComponentForElement(rootComponentOrElement);
    }
    return BlazeComponentDebug.__super__.constructor.dumpComponentSubtree.apply(this, arguments);
  };

  BlazeComponentDebug.dumpComponentTree = function(rootComponentOrElement) {
    if ('nodeType' in rootComponentOrElement && rootComponentOrElement.nodeType === Node.ELEMENT_NODE) {
      rootComponentOrElement = BlazeComponent.getComponentForElement(rootComponentOrElement);
    }
    return BlazeComponentDebug.__super__.constructor.dumpComponentTree.apply(this, arguments);
  };

  BlazeComponentDebug.dumpAllComponents = function() {
    var allRootComponents, j, len, rootComponent;
    allRootComponents = [];
    $('*').each((function(_this) {
      return function(i, element) {
        var component, rootComponent;
        component = BlazeComponent.getComponentForElement(element);
        if (!component) {
          return;
        }
        rootComponent = _this.componentRoot(component);
        if (indexOf.call(allRootComponents, rootComponent) < 0) {
          return allRootComponents.push(rootComponent);
        }
      };
    })(this));
    for (j = 0, len = allRootComponents.length; j < len; j++) {
      rootComponent = allRootComponents[j];
      this.dumpComponentSubtree(rootComponent);
    }
  };

  return BlazeComponentDebug;

})(BaseComponentDebug);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/server.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.body.renderToDocument = function() {};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("peerlibrary:blaze-components", {
  Template: Template,
  BlazeComponent: BlazeComponent,
  BlazeComponentDebug: BlazeComponentDebug
});

})();

//# sourceURL=meteor://💻app/packages/peerlibrary_blaze-components.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcGVlcmxpYnJhcnlfYmxhemUtY29tcG9uZW50cy90ZW1wbGF0ZS5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3BlZXJsaWJyYXJ5X2JsYXplLWNvbXBvbmVudHMvbGliLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcGVlcmxpYnJhcnlfYmxhemUtY29tcG9uZW50cy9kZWJ1Zy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3BlZXJsaWJyYXJ5X2JsYXplLWNvbXBvbmVudHMvc2VydmVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFBLFdBQVcsS0FBSyxDQUFDLFFBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFzQyxzQkFBdEMsQ0FBekIsQ0FERjtLQUFBO1dBR0Esc0ZBSnFCO0VBQUEsQ0FWdkI7O0FBQUEsRUFnQkEsbUJBQUMsa0JBQUQsR0FBb0IsU0FBQyxzQkFBRDtBQUNsQixRQUFHLGNBQWMsc0JBQWQsSUFBeUMsc0JBQXNCLENBQUMsUUFBdkIsS0FBbUMsSUFBSSxDQUFDLFlBQXBGO0FBQ0UsK0JBQXlCLGNBQWMsQ0FBQyxzQkFBZixDQUFzQyxzQkFBdEMsQ0FBekIsQ0FERjtLQUFBO1dBR0EsbUZBSmtCO0VBQUEsQ0FoQnBCOztBQUFBLEVBc0JBLG1CQUFDLGtCQUFELEdBQW9CO0FBQ2xCO0FBQUEsd0JBQW9CLEVBQXBCO0FBQUEsSUFFQSxFQUFFLEdBQUYsQ0FBTSxDQUFDLElBQVAsQ0FBWTthQUFBLFNBQUMsQ0FBRCxFQUFJLE9BQUo7QUFDVjtBQUFBLG9CQUFZLGNBQWMsQ0FBQyxzQkFBZixDQUFzQyxPQUF0QyxDQUFaO0FBQ0E7QUFBQTtTQURBO0FBQUEsUUFFQSxnQkFBZ0IsS0FBQyxjQUFELENBQWUsU0FBZixDQUZoQjtBQUdBLFlBQTRDLGFBQWlCLGlCQUFqQixvQkFBNUM7aUJBQUEsaUJBQWlCLENBQUMsSUFBbEIsQ0FBdUIsYUFBdkI7U0FKVTtNQUFBO0lBQUEsUUFBWixDQUZBO0FBUUE7MkNBQUE7QUFDRSxVQUFDLHFCQUFELENBQXNCLGFBQXRCLEVBREY7QUFBQSxLQVRrQjtFQUFBLENBdEJwQjs7NkJBQUE7O0dBRGdDLG1CQUFsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQSxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFkLEdBQWlDLGFBQWpDIiwiZmlsZSI6Ii9wYWNrYWdlcy9wZWVybGlicmFyeV9ibGF6ZS1jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiVGVtcGxhdGUgPSBCbGF6ZS5UZW1wbGF0ZVxuIiwiIyBUT0RPOiBEZWR1cGxpY2F0ZSBiZXR3ZWVuIGJsYXplIGNvbXBvbmVudCBhbmQgY29tbW9uIGNvbXBvbmVudCBwYWNrYWdlcy5cbmNyZWF0ZU1hdGNoZXIgPSAocHJvcGVydHlPck1hdGNoZXJPckZ1bmN0aW9uLCBjaGVja01peGlucykgLT5cbiAgaWYgXy5pc1N0cmluZyBwcm9wZXJ0eU9yTWF0Y2hlck9yRnVuY3Rpb25cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5T3JNYXRjaGVyT3JGdW5jdGlvblxuICAgIHByb3BlcnR5T3JNYXRjaGVyT3JGdW5jdGlvbiA9IChjaGlsZCwgcGFyZW50KSA9PlxuICAgICAgIyBJZiBjaGlsZCBpcyBwYXJlbnQsIHdlIG1pZ2h0IGdldCBpbnRvIGFuIGluZmluaXRlIGxvb3AgaWYgdGhpcyBpc1xuICAgICAgIyBjYWxsZWQgZnJvbSBnZXRGaXJzdFdpdGgsIHNvIGluIHRoYXQgY2FzZSB3ZSBkbyBub3QgdXNlIGdldEZpcnN0V2l0aC5cbiAgICAgIGlmIGNoZWNrTWl4aW5zIGFuZCBjaGlsZCBpc250IHBhcmVudCBhbmQgY2hpbGQuZ2V0Rmlyc3RXaXRoXG4gICAgICAgICEhY2hpbGQuZ2V0Rmlyc3RXaXRoIG51bGwsIHByb3BlcnR5XG4gICAgICBlbHNlXG4gICAgICAgIHByb3BlcnR5IG9mIGNoaWxkXG5cbiAgZWxzZSBpZiBub3QgXy5pc0Z1bmN0aW9uIHByb3BlcnR5T3JNYXRjaGVyT3JGdW5jdGlvblxuICAgIGFzc2VydCBfLmlzT2JqZWN0IHByb3BlcnR5T3JNYXRjaGVyT3JGdW5jdGlvblxuICAgIG1hdGNoZXIgPSBwcm9wZXJ0eU9yTWF0Y2hlck9yRnVuY3Rpb25cbiAgICBwcm9wZXJ0eU9yTWF0Y2hlck9yRnVuY3Rpb24gPSAoY2hpbGQsIHBhcmVudCkgPT5cbiAgICAgIGZvciBwcm9wZXJ0eSwgdmFsdWUgb2YgbWF0Y2hlclxuICAgICAgICAjIElmIGNoaWxkIGlzIHBhcmVudCwgd2UgbWlnaHQgZ2V0IGludG8gYW4gaW5maW5pdGUgbG9vcCBpZiB0aGlzIGlzXG4gICAgICAgICMgY2FsbGVkIGZyb20gZ2V0Rmlyc3RXaXRoLCBzbyBpbiB0aGF0IGNhc2Ugd2UgZG8gbm90IHVzZSBnZXRGaXJzdFdpdGguXG4gICAgICAgIGlmIGNoZWNrTWl4aW5zIGFuZCBjaGlsZCBpc250IHBhcmVudCBhbmQgY2hpbGQuZ2V0Rmlyc3RXaXRoXG4gICAgICAgICAgY2hpbGRXaXRoUHJvcGVydHkgPSBjaGlsZC5nZXRGaXJzdFdpdGggbnVsbCwgcHJvcGVydHlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGNoaWxkV2l0aFByb3BlcnR5ID0gY2hpbGQgaWYgcHJvcGVydHkgb2YgY2hpbGRcbiAgICAgICAgcmV0dXJuIGZhbHNlIHVubGVzcyBjaGlsZFdpdGhQcm9wZXJ0eVxuXG4gICAgICAgIGlmIF8uaXNGdW5jdGlvbiBjaGlsZFdpdGhQcm9wZXJ0eVtwcm9wZXJ0eV1cbiAgICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGNoaWxkV2l0aFByb3BlcnR5W3Byb3BlcnR5XSgpIGlzIHZhbHVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gZmFsc2UgdW5sZXNzIGNoaWxkV2l0aFByb3BlcnR5W3Byb3BlcnR5XSBpcyB2YWx1ZVxuXG4gICAgICB0cnVlXG5cbiAgcHJvcGVydHlPck1hdGNoZXJPckZ1bmN0aW9uXG5cbmdldFRlbXBsYXRlSW5zdGFuY2UgPSAodmlldywgc2tpcEJsb2NrSGVscGVycykgLT5cbiAgd2hpbGUgdmlldyBhbmQgbm90IHZpZXcuX3RlbXBsYXRlSW5zdGFuY2VcbiAgICBpZiBza2lwQmxvY2tIZWxwZXJzXG4gICAgICB2aWV3ID0gdmlldy5wYXJlbnRWaWV3XG4gICAgZWxzZVxuICAgICAgdmlldyA9IHZpZXcub3JpZ2luYWxQYXJlbnRWaWV3IG9yIHZpZXcucGFyZW50Vmlld1xuXG4gIHZpZXc/Ll90ZW1wbGF0ZUluc3RhbmNlXG5cbiMgTW9yZSBvciBsZXNzIHRoZSBzYW1lIGFzIGFsZGVlZDp0ZW1wbGF0ZS1leHRlbnNpb24ncyB0ZW1wbGF0ZS5nZXQoJ2NvbXBvbmVudCcpIGp1c3Qgc3BlY2lhbGl6ZWQuXG4jIEl0IGFsbG93cyB1cyB0byBub3QgaGF2ZSBhIGRlcGVuZGVuY3kgb24gdGVtcGxhdGUtZXh0ZW5zaW9uIHBhY2thZ2UgYW5kIHRoYXQgd2UgY2FuIHdvcmsgd2l0aCBJcm9uXG4jIFJvdXRlciB3aGljaCBoYXMgaXRzIG93biBEeW5hbWljVGVtcGxhdGUgY2xhc3Mgd2hpY2ggaXMgbm90IHBhdGNoZWQgYnkgdGVtcGxhdGUtZXh0ZW5zaW9uIGFuZCB0aHVzXG4jIGRvZXMgbm90IGhhdmUgLmdldCgpIG1ldGhvZC5cbnRlbXBsYXRlSW5zdGFuY2VUb0NvbXBvbmVudCA9ICh0ZW1wbGF0ZUluc3RhbmNlRnVuYywgc2tpcEJsb2NrSGVscGVycykgLT5cbiAgdGVtcGxhdGVJbnN0YW5jZSA9IHRlbXBsYXRlSW5zdGFuY2VGdW5jPygpXG5cbiAgIyBJcm9uIFJvdXRlciB1c2VzIGl0cyBvd24gRHluYW1pY1RlbXBsYXRlIHdoaWNoIGlzIG5vdCBhIHByb3BlciB0ZW1wbGF0ZSBpbnN0YW5jZSwgYnV0IGl0IGlzXG4gICMgcGFzc2VkIGluIGFzIHN1Y2gsIHNvIHdlIHdhbnQgdG8gZmluZCB0aGUgcmVhbCBvbmUgYmVmb3JlIHdlIHN0YXJ0IHNlYXJjaGluZyBmb3IgdGhlIGNvbXBvbmVudC5cbiAgdGVtcGxhdGVJbnN0YW5jZSA9IGdldFRlbXBsYXRlSW5zdGFuY2UgdGVtcGxhdGVJbnN0YW5jZT8udmlldywgc2tpcEJsb2NrSGVscGVyc1xuXG4gIHdoaWxlIHRlbXBsYXRlSW5zdGFuY2VcbiAgICByZXR1cm4gdGVtcGxhdGVJbnN0YW5jZS5jb21wb25lbnQgaWYgJ2NvbXBvbmVudCcgb2YgdGVtcGxhdGVJbnN0YW5jZVxuXG4gICAgaWYgc2tpcEJsb2NrSGVscGVyc1xuICAgICAgdGVtcGxhdGVJbnN0YW5jZSA9IGdldFRlbXBsYXRlSW5zdGFuY2UgdGVtcGxhdGVJbnN0YW5jZS52aWV3LnBhcmVudFZpZXcsIHNraXBCbG9ja0hlbHBlcnNcbiAgICBlbHNlXG4gICAgICB0ZW1wbGF0ZUluc3RhbmNlID0gZ2V0VGVtcGxhdGVJbnN0YW5jZSAodGVtcGxhdGVJbnN0YW5jZS52aWV3Lm9yaWdpbmFsUGFyZW50VmlldyBvciB0ZW1wbGF0ZUluc3RhbmNlLnZpZXcucGFyZW50VmlldyksIHNraXBCbG9ja0hlbHBlcnNcblxuICBudWxsXG5cbmdldFRlbXBsYXRlSW5zdGFuY2VGdW5jdGlvbiA9ICh2aWV3LCBza2lwQmxvY2tIZWxwZXJzKSAtPlxuICB0ZW1wbGF0ZUluc3RhbmNlID0gZ2V0VGVtcGxhdGVJbnN0YW5jZSB2aWV3LCBza2lwQmxvY2tIZWxwZXJzXG4gIC0+XG4gICAgdGVtcGxhdGVJbnN0YW5jZVxuXG5jbGFzcyBDb21wb25lbnRzTmFtZXNwYWNlUmVmZXJlbmNlXG4gIGNvbnN0cnVjdG9yOiAoQG5hbWVzcGFjZSwgQHRlbXBsYXRlSW5zdGFuY2UpIC0+XG5cbiMgV2UgZXh0ZW5kIHRoZSBvcmlnaW5hbCBkb3Qgb3BlcmF0b3IgdG8gc3VwcG9ydCB7ez4gRm9vLkJhcn19LiBUaGlzIGdvZXMgdGhyb3VnaCBhIGdldFRlbXBsYXRlSGVscGVyIHBhdGgsIGJ1dFxuIyB3ZSB3YW50IHRvIHJlZGlyZWN0IGl0IHRvIHRoZSBnZXRUZW1wbGF0ZSBwYXRoLiBTbyB3ZSBtYXJrIGl0IGluIGdldFRlbXBsYXRlSGVscGVyIGFuZCB0aGVuIGhlcmUgY2FsbCBnZXRUZW1wbGF0ZS5cbm9yaWdpbmFsRG90ID0gU3BhY2ViYXJzLmRvdFxuU3BhY2ViYXJzLmRvdCA9ICh2YWx1ZSwgYXJncy4uLikgLT5cbiAgaWYgdmFsdWUgaW5zdGFuY2VvZiBDb21wb25lbnRzTmFtZXNwYWNlUmVmZXJlbmNlXG4gICAgcmV0dXJuIEJsYXplLl9nZXRUZW1wbGF0ZSBcIiN7dmFsdWUubmFtZXNwYWNlfS4je2FyZ3Muam9pbiAnLid9XCIsIHZhbHVlLnRlbXBsYXRlSW5zdGFuY2VcblxuICBvcmlnaW5hbERvdCB2YWx1ZSwgYXJncy4uLlxuXG5vcmlnaW5hbEluY2x1ZGUgPSBTcGFjZWJhcnMuaW5jbHVkZVxuU3BhY2ViYXJzLmluY2x1ZGUgPSAodGVtcGxhdGVPckZ1bmN0aW9uLCBhcmdzLi4uKSAtPlxuICAjIElmIENvbXBvbmVudHNOYW1lc3BhY2VSZWZlcmVuY2UgZ2V0cyBhbGwgdGhlIHdheSB0byB0aGUgU3BhY2ViYXJzLmluY2x1ZGUgaXQgbWVhbnMgdGhhdCB3ZSBhcmUgaW4gdGhlIHNpdHVhdGlvblxuICAjIHdoZXJlIHRoZXJlIGlzIGJvdGggbmFtZXNwYWNlIGFuZCBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBuYW1lLCBhbmQgdXNlciBpcyBpbmNsdWRpbmcgYSBjb21wb25lbnQuIEJ1dCBuYW1lc3BhY2VcbiAgIyByZWZlcmVuY2UgaXMgY3JlYXRlZCBpbnN0ZWFkIChiZWNhdXNlIHdlIGRvIG5vdCBrbm93IGluIGFkdmFuY2UgdGhhdCB0aGVyZSBpcyBubyBTcGFjZWJhcnMuZG90IGNhbGwgYXJvdW5kIGxvb2t1cFxuICAjIGNhbGwpLiBTbyB3ZSBkZXJlZmVyZW5jZSB0aGUgcmVmZXJlbmNlIGFuZCB0cnkgdG8gcmVzb2x2ZSBhIHRlbXBsYXRlLiBPZiBjb3Vyc2UsIGEgY29tcG9uZW50IG1pZ2h0IG5vdCByZWFsbHkgZXhpc3QuXG4gIGlmIHRlbXBsYXRlT3JGdW5jdGlvbiBpbnN0YW5jZW9mIENvbXBvbmVudHNOYW1lc3BhY2VSZWZlcmVuY2VcbiAgICB0ZW1wbGF0ZU9yRnVuY3Rpb24gPSBCbGF6ZS5fZ2V0VGVtcGxhdGUgdGVtcGxhdGVPckZ1bmN0aW9uLm5hbWVzcGFjZSwgdGVtcGxhdGVPckZ1bmN0aW9uLnRlbXBsYXRlSW5zdGFuY2VcblxuICBvcmlnaW5hbEluY2x1ZGUgdGVtcGxhdGVPckZ1bmN0aW9uLCBhcmdzLi4uXG5cbiMgV2Ugb3ZlcnJpZGUgdGhlIG9yaWdpbmFsIGxvb2t1cCBtZXRob2Qgd2l0aCBhIHNpbWlsYXIgb25lLCB3aGljaCBzdXBwb3J0cyBjb21wb25lbnRzIGFzIHdlbGwuXG4jXG4jIE5vdyB0aGUgb3JkZXIgb2YgdGhlIGxvb2t1cCB3aWxsIGJlLCBpbiBvcmRlcjpcbiMgICBhIGhlbHBlciBvZiB0aGUgY3VycmVudCB0ZW1wbGF0ZVxuIyAgIGEgcHJvcGVydHkgb2YgdGhlIGN1cnJlbnQgY29tcG9uZW50IChub3QgdGhlIEJsYXplQ29tcG9uZW50LmN1cnJlbnRDb21wb25lbnQoKSB0aG91Z2gsIGJ1dCBAY29tcG9uZW50KCkpXG4jICAgYSBoZWxwZXIgb2YgdGhlIGN1cnJlbnQgY29tcG9uZW50J3MgYmFzZSB0ZW1wbGF0ZSAobm90IHRoZSBCbGF6ZUNvbXBvbmVudC5jdXJyZW50Q29tcG9uZW50KCkgdGhvdWdoLCBidXQgQGNvbXBvbmVudCgpKVxuIyAgIHRoZSBuYW1lIG9mIGEgY29tcG9uZW50XG4jICAgdGhlIG5hbWUgb2YgYSB0ZW1wbGF0ZVxuIyAgIGdsb2JhbCBoZWxwZXJcbiMgICBhIHByb3BlcnR5IG9mIHRoZSBkYXRhIGNvbnRleHRcbiNcbiMgUmV0dXJucyBhIGZ1bmN0aW9uLCBhIG5vbi1mdW5jdGlvbiB2YWx1ZSwgb3IgbnVsbC4gSWYgYSBmdW5jdGlvbiBpcyBmb3VuZCwgaXQgaXMgYm91bmQgYXBwcm9wcmlhdGVseS5cbiNcbiMgTk9URTogVGhpcyBmdW5jdGlvbiBtdXN0IG5vdCBlc3RhYmxpc2ggYW55IHJlYWN0aXZlIGRlcGVuZGVuY2llcyBpdHNlbGYuICBJZiB0aGVyZSBpcyBhbnkgcmVhY3Rpdml0eVxuIyBpbiB0aGUgdmFsdWUsIGxvb2t1cCBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24uXG4jXG4jIFRPRE86IFNob3VsZCB3ZSBhbHNvIGxvb2t1cCBmb3IgYSBwcm9wZXJ0eSBvZiB0aGUgY29tcG9uZW50LWxldmVsIGRhdGEgY29udGV4dCAoYW5kIHRlbXBsYXRlLWxldmVsIGRhdGEgY29udGV4dCk/XG5cbkJsYXplLl9nZXRUZW1wbGF0ZUhlbHBlciA9ICh0ZW1wbGF0ZSwgbmFtZSwgdGVtcGxhdGVJbnN0YW5jZSkgLT5cbiAgaXNLbm93bk9sZFN0eWxlSGVscGVyID0gZmFsc2VcbiAgaWYgdGVtcGxhdGUuX19oZWxwZXJzLmhhcyBuYW1lXG4gICAgaGVscGVyID0gdGVtcGxhdGUuX19oZWxwZXJzLmdldCBuYW1lXG4gICAgaWYgaGVscGVyIGlzIEJsYXplLl9PTERTVFlMRV9IRUxQRVJcbiAgICAgIGlzS25vd25PbGRTdHlsZUhlbHBlciA9IHRydWVcbiAgICBlbHNlIGlmIGhlbHBlcj9cbiAgICAgIHJldHVybiB3cmFwSGVscGVyIGJpbmREYXRhQ29udGV4dChoZWxwZXIpLCB0ZW1wbGF0ZUluc3RhbmNlXG4gICAgZWxzZVxuICAgICAgcmV0dXJuIG51bGxcblxuICAjIE9sZC1zdHlsZSBoZWxwZXIuXG4gIGlmIG5hbWUgb2YgdGVtcGxhdGVcbiAgICAjIE9ubHkgd2FybiBvbmNlIHBlciBoZWxwZXIuXG4gICAgdW5sZXNzIGlzS25vd25PbGRTdHlsZUhlbHBlclxuICAgICAgdGVtcGxhdGUuX19oZWxwZXJzLnNldCBuYW1lLCBCbGF6ZS5fT0xEU1RZTEVfSEVMUEVSXG4gICAgICB1bmxlc3MgdGVtcGxhdGUuX05PV0FSTl9PTERTVFlMRV9IRUxQRVJTXG4gICAgICAgIEJsYXplLl93YXJuIFwiQXNzaWduaW5nIGhlbHBlciB3aXRoIGBcIiArIHRlbXBsYXRlLnZpZXdOYW1lICsgXCIuXCIgKyBuYW1lICsgXCIgPSAuLi5gIGlzIGRlcHJlY2F0ZWQuICBVc2UgYFwiICsgdGVtcGxhdGUudmlld05hbWUgKyBcIi5oZWxwZXJzKC4uLilgIGluc3RlYWQuXCJcbiAgICBpZiB0ZW1wbGF0ZVtuYW1lXT9cbiAgICAgIHJldHVybiB3cmFwSGVscGVyIGJpbmREYXRhQ29udGV4dCh0ZW1wbGF0ZVtuYW1lXSksIHRlbXBsYXRlSW5zdGFuY2VcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBudWxsIHVubGVzcyB0ZW1wbGF0ZUluc3RhbmNlXG5cbiAgIyBEbyBub3QgcmVzb2x2ZSBjb21wb25lbnQgaGVscGVycyBpZiBpbnNpZGUgVGVtcGxhdGUuZHluYW1pYy4gVGhlIHJlYXNvbiBpcyB0aGF0IFRlbXBsYXRlLmR5bmFtaWMgdXNlcyBhIGRhdGEgY29udGV4dFxuICAjIHZhbHVlIHdpdGggbmFtZSBcInRlbXBsYXRlXCIgaW50ZXJuYWxseS4gQnV0IHdoZW4gdXNlZCBpbnNpZGUgYSBjb21wb25lbnQgdGhlIGRhdGEgY29udGV4dCBsb29rdXAgaXMgdGhlbiByZXNvbHZlZFxuICAjIGludG8gYSBjdXJyZW50IGNvbXBvbmVudCdzIHRlbXBsYXRlIG1ldGhvZCBhbmQgbm90IHRoZSBkYXRhIGNvbnRleHQgXCJ0ZW1wbGF0ZVwiLiBUbyBmb3JjZSB0aGUgZGF0YSBjb250ZXh0IHJlc29sdmluZ1xuICAjIFRlbXBsYXRlLmR5bmFtaWMgc2hvdWxkIHVzZSBcInRoaXMudGVtcGxhdGVcIiBpbiBpdHMgdGVtcGxhdGVzLCBidXQgaXQgZG9lcyBub3QsIHNvIHdlIGhhdmUgYSBzcGVjaWFsIGNhc2UgaGVyZSBmb3IgaXQuXG4gIHJldHVybiBudWxsIGlmIHRlbXBsYXRlLnZpZXdOYW1lIGluIFsnVGVtcGxhdGUuX19keW5hbWljV2l0aERhdGFDb250ZXh0JywgJ1RlbXBsYXRlLl9fZHluYW1pYyddXG5cbiAgIyBCbGF6ZS5WaWV3Ojpsb29rdXAgc2hvdWxkIG5vdCBpbnRyb2R1Y2UgYW55IHJlYWN0aXZlIGRlcGVuZGVuY2llcywgYnV0IHdlIGNhbiBzaW1wbHkgaWdub3JlIHJlYWN0aXZpdHkgaGVyZSBiZWNhdXNlXG4gICMgdGVtcGxhdGUgaW5zdGFuY2UgcHJvYmFibHkgY2Fubm90IGNoYW5nZSB3aXRob3V0IHJlY29uc3RydWN0aW5nIHRoZSBjb21wb25lbnQgYXMgd2VsbC5cbiAgY29tcG9uZW50ID0gVHJhY2tlci5ub25yZWFjdGl2ZSAtPlxuICAgICMgV2Ugd2FudCB0byBza2lwIGFueSBibG9jayBoZWxwZXIuIHt7bWV0aG9kfX0gc2hvdWxkIHJlc29sdmUgdG9cbiAgICAjIHt7Y29tcG9uZW50Lm1ldGhvZH19IGFuZCBub3QgdG8ge3tjdXJyZW50Q29tcG9uZW50Lm1ldGhvZH19LlxuICAgIHRlbXBsYXRlSW5zdGFuY2VUb0NvbXBvbmVudCB0ZW1wbGF0ZUluc3RhbmNlLCB0cnVlXG5cbiAgIyBDb21wb25lbnQuXG4gIGlmIGNvbXBvbmVudFxuICAgICMgVGhpcyB3aWxsIGZpcnN0IHNlYXJjaCBvbiB0aGUgY29tcG9uZW50IGFuZCB0aGVuIGNvbnRpbnVlIHdpdGggbWl4aW5zLlxuICAgIGlmIG1peGluT3JDb21wb25lbnQgPSBjb21wb25lbnQuZ2V0Rmlyc3RXaXRoIG51bGwsIG5hbWVcbiAgICAgIHJldHVybiB3cmFwSGVscGVyIGJpbmRDb21wb25lbnQobWl4aW5PckNvbXBvbmVudCwgbWl4aW5PckNvbXBvbmVudFtuYW1lXSksIHRlbXBsYXRlSW5zdGFuY2VcblxuICAjIEEgc3BlY2lhbCBjYXNlIHRvIHN1cHBvcnQge3s+IEZvby5CYXJ9fS4gVGhpcyBnb2VzIHRocm91Z2ggYSBnZXRUZW1wbGF0ZUhlbHBlciBwYXRoLCBidXQgd2Ugd2FudCB0byByZWRpcmVjdFxuICAjIGl0IHRvIHRoZSBnZXRUZW1wbGF0ZSBwYXRoLiBTbyB3ZSBtYXJrIGl0IGFuZCBsZWF2ZSB0byBTcGFjZWJhcnMuZG90IHRvIGNhbGwgZ2V0VGVtcGxhdGUuXG4gICMgVE9ETzogV2Ugc2hvdWxkIHByb3ZpZGUgYSBCYXNlQ29tcG9uZW50LmdldENvbXBvbmVudHNOYW1lc3BhY2UgbWV0aG9kIGluc3RlYWQgb2YgYWNjZXNzaW5nIGNvbXBvbmVudHMgZGlyZWN0bHkuXG4gIGlmIG5hbWUgYW5kIG5hbWUgb2YgQmxhemVDb21wb25lbnQuY29tcG9uZW50c1xuICAgIHJldHVybiBuZXcgQ29tcG9uZW50c05hbWVzcGFjZVJlZmVyZW5jZSBuYW1lLCB0ZW1wbGF0ZUluc3RhbmNlXG5cbiAgIyBNYXliZSBhIHByZWV4aXN0aW5nIHRlbXBsYXRlIGhlbHBlciBvbiB0aGUgY29tcG9uZW50J3MgYmFzZSB0ZW1wbGF0ZS5cbiAgaWYgY29tcG9uZW50XG4gICAgIyBXZSBrbm93IHRoYXQgY29tcG9uZW50IGlzIHJlYWxseSBhIGNvbXBvbmVudC5cbiAgICBpZiAoaGVscGVyID0gY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHM/LnRlbXBsYXRlQmFzZT8uX19oZWxwZXJzLmdldCBuYW1lKT9cbiAgICAgIHJldHVybiB3cmFwSGVscGVyIGJpbmREYXRhQ29udGV4dChoZWxwZXIpLCB0ZW1wbGF0ZUluc3RhbmNlXG5cbiAgbnVsbFxuXG5zaGFyZS5pbkV4cGFuZEF0dHJpYnV0ZXMgPSBmYWxzZVxuXG5iaW5kQ29tcG9uZW50ID0gKGNvbXBvbmVudCwgaGVscGVyKSAtPlxuICBpZiBfLmlzRnVuY3Rpb24gaGVscGVyXG4gICAgKGFyZ3MuLi4pIC0+XG4gICAgICByZXN1bHQgPSBoZWxwZXIuYXBwbHkgY29tcG9uZW50LCBhcmdzXG5cbiAgICAgICMgSWYgd2UgYXJlIGV4cGFuZGluZyBhdHRyaWJ1dGVzIGFuZCB0aGlzIGlzIGFuIG9iamVjdCB3aXRoIGR5bmFtaWMgYXR0cmlidXRlcyxcbiAgICAgICMgdGhlbiB3ZSB3YW50IHRvIGJpbmQgYWxsIHBvc3NpYmxlIGV2ZW50IGhhbmRsZXJzIHRvIHRoZSBjb21wb25lbnQgYXMgd2VsbC5cbiAgICAgIGlmIHNoYXJlLmluRXhwYW5kQXR0cmlidXRlcyBhbmQgXy5pc09iamVjdCByZXN1bHRcbiAgICAgICAgZm9yIG5hbWUsIHZhbHVlIG9mIHJlc3VsdCB3aGVuIHNoYXJlLkVWRU5UX0hBTkRMRVJfUkVHRVgudGVzdCBuYW1lXG4gICAgICAgICAgaWYgXy5pc0Z1bmN0aW9uIHZhbHVlXG4gICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBfLmJpbmQgdmFsdWUsIGNvbXBvbmVudFxuICAgICAgICAgIGVsc2UgaWYgXy5pc0FycmF5IHZhbHVlXG4gICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBfLm1hcCB2YWx1ZSwgKGZ1bikgLT5cbiAgICAgICAgICAgICAgaWYgXy5pc0Z1bmN0aW9uIGZ1blxuICAgICAgICAgICAgICAgIF8uYmluZCBmdW4sIGNvbXBvbmVudFxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZnVuXG5cbiAgICAgIHJlc3VsdFxuICBlbHNlXG4gICAgaGVscGVyXG5cbmJpbmREYXRhQ29udGV4dCA9IChoZWxwZXIpIC0+XG4gIGlmIF8uaXNGdW5jdGlvbiBoZWxwZXJcbiAgICAtPlxuICAgICAgZGF0YSA9IEJsYXplLmdldERhdGEoKVxuICAgICAgZGF0YSA/PSB7fVxuICAgICAgaGVscGVyLmFwcGx5IGRhdGEsIGFyZ3VtZW50c1xuICBlbHNlXG4gICAgaGVscGVyXG5cbndyYXBIZWxwZXIgPSAoZiwgdGVtcGxhdGVGdW5jKSAtPlxuICAjIFhYWCBDT01QQVQgV0lUSCBNRVRFT1IgMS4wLjMuMlxuICByZXR1cm4gQmxhemUuX3dyYXBDYXRjaGluZ0V4Y2VwdGlvbnMgZiwgJ3RlbXBsYXRlIGhlbHBlcicgdW5sZXNzIEJsYXplLlRlbXBsYXRlLl93aXRoVGVtcGxhdGVJbnN0YW5jZUZ1bmNcblxuICByZXR1cm4gZiB1bmxlc3MgXy5pc0Z1bmN0aW9uIGZcblxuICAtPlxuICAgIHNlbGYgPSBAXG4gICAgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgQmxhemUuVGVtcGxhdGUuX3dpdGhUZW1wbGF0ZUluc3RhbmNlRnVuYyB0ZW1wbGF0ZUZ1bmMsIC0+XG4gICAgICBCbGF6ZS5fd3JhcENhdGNoaW5nRXhjZXB0aW9ucyhmLCAndGVtcGxhdGUgaGVscGVyJykuYXBwbHkgc2VsZiwgYXJnc1xuXG5pZiBCbGF6ZS5UZW1wbGF0ZS5fd2l0aFRlbXBsYXRlSW5zdGFuY2VGdW5jXG4gIHdpdGhUZW1wbGF0ZUluc3RhbmNlRnVuYyA9IEJsYXplLlRlbXBsYXRlLl93aXRoVGVtcGxhdGVJbnN0YW5jZUZ1bmNcbmVsc2VcbiAgIyBYWFggQ09NUEFUIFdJVEggTUVURU9SIDEuMC4zLjIuXG4gIHdpdGhUZW1wbGF0ZUluc3RhbmNlRnVuYyA9ICh0ZW1wbGF0ZUluc3RhbmNlLCBmKSAtPlxuICAgIGYoKVxuXG5nZXRUZW1wbGF0ZUJhc2UgPSAoY29tcG9uZW50KSAtPlxuICAjIFdlIGRvIG5vdCBhbGxvdyB0ZW1wbGF0ZSB0byBiZSBhIHJlYWN0aXZlIG1ldGhvZC5cbiAgVHJhY2tlci5ub25yZWFjdGl2ZSAtPlxuICAgIGNvbXBvbmVudFRlbXBsYXRlID0gY29tcG9uZW50LnRlbXBsYXRlKClcbiAgICBpZiBfLmlzU3RyaW5nIGNvbXBvbmVudFRlbXBsYXRlXG4gICAgICB0ZW1wbGF0ZUJhc2UgPSBUZW1wbGF0ZVtjb21wb25lbnRUZW1wbGF0ZV1cbiAgICAgIHRocm93IG5ldyBFcnJvciBcIlRlbXBsYXRlICcje2NvbXBvbmVudFRlbXBsYXRlfScgY2Fubm90IGJlIGZvdW5kLlwiIHVubGVzcyB0ZW1wbGF0ZUJhc2VcbiAgICBlbHNlIGlmIGNvbXBvbmVudFRlbXBsYXRlXG4gICAgICB0ZW1wbGF0ZUJhc2UgPSBjb21wb25lbnRUZW1wbGF0ZVxuICAgIGVsc2VcbiAgICAgIHRocm93IG5ldyBFcnJvciBcIlRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50ICcje2NvbXBvbmVudC5jb21wb25lbnROYW1lKCkgb3IgJ3VubmFtZWQnfScgbm90IHByb3ZpZGVkLlwiXG5cbiAgICB0ZW1wbGF0ZUJhc2VcblxuY2FsbFRlbXBsYXRlQmFzZUhvb2tzID0gKGNvbXBvbmVudCwgaG9va05hbWUpIC0+XG4gICMgV2Ugd2FudCB0byBjYWxsIHRlbXBsYXRlIGJhc2UgaG9va3Mgb25seSB3aGVuIHdlIGFyZSBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gb24gYSBjb21wb25lbnQgaXRzZWxmLlxuICByZXR1cm4gdW5sZXNzIGNvbXBvbmVudCBpcyBjb21wb25lbnQuY29tcG9uZW50KClcblxuICB0ZW1wbGF0ZUluc3RhbmNlID0gVHJhY2tlci5ub25yZWFjdGl2ZSAtPlxuICAgIGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLnRlbXBsYXRlSW5zdGFuY2UoKVxuICBjYWxsYmFja3MgPSBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy50ZW1wbGF0ZUJhc2UuX2dldENhbGxiYWNrcyBob29rTmFtZVxuICBUZW1wbGF0ZS5fd2l0aFRlbXBsYXRlSW5zdGFuY2VGdW5jKFxuICAgIC0+XG4gICAgICB0ZW1wbGF0ZUluc3RhbmNlXG4gICxcbiAgICAtPlxuICAgICAgZm9yIGNhbGxiYWNrIGluIGNhbGxiYWNrc1xuICAgICAgICBjYWxsYmFjay5jYWxsIHRlbXBsYXRlSW5zdGFuY2VcbiAgKVxuXG4gIHJldHVyblxuXG53cmFwVmlld0FuZFRlbXBsYXRlID0gKGN1cnJlbnRWaWV3LCBmKSAtPlxuICAjIEZvciB0ZW1wbGF0ZSBjb250ZW50IHdyYXBwZWQgaW5zaWRlIHRoZSBibG9jayBoZWxwZXIsIHdlIHdhbnQgdG8gc2tpcCB0aGUgYmxvY2tcbiAgIyBoZWxwZXIgd2hlbiBzZWFyY2hpbmcgZm9yIGNvcnJlc3BvbmRpbmcgdGVtcGxhdGUuIFRoaXMgbWVhbnMgdGhhdCBUZW1wbGF0ZS5pbnN0YW5jZSgpXG4gICMgd2lsbCByZXR1cm4gdGhlIGNvbXBvbmVudCdzIHRlbXBsYXRlLCB3aGlsZSBCbGF6ZUNvbXBvbmVudC5jdXJyZW50Q29tcG9uZW50KCkgd2lsbFxuICAjIHJldHVybiB0aGUgY29tcG9uZW50IGluc2lkZS5cbiAgdGVtcGxhdGVJbnN0YW5jZSA9IGdldFRlbXBsYXRlSW5zdGFuY2VGdW5jdGlvbiBjdXJyZW50VmlldywgdHJ1ZVxuXG4gICMgV2Ugc2V0IHRlbXBsYXRlIGluc3RhbmNlIHRvIG1hdGNoIHRoZSBjdXJyZW50IHZpZXcgKG1vc3RseSwgb25seSBub3Qgd2hlbiBpbnNpZGVcbiAgIyB0aGUgYmxvY2sgaGVscGVyKS4gVGhlIGxhdHRlciB3ZSB1c2UgZm9yIEJsYXplQ29tcG9uZW50LmN1cnJlbnRDb21wb25lbnQoKSwgYnV0XG4gICMgaXQgaXMgZ29vZCB0aGF0IGJvdGggdGVtcGxhdGUgaW5zdGFuY2UgYW5kIGN1cnJlbnQgdmlldyBjb3JyZXNwb25kIHRvIGVhY2ggb3RoZXJcbiAgIyBhcyBtdWNoIGFzIHBvc3NpYmxlLlxuICB3aXRoVGVtcGxhdGVJbnN0YW5jZUZ1bmMgdGVtcGxhdGVJbnN0YW5jZSwgLT5cbiAgICAjIFdlIHNldCB2aWV3IGJhc2VkIG9uIHRoZSBjdXJyZW50IHZpZXcgc28gdGhhdCBpbnNpZGUgZXZlbnQgaGFuZGxlcnNcbiAgICAjIEJsYXplQ29tcG9uZW50LmN1cnJlbnREYXRhKCkgKGFuZCBCbGF6ZS5nZXREYXRhKCkgYW5kIFRlbXBsYXRlLmN1cnJlbnREYXRhKCkpXG4gICAgIyByZXR1cm5zIGRhdGEgY29udGV4dCBvZiBldmVudCB0YXJnZXQgYW5kIG5vdCBjb21wb25lbnQvdGVtcGxhdGUuIE1vcmVvdmVyLFxuICAgICMgaW5zaWRlIGV2ZW50IGhhbmRsZXJzIEJsYXplQ29tcG9uZW50LmN1cnJlbnRDb21wb25lbnQoKSByZXR1cm5zIHRoZSBjb21wb25lbnRcbiAgICAjIG9mIGV2ZW50IHRhcmdldC5cbiAgICBCbGF6ZS5fd2l0aEN1cnJlbnRWaWV3IGN1cnJlbnRWaWV3LCAtPlxuICAgICAgZigpXG5cbmFkZEV2ZW50cyA9ICh2aWV3LCBjb21wb25lbnQpIC0+XG4gIGV2ZW50c0xpc3QgPSBjb21wb25lbnQuZXZlbnRzKClcblxuICB0aHJvdyBuZXcgRXJyb3IgXCInZXZlbnRzJyBtZXRob2QgZnJvbSB0aGUgY29tcG9uZW50ICcje2NvbXBvbmVudC5jb21wb25lbnROYW1lKCkgb3IgJ3VubmFtZWQnfScgZGlkIG5vdCByZXR1cm4gYSBsaXN0IG9mIGV2ZW50IG1hcHMuXCIgdW5sZXNzIF8uaXNBcnJheSBldmVudHNMaXN0XG5cbiAgZm9yIGV2ZW50cyBpbiBldmVudHNMaXN0XG4gICAgZXZlbnRNYXAgPSB7fVxuXG4gICAgZm9yIHNwZWMsIGhhbmRsZXIgb2YgZXZlbnRzXG4gICAgICBkbyAoc3BlYywgaGFuZGxlcikgLT5cbiAgICAgICAgZXZlbnRNYXBbc3BlY10gPSAoYXJncy4uLikgLT5cbiAgICAgICAgICBldmVudCA9IGFyZ3NbMF1cblxuICAgICAgICAgIGN1cnJlbnRWaWV3ID0gQmxhemUuZ2V0VmlldyBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgd3JhcFZpZXdBbmRUZW1wbGF0ZSBjdXJyZW50VmlldywgLT5cbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkgY29tcG9uZW50LCBhcmdzXG5cbiAgICAgICAgICAjIE1ha2Ugc3VyZSBDb2ZmZWVTY3JpcHQgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nLlxuICAgICAgICAgICMgUmV0dXJuaW5nIGZyb20gZXZlbnQgaGFuZGxlcnMgaXMgZGVwcmVjYXRlZC5cbiAgICAgICAgICByZXR1cm5cblxuICAgIEJsYXplLl9hZGRFdmVudE1hcCB2aWV3LCBldmVudE1hcCwgdmlld1xuXG4gIHJldHVyblxuXG5vcmlnaW5hbEdldFRlbXBsYXRlID0gQmxhemUuX2dldFRlbXBsYXRlXG5CbGF6ZS5fZ2V0VGVtcGxhdGUgPSAobmFtZSwgdGVtcGxhdGVJbnN0YW5jZSkgLT5cbiAgIyBCbGF6ZS5WaWV3Ojpsb29rdXAgc2hvdWxkIG5vdCBpbnRyb2R1Y2UgYW55IHJlYWN0aXZlIGRlcGVuZGVuY2llcywgc28gd2UgYXJlIG1ha2luZyBzdXJlIGl0IGlzIHNvLlxuICB0ZW1wbGF0ZSA9IFRyYWNrZXIubm9ucmVhY3RpdmUgLT5cbiAgICBpZiBCbGF6ZS5jdXJyZW50Vmlld1xuICAgICAgcGFyZW50Q29tcG9uZW50ID0gQmxhemVDb21wb25lbnQuY3VycmVudENvbXBvbmVudCgpXG4gICAgZWxzZVxuICAgICAgIyBXZSBkbyBub3Qgc2tpcCBibG9jayBoZWxwZXJzIHRvIGFzc3VyZSB0aGF0IHdoZW4gYmxvY2sgaGVscGVycyBhcmUgdXNlZCxcbiAgICAgICMgY29tcG9uZW50IHRyZWUgaW50ZWdyYXRlcyB0aGVtIG5pY2VseSBpbnRvIGEgdHJlZS5cbiAgICAgIHBhcmVudENvbXBvbmVudCA9IHRlbXBsYXRlSW5zdGFuY2VUb0NvbXBvbmVudCB0ZW1wbGF0ZUluc3RhbmNlLCBmYWxzZVxuXG4gICAgQmxhemVDb21wb25lbnQuZ2V0Q29tcG9uZW50KG5hbWUpPy5yZW5kZXJDb21wb25lbnQgcGFyZW50Q29tcG9uZW50XG4gIHJldHVybiB0ZW1wbGF0ZSBpZiB0ZW1wbGF0ZSBhbmQgKHRlbXBsYXRlIGluc3RhbmNlb2YgQmxhemUuVGVtcGxhdGUgb3IgXy5pc0Z1bmN0aW9uIHRlbXBsYXRlKVxuXG4gIG9yaWdpbmFsR2V0VGVtcGxhdGUgbmFtZVxuXG5yZWdpc3Rlckhvb2tzID0gKHRlbXBsYXRlLCBob29rcykgLT5cbiAgaWYgdGVtcGxhdGUub25DcmVhdGVkXG4gICAgdGVtcGxhdGUub25DcmVhdGVkIGhvb2tzLm9uQ3JlYXRlZFxuICAgIHRlbXBsYXRlLm9uUmVuZGVyZWQgaG9va3Mub25SZW5kZXJlZFxuICAgIHRlbXBsYXRlLm9uRGVzdHJveWVkIGhvb2tzLm9uRGVzdHJveWVkXG4gIGVsc2VcbiAgICAjIFhYWCBDT01QQVQgV0lUSCBNRVRFT1IgMS4wLjMuMi5cbiAgICB0ZW1wbGF0ZS5jcmVhdGVkID0gaG9va3Mub25DcmVhdGVkXG4gICAgdGVtcGxhdGUucmVuZGVyZWQgPSBob29rcy5vblJlbmRlcmVkXG4gICAgdGVtcGxhdGUuZGVzdHJveWVkID0gaG9va3Mub25EZXN0cm95ZWRcblxucmVnaXN0ZXJGaXJzdENyZWF0ZWRIb29rID0gKHRlbXBsYXRlLCBvbkNyZWF0ZWQpIC0+XG4gIGlmIHRlbXBsYXRlLl9jYWxsYmFja3NcbiAgICB0ZW1wbGF0ZS5fY2FsbGJhY2tzLmNyZWF0ZWQudW5zaGlmdCBvbkNyZWF0ZWRcbiAgZWxzZVxuICAgICMgWFhYIENPTVBBVCBXSVRIIE1FVEVPUiAxLjAuMy4yLlxuICAgIG9sZENyZWF0ZWQgPSB0ZW1wbGF0ZS5jcmVhdGVkXG4gICAgdGVtcGxhdGUuY3JlYXRlZCA9IC0+XG4gICAgICBvbkNyZWF0ZWQuY2FsbCBAXG4gICAgICBvbGRDcmVhdGVkPy5jYWxsIEBcblxuIyBXZSBtYWtlIFRlbXBsYXRlLmR5bmFtaWMgcmVzb2x2ZSB0byB0aGUgY29tcG9uZW50IGlmIGNvbXBvbmVudCBuYW1lIGlzIHNwZWNpZmllZCBhcyBhIHRlbXBsYXRlIG5hbWUsIGFuZCBub3RcbiMgdG8gdGhlIG5vbi1jb21wb25lbnQgdGVtcGxhdGUgd2hpY2ggaXMgcHJvYmFibHkgdXNlZCBvbmx5IGZvciB0aGUgY29udGVudC4gV2Ugc2ltcGx5IHJldXNlIEJsYXplLl9nZXRUZW1wbGF0ZS5cbiMgVE9ETzogSG93IHRvIHBhc3MgYXJncz9cbiMgICAgICAgTWF5YmUgc2ltcGx5IGJ5IHVzaW5nIFNwYWNlYmFycyBuZXN0ZWQgZXhwcmVzc2lvbnMgKGh0dHBzOi8vZ2l0aHViLmNvbS9tZXRlb3IvbWV0ZW9yL3B1bGwvNDEwMSk/XG4jICAgICAgIFRlbXBsYXRlLmR5bmFtaWMgdGVtcGxhdGU9XCIuLi5cIiBkYXRhPShhcmdzIC4uLik/IEJ1dCB0aGlzIGV4cG9zZXMgdGhlIGZhY3QgdGhhdCBhcmdzIGFyZSBwYXNzZWQgYXMgZGF0YSBjb250ZXh0LlxuIyAgICAgICBNYXliZSB3ZSBzaG91bGQgc2ltcGx5IG92ZXJyaWRlIFRlbXBsYXRlLmR5bmFtaWMgYW5kIGFkZCBcImFyZ3NcIiBhcmd1bWVudD9cbiMgVE9ETzogVGhpcyBjYW4gYmUgcmVtb3ZlZCBvbmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9tZXRlb3IvbWV0ZW9yL3B1bGwvNDAzNiBpcyBtZXJnZWQgaW4uXG5UZW1wbGF0ZS5fX2R5bmFtaWNXaXRoRGF0YUNvbnRleHQuX19oZWxwZXJzLnNldCAnY2hvb3NlVGVtcGxhdGUnLCAobmFtZSkgLT5cbiAgQmxhemUuX2dldFRlbXBsYXRlIG5hbWUsID0+XG4gICAgVGVtcGxhdGUuaW5zdGFuY2UoKVxuXG5hcmd1bWVudHNDb25zdHJ1Y3RvciA9IC0+XG4gICMgVGhpcyBjbGFzcyBzaG91bGQgbmV2ZXIgcmVhbGx5IGJlIGNyZWF0ZWQuXG4gIGFzc2VydCBmYWxzZVxuXG4jIFRPRE86IEZpbmQgYSB3YXkgdG8gcGFzcyBhcmd1bWVudHMgdG8gdGhlIGNvbXBvbmVudCB3aXRob3V0IGhhdmluZyB0byBpbnRyb2R1Y2Ugb25lIGludGVybWVkaWFyeSBkYXRhIGNvbnRleHQgaW50byB0aGUgZGF0YSBjb250ZXh0IGhpZXJhcmNoeS5cbiMgICAgICAgKEluIGZhY3QgdHdvIGRhdGEgY29udGV4dHMsIGJlY2F1c2Ugd2UgYWRkIG9uZSBtb3JlIHdoZW4gcmVzdG9yaW5nIHRoZSBvcmlnaW5hbCBvbmUuKVxuVGVtcGxhdGUucmVnaXN0ZXJIZWxwZXIgJ2FyZ3MnLCAtPlxuICBvYmogPSB7fVxuICAjIFdlIHVzZSBjdXN0b20gY29uc3RydWN0b3IgdG8ga25vdyB0aGF0IGl0IGlzIG5vdCBhIHJlYWwgZGF0YSBjb250ZXh0LlxuICBvYmouY29uc3RydWN0b3IgPSBhcmd1bWVudHNDb25zdHJ1Y3RvclxuICBvYmouX2FyZ3VtZW50cyA9IGFyZ3VtZW50c1xuICBvYmpcblxuc2hhcmUuRVZFTlRfSEFORExFUl9SRUdFWCA9IC9eb25bQS1aXS9cblxuc2hhcmUuaXNFdmVudEhhbmRsZXIgPSAoZnVuKSAtPlxuICBfLmlzRnVuY3Rpb24oZnVuKSBhbmQgZnVuLmV2ZW50SGFuZGxlclxuXG4jIFdoZW4gZXZlbnQgaGFuZGxlcnMgYXJlIHByb3ZpZGVkIGRpcmVjdGx5IGFzIGFyZ3MgdGhleSBhcmUgbm90IHBhc3NlZCB0aHJvdWdoXG4jIFNwYWNlYmFycy5ldmVudCBieSB0aGUgdGVtcGxhdGUgY29tcGlsZXIsIHNvIHdlIGhhdmUgdG8gZG8gaXQgb3Vyc2VsdmVzLlxub3JpZ2luYWxGbGF0dGVuQXR0cmlidXRlcyA9IEhUTUwuZmxhdHRlbkF0dHJpYnV0ZXNcbkhUTUwuZmxhdHRlbkF0dHJpYnV0ZXMgPSAoYXR0cnMpIC0+XG4gIGlmIGF0dHJzID0gb3JpZ2luYWxGbGF0dGVuQXR0cmlidXRlcyBhdHRyc1xuICAgIGZvciBuYW1lLCB2YWx1ZSBvZiBhdHRycyB3aGVuIHNoYXJlLkVWRU5UX0hBTkRMRVJfUkVHRVgudGVzdCBuYW1lXG4gICAgICAjIEFscmVhZHkgcHJvY2Vzc2VkIGJ5IFNwYWNlYmFycy5ldmVudC5cbiAgICAgIGNvbnRpbnVlIGlmIHNoYXJlLmlzRXZlbnRIYW5kbGVyIHZhbHVlXG4gICAgICBjb250aW51ZSBpZiBfLmlzQXJyYXkodmFsdWUpIGFuZCBfLnNvbWUgdmFsdWUsIHNoYXJlLmlzRXZlbnRIYW5kbGVyXG5cbiAgICAgICMgV2hlbiBldmVudCBoYW5kbGVycyBhcmUgcHJvdmlkZWQgZGlyZWN0bHkgYXMgYXJncyxcbiAgICAgICMgd2UgcmVxdWlyZSB0aGVtIHRvIGJlIGp1c3QgZXZlbnQgaGFuZGxlcnMuXG4gICAgICBpZiBfLmlzQXJyYXkgdmFsdWVcbiAgICAgICAgYXR0cnNbbmFtZV0gPSBfLm1hcCB2YWx1ZSwgU3BhY2ViYXJzLmV2ZW50XG4gICAgICBlbHNlXG4gICAgICAgIGF0dHJzW25hbWVdID0gU3BhY2ViYXJzLmV2ZW50IHZhbHVlXG5cbiAgYXR0cnNcblxuU3BhY2ViYXJzLmV2ZW50ID0gKGV2ZW50SGFuZGxlciwgYXJncy4uLikgLT5cbiAgdGhyb3cgbmV3IEVycm9yIFwiRXZlbnQgaGFuZGxlciBub3QgYSBmdW5jdGlvbjogI3tldmVudEhhbmRsZXJ9XCIgdW5sZXNzIF8uaXNGdW5jdGlvbiBldmVudEhhbmRsZXJcblxuICAjIEV4ZWN1dGUgYWxsIGFyZ3VtZW50cy5cbiAgYXJncyA9IFNwYWNlYmFycy5tdXN0YWNoZUltcGwgKCh4cy4uLikgLT4geHMpLCBhcmdzLi4uXG5cbiAgZnVuID0gKGV2ZW50LCBldmVudEFyZ3MuLi4pIC0+XG4gICAgY3VycmVudFZpZXcgPSBCbGF6ZS5nZXRWaWV3IGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICB3cmFwVmlld0FuZFRlbXBsYXRlIGN1cnJlbnRWaWV3LCAtPlxuICAgICAgIyBXZSBkbyBub3QgaGF2ZSB0byBiaW5kIFwidGhpc1wiIGJlY2F1c2UgZXZlbnQgaGFuZGxlcnMgYXJlIHJlc29sdmVkXG4gICAgICAjIGFzIHRlbXBsYXRlIGhlbHBlcnMgYW5kIGFyZSBhbHJlYWR5IGJvdW5kLiBXZSBiaW5kIGV2ZW50IGhhbmRsZXJzXG4gICAgICAjIGluIGR5bmFtaWMgYXR0cmlidXRlcyBhbHJlYWR5IGFzIHdlbGwuXG4gICAgICBldmVudEhhbmRsZXIuYXBwbHkgbnVsbCwgW2V2ZW50XS5jb25jYXQgYXJncywgZXZlbnRBcmdzXG5cbiAgZnVuLmV2ZW50SGFuZGxlciA9IHRydWVcblxuICBmdW5cblxuIyBXaGVuIGNvbnZlcnRpbmcgdGhlIGNvbXBvbmVudCB0byB0aGUgc3RhdGljIEhUTUwsIHJlbW92ZSBhbGwgZXZlbnQgaGFuZGxlcnMuXG5vcmlnaW5hbFZpc2l0VGFnID0gSFRNTC5Ub0hUTUxWaXNpdG9yOjp2aXNpdFRhZ1xuSFRNTC5Ub0hUTUxWaXNpdG9yOjp2aXNpdFRhZyA9ICh0YWcpIC0+XG4gIGlmIGF0dHJzID0gdGFnLmF0dHJzXG4gICAgYXR0cnMgPSBIVE1MLmZsYXR0ZW5BdHRyaWJ1dGVzIGF0dHJzXG4gICAgZm9yIG5hbWUgb2YgYXR0cnMgd2hlbiBzaGFyZS5FVkVOVF9IQU5ETEVSX1JFR0VYLnRlc3QgbmFtZVxuICAgICAgZGVsZXRlIGF0dHJzW25hbWVdXG4gICAgdGFnLmF0dHJzID0gYXR0cnNcblxuICBvcmlnaW5hbFZpc2l0VGFnLmNhbGwgQCwgdGFnXG5cbmN1cnJlbnRWaWV3SWZSZW5kZXJpbmcgPSAtPlxuICB2aWV3ID0gQmxhemUuY3VycmVudFZpZXdcbiAgaWYgdmlldz8uX2lzSW5SZW5kZXJcbiAgICB2aWV3XG4gIGVsc2VcbiAgICBudWxsXG5cbmNvbnRlbnRBc0Z1bmMgPSAoY29udGVudCkgLT5cbiAgIyBXZSBkbyBub3QgY2hlY2sgY29udGVudCBmb3IgdmFsaWRpdHkuXG5cbiAgaWYgIV8uaXNGdW5jdGlvbiBjb250ZW50XG4gICAgcmV0dXJuIC0+XG4gICAgICBjb250ZW50XG5cbiAgY29udGVudFxuXG5jb250ZW50QXNWaWV3ID0gKGNvbnRlbnQpIC0+XG4gICMgV2UgZG8gbm90IGNoZWNrIGNvbnRlbnQgZm9yIHZhbGlkaXR5LlxuXG4gIGlmIGNvbnRlbnQgaW5zdGFuY2VvZiBCbGF6ZS5UZW1wbGF0ZVxuICAgIGNvbnRlbnQuY29uc3RydWN0VmlldygpXG4gIGVsc2UgaWYgY29udGVudCBpbnN0YW5jZW9mIEJsYXplLlZpZXdcbiAgICBjb250ZW50XG4gIGVsc2VcbiAgICBCbGF6ZS5WaWV3ICdyZW5kZXInLCBjb250ZW50QXNGdW5jIGNvbnRlbnRcblxuSFRNTEpTRXhwYW5kZXIgPSBCbGF6ZS5fSFRNTEpTRXhwYW5kZXIuZXh0ZW5kKClcbkhUTUxKU0V4cGFuZGVyLmRlZlxuICAjIEJhc2VkIG9uIEJsYXplLl9IVE1MSlNFeHBhbmRlciwgYnV0IGNhbGxzIG91ciBleHBhbmRWaWV3LlxuICB2aXNpdE9iamVjdDogKHgpIC0+XG4gICAgaWYgeCBpbnN0YW5jZW9mIEJsYXplLlRlbXBsYXRlXG4gICAgICB4ID0geC5jb25zdHJ1Y3RWaWV3KClcbiAgICBpZiB4IGluc3RhbmNlb2YgQmxhemUuVmlld1xuICAgICAgcmV0dXJuIGV4cGFuZFZpZXcgeCwgQHBhcmVudFZpZXdcblxuICAgIEhUTUwuVHJhbnNmb3JtaW5nVmlzaXRvci5wcm90b3R5cGUudmlzaXRPYmplY3QuY2FsbCBALCB4XG5cbiMgQmFzZWQgb24gQmxhemUuX2V4cGFuZCwgYnV0IHVzZXMgb3VyIEhUTUxKU0V4cGFuZGVyLlxuZXhwYW5kID0gKGh0bWxqcywgcGFyZW50VmlldykgLT5cbiAgcGFyZW50VmlldyA9IHBhcmVudFZpZXcgb3IgY3VycmVudFZpZXdJZlJlbmRlcmluZygpXG5cbiAgKG5ldyBIVE1MSlNFeHBhbmRlciBwYXJlbnRWaWV3OiBwYXJlbnRWaWV3KS52aXNpdCBodG1sanNcblxuIyBCYXNlZCBvbiBCbGF6ZS5fZXhwYW5kVmlldywgYnV0IHdpdGggZmx1c2hpbmcuXG5leHBhbmRWaWV3ID0gKHZpZXcsIHBhcmVudFZpZXcpIC0+XG4gIEJsYXplLl9jcmVhdGVWaWV3IHZpZXcsIHBhcmVudFZpZXcsIHRydWVcblxuICB2aWV3Ll9pc0luUmVuZGVyID0gdHJ1ZVxuICBodG1sanMgPSBCbGF6ZS5fd2l0aEN1cnJlbnRWaWV3IHZpZXcsIC0+XG4gICAgdmlldy5fcmVuZGVyKClcbiAgdmlldy5faXNJblJlbmRlciA9IGZhbHNlXG5cbiAgVHJhY2tlci5mbHVzaCgpXG5cbiAgcmVzdWx0ID0gZXhwYW5kIGh0bWxqcywgdmlld1xuXG4gIFRyYWNrZXIuZmx1c2goKVxuXG4gIGlmIFRyYWNrZXIuYWN0aXZlXG4gICAgVHJhY2tlci5vbkludmFsaWRhdGUgLT5cbiAgICAgIEJsYXplLl9kZXN0cm95VmlldyB2aWV3XG4gIGVsc2VcbiAgICBCbGF6ZS5fZGVzdHJveVZpZXcgdmlld1xuXG4gIFRyYWNrZXIuZmx1c2goKVxuXG4gIHJlc3VsdFxuXG5jbGFzcyBCbGF6ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAgIyBUT0RPOiBGaWd1cmUgb3V0IGhvdyB0byBkbyBhdCB0aGUgQmFzZUNvbXBvbmVudCBsZXZlbD9cbiAgQGdldENvbXBvbmVudEZvckVsZW1lbnQ6IChkb21FbGVtZW50KSAtPlxuICAgIHJldHVybiBudWxsIHVubGVzcyBkb21FbGVtZW50XG5cbiAgICAjIFRoaXMgdXNlcyB0aGUgc2FtZSBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgYSBET00gZWxlbWVudCB0aGF0IEJsYXplLl9ET01SYW5nZS5mb3JFbGVtZW50IGRvZXMuXG4gICAgdGhyb3cgbmV3IEVycm9yIFwiRXhwZWN0ZWQgRE9NIGVsZW1lbnQuXCIgdW5sZXNzIGRvbUVsZW1lbnQubm9kZVR5cGUgaXMgTm9kZS5FTEVNRU5UX05PREVcblxuICAgICMgRm9yIERPTSBlbGVtZW50cyB3ZSB3YW50IHRvIHJldHVybiB0aGUgY29tcG9uZW50IHdoaWNoIG1hdGNoZXMgdGhlIHRlbXBsYXRlXG4gICAgIyB3aXRoIHRoYXQgRE9NIGVsZW1lbnQgYW5kIG5vdCB0aGUgY29tcG9uZW50IGNsb3Nlc3QgaW4gdGhlIGNvbXBvbmVudCB0cmVlLlxuICAgICMgU28gd2Ugc2tpcCB0aGUgYmxvY2sgaGVscGVycy4gKElmIERPTSBlbGVtZW50IGlzIHJlbmRlcmVkIGJ5IHRoZSBibG9jayBoZWxwZXJcbiAgICAjIHRoaXMgd2lsbCBmaW5kIHRoYXQgYmxvY2sgaGVscGVyIHRlbXBsYXRlL2NvbXBvbmVudC4pXG4gICAgdGVtcGxhdGVJbnN0YW5jZSA9IGdldFRlbXBsYXRlSW5zdGFuY2VGdW5jdGlvbiBCbGF6ZS5nZXRWaWV3KGRvbUVsZW1lbnQpLCB0cnVlXG4gICAgdGVtcGxhdGVJbnN0YW5jZVRvQ29tcG9uZW50IHRlbXBsYXRlSW5zdGFuY2UsIHRydWVcblxuICBjaGlsZENvbXBvbmVudHM6IChuYW1lT3JDb21wb25lbnQpIC0+XG4gICAgaWYgKGNvbXBvbmVudCA9IEBjb21wb25lbnQoKSkgaXNudCBAXG4gICAgICBjb21wb25lbnQuY2hpbGRDb21wb25lbnRzIG5hbWVPckNvbXBvbmVudFxuICAgIGVsc2VcbiAgICAgIHN1cGVyXG5cbiAgIyBBIHZlcnNpb24gb2YgY2hpbGRDb21wb25lbnRzV2l0aCB3aGljaCBrbm93cyBhYm91dCBtaXhpbnMuXG4gICMgV2hlbiBjaGVja2luZyBmb3IgcHJvcGVydGllcyBpdCBjaGVja3MgbWl4aW5zIGFzIHdlbGwuXG4gIGNoaWxkQ29tcG9uZW50c1dpdGg6IChwcm9wZXJ0eU9yTWF0Y2hlck9yRnVuY3Rpb24pIC0+XG4gICAgaWYgKGNvbXBvbmVudCA9IEBjb21wb25lbnQoKSkgaXNudCBAXG4gICAgICBjb21wb25lbnQuY2hpbGRDb21wb25lbnRzV2l0aCBwcm9wZXJ0eU9yTWF0Y2hlck9yRnVuY3Rpb25cbiAgICBlbHNlXG4gICAgICBhc3NlcnQgcHJvcGVydHlPck1hdGNoZXJPckZ1bmN0aW9uXG5cbiAgICAgIHByb3BlcnR5T3JNYXRjaGVyT3JGdW5jdGlvbiA9IGNyZWF0ZU1hdGNoZXIgcHJvcGVydHlPck1hdGNoZXJPckZ1bmN0aW9uLCB0cnVlXG5cbiAgICAgIHN1cGVyIHByb3BlcnR5T3JNYXRjaGVyT3JGdW5jdGlvblxuXG4gIHBhcmVudENvbXBvbmVudDogKHBhcmVudENvbXBvbmVudCkgLT5cbiAgICBpZiAoY29tcG9uZW50ID0gQGNvbXBvbmVudCgpKSBpc250IEBcbiAgICAgIGNvbXBvbmVudC5wYXJlbnRDb21wb25lbnQgcGFyZW50Q29tcG9uZW50XG4gICAgZWxzZVxuICAgICAgc3VwZXJcblxuICBhZGRDaGlsZENvbXBvbmVudDogKGNoaWxkQ29tcG9uZW50KSAtPlxuICAgIGlmIChjb21wb25lbnQgPSBAY29tcG9uZW50KCkpIGlzbnQgQFxuICAgICAgY29tcG9uZW50LmFkZENoaWxkQ29tcG9uZW50IGNoaWxkQ29tcG9uZW50XG4gICAgZWxzZVxuICAgICAgc3VwZXJcblxuICByZW1vdmVDaGlsZENvbXBvbmVudDogKGNoaWxkQ29tcG9uZW50KSAtPlxuICAgIGlmIChjb21wb25lbnQgPSBAY29tcG9uZW50KCkpIGlzbnQgQFxuICAgICAgY29tcG9uZW50LnJlbW92ZUNoaWxkQ29tcG9uZW50IGNoaWxkQ29tcG9uZW50XG4gICAgZWxzZVxuICAgICAgc3VwZXJcblxuICBtaXhpbnM6IC0+XG4gICAgW11cblxuICAjIFdoZW4gYSBjb21wb25lbnQgaXMgdXNlZCBhcyBhIG1peGluLCBjcmVhdGVNaXhpbnMgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIHRvIHNldCB0aGUgcGFyZW50XG4gICMgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW4uIEV4dGVuZCB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBkbyBhbnkgYWN0aW9uIHdoZW4gcGFyZW50IGlzXG4gICMgc2V0LCBmb3IgZXhhbXBsZSwgYWRkIGRlcGVuZGVuY3kgbWl4aW5zIHRvIHRoZSBwYXJlbnQuIE1ha2Ugc3VyZSB5b3UgY2FsbCBzdXBlciBhcyB3ZWxsLlxuICBtaXhpblBhcmVudDogKG1peGluUGFyZW50KSAtPlxuICAgIEBfY29tcG9uZW50SW50ZXJuYWxzID89IHt9XG5cbiAgICAjIFNldHRlci5cbiAgICBpZiBtaXhpblBhcmVudFxuICAgICAgQF9jb21wb25lbnRJbnRlcm5hbHMubWl4aW5QYXJlbnQgPSBtaXhpblBhcmVudFxuICAgICAgIyBUbyBhbGxvdyBjaGFpbmluZy5cbiAgICAgIHJldHVybiBAXG5cbiAgICAjIEdldHRlci5cbiAgICBAX2NvbXBvbmVudEludGVybmFscy5taXhpblBhcmVudCBvciBudWxsXG5cbiAgcmVxdWlyZU1peGluOiAobmFtZU9yTWl4aW4pIC0+XG4gICAgYXNzZXJ0IEBfY29tcG9uZW50SW50ZXJuYWxzPy5taXhpbnNcblxuICAgIFRyYWNrZXIubm9ucmVhY3RpdmUgPT5cbiAgICAgICMgRG8gbm90IGRvIGFueXRoaW5nIGlmIG1peGluIGlzIGFscmVhZHkgcmVxdWlyZWQuIFRoaXMgYWxsb3dzIG11bHRpcGxlIG1peGlucyB0byBjYWxsIHJlcXVpcmVNaXhpblxuICAgICAgIyBpbiBtaXhpblBhcmVudCBtZXRob2QgdG8gYWRkIGRlcGVuZGVuY2llcywgYnV0IGlmIGRlcGVuZGVuY2llcyBhcmUgYWxyZWFkeSB0aGVyZSwgbm90aGluZyBoYXBwZW5zLlxuICAgICAgcmV0dXJuIGlmIEBnZXRNaXhpbiBuYW1lT3JNaXhpblxuXG4gICAgICBpZiBfLmlzU3RyaW5nIG5hbWVPck1peGluXG4gICAgICAgICMgSXQgY291bGQgYmUgdGhhdCB0aGUgY29tcG9uZW50IGlzIG5vdCBhIHJlYWwgaW5zdGFuY2Ugb2YgdGhlIEJsYXplQ29tcG9uZW50IGNsYXNzLFxuICAgICAgICAjIHNvIGl0IG1pZ2h0IG5vdCBoYXZlIGEgY29uc3RydWN0b3IgcG9pbnRpbmcgYmFjayB0byBhIEJsYXplQ29tcG9uZW50IHN1YmNsYXNzLlxuICAgICAgICBpZiBAY29uc3RydWN0b3IuZ2V0Q29tcG9uZW50XG4gICAgICAgICAgbWl4aW5JbnN0YW5jZUNvbXBvbmVudCA9IEBjb25zdHJ1Y3Rvci5nZXRDb21wb25lbnQgbmFtZU9yTWl4aW5cbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1peGluSW5zdGFuY2VDb21wb25lbnQgPSBCbGF6ZUNvbXBvbmVudC5nZXRDb21wb25lbnQgbmFtZU9yTWl4aW5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwiVW5rbm93biBtaXhpbiAnI3tuYW1lT3JNaXhpbn0nLlwiIHVubGVzcyBtaXhpbkluc3RhbmNlQ29tcG9uZW50XG4gICAgICAgIG1peGluSW5zdGFuY2UgPSBuZXcgbWl4aW5JbnN0YW5jZUNvbXBvbmVudCgpXG4gICAgICBlbHNlIGlmIF8uaXNGdW5jdGlvbiBuYW1lT3JNaXhpblxuICAgICAgICBtaXhpbkluc3RhbmNlID0gbmV3IG5hbWVPck1peGluKClcbiAgICAgIGVsc2VcbiAgICAgICAgbWl4aW5JbnN0YW5jZSA9IG5hbWVPck1peGluXG5cbiAgICAgICMgV2UgYWRkIG1peGluIGJlZm9yZSB3ZSBjYWxsIG1peGluUGFyZW50IHNvIHRoYXQgZGVwZW5kZW5jaWVzIGNvbWUgYWZ0ZXIgdGhpcyBtaXhpbixcbiAgICAgICMgYW5kIHRoYXQgd2UgcHJldmVudCBwb3NzaWJsZSBpbmZpbml0ZSBsb29wcyBiZWNhdXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbiAgICAgICMgVE9ETzogRm9yIG5vdyB3ZSBkbyBub3QgcHJvdmlkZSBhbiBvZmZpY2lhbCBBUEkgdG8gYWRkIGRlcGVuZGVuY2llcyBiZWZvcmUgdGhlIG1peGluIGl0c2VsZi5cbiAgICAgIEBfY29tcG9uZW50SW50ZXJuYWxzLm1peGlucy5wdXNoIG1peGluSW5zdGFuY2VcblxuICAgICAgIyBXZSBhbGxvdyBtaXhpbnMgdG8gbm90IGJlIGNvbXBvbmVudHMsIHNvIG1ldGhvZHMgYXJlIG5vdCBuZWNlc3NhcnkgYXZhaWxhYmxlLlxuXG4gICAgICAjIFNldCBtaXhpbiBwYXJlbnQuXG4gICAgICBpZiBtaXhpbkluc3RhbmNlLm1peGluUGFyZW50XG4gICAgICAgIG1peGluSW5zdGFuY2UubWl4aW5QYXJlbnQgQFxuXG4gICAgICAjIE1heWJlIG1peGluIGhhcyBpdHMgb3duIG1peGlucyBhcyB3ZWxsLlxuICAgICAgbWl4aW5JbnN0YW5jZS5jcmVhdGVNaXhpbnM/KClcblxuICAgICAgaWYgY29tcG9uZW50ID0gQGNvbXBvbmVudCgpXG4gICAgICAgIGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzID89IHt9XG4gICAgICAgIGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLnRlbXBsYXRlSW5zdGFuY2UgPz0gbmV3IFJlYWN0aXZlRmllbGQgbnVsbCwgKGEsIGIpIC0+IGEgaXMgYlxuXG4gICAgICAgICMgSWYgYSBtaXhpbiBpcyBhZGRpbmcgYSBkZXBlbmRlbmN5IHVzaW5nIHJlcXVpcmVNaXhpbiBhZnRlciBpdHMgbWl4aW5QYXJlbnQgY2xhc3MgKGZvciBleGFtcGxlLCBpbiBvbkNyZWF0ZSlcbiAgICAgICAgIyBhbmQgdGhpcyBpcyB0aGlzIGRlcGVuZGVuY3kgbWl4aW4sIHRoZSB2aWV3IG1pZ2h0IGFscmVhZHkgYmUgY3JlYXRlZCBvciByZW5kZXJlZCBhbmQgY2FsbGJhY2tzIHdlcmVcbiAgICAgICAgIyBhbHJlYWR5IGNhbGxlZCwgc28gd2Ugc2hvdWxkIGNhbGwgdGhlbSBtYW51YWxseSBoZXJlIGFzIHdlbGwuIEJ1dCBvbmx5IGlmIGhlIHZpZXcgaGFzIG5vdCBiZWVuIGRlc3Ryb3llZFxuICAgICAgICAjIGFscmVhZHkuIEZvciB0aG9zZSBtaXhpbnMgd2UgZG8gbm90IGNhbGwgYW55dGhpbmcsIHRoZXJlIGlzIGxpdHRsZSB1c2UgZm9yIHRoZW0gbm93LlxuICAgICAgICB1bmxlc3MgY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMudGVtcGxhdGVJbnN0YW5jZSgpPy52aWV3LmlzRGVzdHJveWVkXG4gICAgICAgICAgbWl4aW5JbnN0YW5jZS5vbkNyZWF0ZWQ/KCkgaWYgbm90IGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmluT25DcmVhdGVkIGFuZCBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy50ZW1wbGF0ZUluc3RhbmNlKCk/LnZpZXcuaXNDcmVhdGVkXG4gICAgICAgICAgbWl4aW5JbnN0YW5jZS5vblJlbmRlcmVkPygpIGlmIG5vdCBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pbk9uUmVuZGVyZWQgYW5kIGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLnRlbXBsYXRlSW5zdGFuY2UoKT8udmlldy5pc1JlbmRlcmVkXG5cbiAgICAjIFRvIGFsbG93IGNoYWluaW5nLlxuICAgIEBcblxuICAjIE1ldGhvZCB0byBpbnN0YW50aWF0ZSBhbGwgbWl4aW5zLlxuICBjcmVhdGVNaXhpbnM6IC0+XG4gICAgQF9jb21wb25lbnRJbnRlcm5hbHMgPz0ge31cblxuICAgICMgVG8gYWxsb3cgY2FsbGluZyBpdCBtdWx0aXBsZSB0aW1lcywgYnV0IG5vbi1maXJzdCBjYWxscyBhcmUgc2ltcGx5IGlnbm9yZWQuXG4gICAgcmV0dXJuIGlmIEBfY29tcG9uZW50SW50ZXJuYWxzLm1peGluc1xuICAgIEBfY29tcG9uZW50SW50ZXJuYWxzLm1peGlucyA9IFtdXG5cbiAgICBmb3IgbWl4aW4gaW4gQG1peGlucygpXG4gICAgICBAcmVxdWlyZU1peGluIG1peGluXG5cbiAgICAjIFRvIGFsbG93IGNoYWluaW5nLlxuICAgIEBcblxuICBnZXRNaXhpbjogKG5hbWVPck1peGluKSAtPlxuICAgIGlmIF8uaXNTdHJpbmcgbmFtZU9yTWl4aW5cbiAgICAgICMgQnkgcGFzc2luZyBAIGFzIHRoZSBmaXJzdCBhcmd1bWVudCwgd2UgdHJhdmVyc2Ugb25seSBtaXhpbnMuXG4gICAgICBAZ2V0Rmlyc3RXaXRoIEAsIChjaGlsZCwgcGFyZW50KSA9PlxuICAgICAgICAjIFdlIGRvIG5vdCByZXF1aXJlIG1peGlucyB0byBiZSBjb21wb25lbnRzLCBidXQgaWYgdGhleSBhcmUsIHRoZXkgY2FuXG4gICAgICAgICMgYmUgcmVmZXJlbmNlZCBiYXNlZCBvbiB0aGVpciBjb21wb25lbnQgbmFtZS5cbiAgICAgICAgbWl4aW5Db21wb25lbnROYW1lID0gY2hpbGQuY29tcG9uZW50TmFtZT8oKSBvciBudWxsXG4gICAgICAgIHJldHVybiBtaXhpbkNvbXBvbmVudE5hbWUgYW5kIG1peGluQ29tcG9uZW50TmFtZSBpcyBuYW1lT3JNaXhpblxuICAgIGVsc2VcbiAgICAgICMgQnkgcGFzc2luZyBAIGFzIHRoZSBmaXJzdCBhcmd1bWVudCwgd2UgdHJhdmVyc2Ugb25seSBtaXhpbnMuXG4gICAgICBAZ2V0Rmlyc3RXaXRoIEAsIChjaGlsZCwgcGFyZW50KSA9PlxuICAgICAgICAjIG5hbWVPck1peGluIGlzIGEgY2xhc3MuXG4gICAgICAgIHJldHVybiB0cnVlIGlmIGNoaWxkLmNvbnN0cnVjdG9yIGlzIG5hbWVPck1peGluXG5cbiAgICAgICAgIyBuYW1lT3JNaXhpbiBpcyBhbiBpbnN0YW5jZSwgb3Igc29tZXRoaW5nIGVsc2UuXG4gICAgICAgIHJldHVybiB0cnVlIGlmIGNoaWxkIGlzIG5hbWVPck1peGluXG5cbiAgICAgICAgZmFsc2VcblxuICAjIENhbGxzIHRoZSBjb21wb25lbnQgKGlmIGFmdGVyQ29tcG9uZW50T3JNaXhpbiBpcyBudWxsKSBvciB0aGUgZmlyc3QgbmV4dCBtaXhpblxuICAjIGFmdGVyIGFmdGVyQ29tcG9uZW50T3JNaXhpbiBpdCBmaW5kcywgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAgY2FsbEZpcnN0V2l0aDogKGFmdGVyQ29tcG9uZW50T3JNaXhpbiwgcHJvcGVydHlOYW1lLCBhcmdzLi4uKSAtPlxuICAgIGFzc2VydCBfLmlzU3RyaW5nIHByb3BlcnR5TmFtZVxuXG4gICAgY29tcG9uZW50T3JNaXhpbiA9IEBnZXRGaXJzdFdpdGggYWZ0ZXJDb21wb25lbnRPck1peGluLCBwcm9wZXJ0eU5hbWVcblxuICAgICMgVE9ETzogU2hvdWxkIHdlIHRocm93IGFuIGVycm9yIGhlcmU/IFNvbWV0aGluZyBsaWtlIGNhbGxpbmcgYSBmdW5jdGlvbiB3aGljaCBkb2VzIG5vdCBleGlzdD9cbiAgICByZXR1cm4gdW5sZXNzIGNvbXBvbmVudE9yTWl4aW5cblxuICAgICMgV2UgYXJlIG5vdCBjYWxsaW5nIGNhbGxGaXJzdFdpdGggb24gdGhlIGNvbXBvbmVudE9yTWl4aW4gYmVjYXVzZSBoZXJlIHdlXG4gICAgIyBhcmUgYWxyZWFkeSB0cmF2ZXJzaW5nIG1peGlucyBzbyB3ZSBkbyBub3QgcmVjdXJzZSBvbmNlIG1vcmUuXG4gICAgaWYgXy5pc0Z1bmN0aW9uIGNvbXBvbmVudE9yTWl4aW5bcHJvcGVydHlOYW1lXVxuICAgICAgcmV0dXJuIGNvbXBvbmVudE9yTWl4aW5bcHJvcGVydHlOYW1lXSBhcmdzLi4uXG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGNvbXBvbmVudE9yTWl4aW5bcHJvcGVydHlOYW1lXVxuXG4gIGdldEZpcnN0V2l0aDogKGFmdGVyQ29tcG9uZW50T3JNaXhpbiwgcHJvcGVydHlPck1hdGNoZXJPckZ1bmN0aW9uKSAtPlxuICAgIGFzc2VydCBAX2NvbXBvbmVudEludGVybmFscz8ubWl4aW5zXG4gICAgYXNzZXJ0IHByb3BlcnR5T3JNYXRjaGVyT3JGdW5jdGlvblxuXG4gICAgIyBIZXJlIHdlIGFyZSBhbHJlYWR5IHRyYXZlcnNpbmcgbWl4aW5zIHNvIHdlIGRvIG5vdCByZWN1cnNlIG9uY2UgbW9yZS5cbiAgICBwcm9wZXJ0eU9yTWF0Y2hlck9yRnVuY3Rpb24gPSBjcmVhdGVNYXRjaGVyIHByb3BlcnR5T3JNYXRjaGVyT3JGdW5jdGlvbiwgZmFsc2VcblxuICAgICMgSWYgYWZ0ZXJDb21wb25lbnRPck1peGluIGlzIG5vdCBwcm92aWRlZCwgd2Ugc3RhcnQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIGlmIG5vdCBhZnRlckNvbXBvbmVudE9yTWl4aW5cbiAgICAgIHJldHVybiBAIGlmIHByb3BlcnR5T3JNYXRjaGVyT3JGdW5jdGlvbi5jYWxsIEAsIEAsIEBcbiAgICAgICMgQW5kIGNvbnRpbnVlIHdpdGggbWl4aW5zLlxuICAgICAgZm91bmQgPSB0cnVlXG4gICAgIyBJZiBhZnRlckNvbXBvbmVudE9yTWl4aW4gaXMgdGhlIGNvbXBvbmVudCwgd2Ugc3RhcnQgd2l0aCBtaXhpbnMuXG4gICAgZWxzZSBpZiBhZnRlckNvbXBvbmVudE9yTWl4aW4gYW5kIGFmdGVyQ29tcG9uZW50T3JNaXhpbiBpcyBAXG4gICAgICBmb3VuZCA9IHRydWVcbiAgICBlbHNlXG4gICAgICBmb3VuZCA9IGZhbHNlXG5cbiAgICAjIFRPRE86IEltcGxlbWVudCB3aXRoIGEgbWFwIGJldHdlZW4gbWl4aW4gLT4gcG9zaXRpb24sIHNvIHRoYXQgd2UgZG8gbm90IGhhdmUgdG8gc2VlayB0byBmaW5kIGEgbWl4aW4uXG4gICAgZm9yIG1peGluIGluIEBfY29tcG9uZW50SW50ZXJuYWxzLm1peGluc1xuICAgICAgcmV0dXJuIG1peGluIGlmIGZvdW5kIGFuZCBwcm9wZXJ0eU9yTWF0Y2hlck9yRnVuY3Rpb24uY2FsbCBALCBtaXhpbiwgQFxuXG4gICAgICBmb3VuZCA9IHRydWUgaWYgbWl4aW4gaXMgYWZ0ZXJDb21wb25lbnRPck1peGluXG5cbiAgICBudWxsXG5cbiAgIyBUaGlzIGNsYXNzIG1ldGhvZCBtb3JlIG9yIGxlc3MganVzdCBjcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgY29tcG9uZW50IGFuZCBjYWxscyBpdHMgcmVuZGVyQ29tcG9uZW50XG4gICMgbWV0aG9kLiBCdXQgYmVjYXVzZSB3ZSB3YW50IHRvIGFsbG93IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBjb21wb25lbnQgaW4gdGVtcGxhdGVzLCB3ZSBoYXZlIHNvbWVcbiAgIyBjb21wbGljYXRlZCBjb2RlIGFyb3VuZCB0byBleHRyYWN0IGFuZCBwYXNzIHRob3NlIGFyZ3VtZW50cy4gSXQgaXMgc2ltaWxhciB0byBob3cgZGF0YSBjb250ZXh0IGlzXG4gICMgcGFzc2VkIHRvIGJsb2NrIGhlbHBlcnMuIEluIGEgZGF0YSBjb250ZXh0IHZpc2libGUgb25seSB0byB0aGUgYmxvY2sgaGVscGVyIHRlbXBsYXRlLlxuICAjIFRPRE86IFRoaXMgY291bGQgYmUgbWFkZSBsZXNzIGhhY2t5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21ldGVvci9tZXRlb3IvaXNzdWVzLzM5MTNcbiAgQHJlbmRlckNvbXBvbmVudDogKHBhcmVudENvbXBvbmVudCkgLT5cbiAgICBUcmFja2VyLm5vbnJlYWN0aXZlID0+XG4gICAgICBjb21wb25lbnRDbGFzcyA9IEBcblxuICAgICAgaWYgQmxhemUuY3VycmVudFZpZXdcbiAgICAgICAgIyBXZSBjaGVjayBkYXRhIGNvbnRleHQgaW4gYSBub24tcmVhY3RpdmUgd2F5LCBiZWNhdXNlIHdlIHdhbnQganVzdCB0byBwZWVrIGludG8gaXRcbiAgICAgICAgIyBhbmQgZGV0ZXJtaW5lIGlmIGRhdGEgY29udGV4dCBjb250YWlucyBjb21wb25lbnQgYXJndW1lbnRzIG9yIG5vdC4gQW5kIHdoaWxlXG4gICAgICAgICMgY29tcG9uZW50IGFyZ3VtZW50cyBtaWdodCBjaGFuZ2UgdGhyb3VnaCB0aW1lLCB0aGUgZmFjdCB0aGF0IHRoZXkgYXJlIHRoZXJlIGF0XG4gICAgICAgICMgYWxsIG9yIG5vdCAoXCJhcmdzXCIgdGVtcGxhdGUgaGVscGVyIHdhcyB1c2VkIG9yIG5vdCkgZG9lcyBub3QgY2hhbmdlIHRocm91Z2ggdGltZS5cbiAgICAgICAgIyBTbyB3ZSBjYW4gY2hlY2sgdGhhdCBub24tcmVhY3RpdmVseS5cbiAgICAgICAgZGF0YSA9IFRlbXBsYXRlLmN1cnJlbnREYXRhKClcbiAgICAgIGVsc2VcbiAgICAgICAgIyBUaGVyZSBpcyBubyBjdXJyZW50IHZpZXcgd2hlbiB0aGVyZSBpcyBubyBkYXRhIGNvbnRleHQgeWV0LCB0aHVzIGFsc28gbm8gYXJndW1lbnRzXG4gICAgICAgICMgd2VyZSBwcm92aWRlZCB0aHJvdWdoIFwiYXJnc1wiIHRlbXBsYXRlIGhlbHBlciwgc28gd2UganVzdCBjb250aW51ZSBub3JtYWxseS5cbiAgICAgICAgZGF0YSA9IG51bGxcblxuICAgICAgaWYgZGF0YT8uY29uc3RydWN0b3IgaXNudCBhcmd1bWVudHNDb25zdHJ1Y3RvclxuICAgICAgICAjIFNvIHRoYXQgY3VycmVudENvbXBvbmVudCBpbiB0aGUgY29uc3RydWN0b3IgY2FuIHJldHVybiB0aGUgY29tcG9uZW50XG4gICAgICAgICMgaW5zaWRlIHdoaWNoIHRoaXMgY29tcG9uZW50IGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxuICAgICAgICByZXR1cm4gd3JhcFZpZXdBbmRUZW1wbGF0ZSBCbGF6ZS5jdXJyZW50VmlldywgPT5cbiAgICAgICAgICBjb21wb25lbnQgPSBuZXcgY29tcG9uZW50Q2xhc3MoKVxuXG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5yZW5kZXJDb21wb25lbnQgcGFyZW50Q29tcG9uZW50XG5cbiAgICAgICMgQXJndW1lbnRzIHdlcmUgcHJvdmlkZWQgdGhyb3VnaCBcImFyZ3NcIiB0ZW1wbGF0ZSBoZWxwZXIuXG5cbiAgICAgICMgV2Ugd2FudCB0byByZWFjdGl2ZWx5IGRlcGVuZCBvbiB0aGUgZGF0YSBjb250ZXh0IGZvciBhcmd1bWVudHMsIHNvIHdlIHJldHVybiBhIGZ1bmN0aW9uXG4gICAgICAjIGluc3RlYWQgb2YgYSB0ZW1wbGF0ZS4gRnVuY3Rpb24gd2lsbCBiZSBydW4gaW5zaWRlIGFuIGF1dG9ydW4sIGEgcmVhY3RpdmUgY29udGV4dC5cbiAgICAgIC0+XG4gICAgICAgIGFzc2VydCBUcmFja2VyLmFjdGl2ZVxuXG4gICAgICAgICMgV2UgY2Fubm90IHVzZSBUZW1wbGF0ZS5nZXREYXRhKCkgaW5zaWRlIGEgbm9ybWFsIGF1dG9ydW4gYmVjYXVzZSBjdXJyZW50IHZpZXcgaXMgbm90IGRlZmluZWQgaW5zaWRlXG4gICAgICAgICMgYSBub3JtYWwgYXV0b3J1bi4gQnV0IHdlIGRvIG5vdCByZWFsbHkgaGF2ZSB0byBkZXBlbmQgcmVhY3RpdmVseSBvbiB0aGUgY3VycmVudCB2aWV3LCBvbmx5IG9uIHRoZVxuICAgICAgICAjIGRhdGEgY29udGV4dCBvZiBhIGtub3duICh0aGUgY2xvc2VzdCBCbGF6ZS5XaXRoKSB2aWV3LiBTbyB3ZSBnZXQgdGhpcyB2aWV3IGJ5IG91cnNlbHZlcy5cbiAgICAgICAgY3VycmVudFdpdGggPSBCbGF6ZS5nZXRWaWV3ICd3aXRoJ1xuXG4gICAgICAgICMgQnkgZGVmYXVsdCBkYXRhVmFyIGluIHRoZSBCbGF6ZS5XaXRoIHZpZXcgdXNlcyBSZWFjdGl2ZVZhciB3aXRoIGRlZmF1bHQgZXF1YWxpdHkgZnVuY3Rpb24gd2hpY2hcbiAgICAgICAgIyBzZWVzIGFsbCBvYmplY3RzIGFzIGRpZmZlcmVudC4gU28gaW52YWxpZGF0aW9ucyBhcmUgdHJpZ2dlcmVkIGZvciBldmVyeSBkYXRhIGNvbnRleHQgYXNzaWdubWVudHNcbiAgICAgICAgIyBldmVuIGlmIGRhdGEgaGFzIG5vdCByZWFsbHkgY2hhbmdlZC4gVGhpcyBpcyB3aHkgd3JhcCBpdCBpbnRvIGEgQ29tcHV0ZWRGaWVsZCB3aXRoIEVKU09OLmVxdWFscy5cbiAgICAgICAgIyBCZWNhdXNlIGl0IHVzZXMgRUpTT04uZXF1YWxzIGl0IHdpbGwgaW52YWxpZGF0ZSBvdXIgZnVuY3Rpb24gb25seSBpZiByZWFsbHkgY2hhbmdlcy5cbiAgICAgICAgIyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21ldGVvci9tZXRlb3IvaXNzdWVzLzQwNzNcbiAgICAgICAgcmVhY3RpdmVBcmd1bWVudHMgPSBuZXcgQ29tcHV0ZWRGaWVsZCAtPlxuICAgICAgICAgIGRhdGEgPSBjdXJyZW50V2l0aC5kYXRhVmFyLmdldCgpXG4gICAgICAgICAgYXNzZXJ0LmVxdWFsIGRhdGE/LmNvbnN0cnVjdG9yLCBhcmd1bWVudHNDb25zdHJ1Y3RvclxuICAgICAgICAgIGRhdGEuX2FyZ3VtZW50c1xuICAgICAgICAsXG4gICAgICAgICAgRUpTT04uZXF1YWxzXG5cbiAgICAgICAgIyBIZXJlIHdlIHJlZ2lzdGVyIGEgcmVhY3RpdmUgZGVwZW5kZW5jeSBvbiB0aGUgQ29tcHV0ZWRGaWVsZC5cbiAgICAgICAgbm9ucmVhY3RpdmVBcmd1bWVudHMgPSByZWFjdGl2ZUFyZ3VtZW50cygpXG5cbiAgICAgICAgVHJhY2tlci5ub25yZWFjdGl2ZSAtPlxuICAgICAgICAgICMgQXJndW1lbnRzIHdlcmUgcGFzc2VkIGluIGFzIGEgZGF0YSBjb250ZXh0LiBXZSB3YW50IGN1cnJlbnREYXRhIGluIHRoZSBjb25zdHJ1Y3RvciB0byByZXR1cm4gdGhlXG4gICAgICAgICAgIyBvcmlnaW5hbCAocGFyZW50KSBkYXRhIGNvbnRleHQuIExpa2Ugd2Ugd2VyZSBub3QgcGFzc2luZyBpbiBhcmd1bWVudHMgYXMgYSBkYXRhIGNvbnRleHQuXG4gICAgICAgICAgdGVtcGxhdGUgPSBCbGF6ZS5fd2l0aEN1cnJlbnRWaWV3IEJsYXplLmN1cnJlbnRWaWV3LnBhcmVudFZpZXcucGFyZW50VmlldywgPT5cbiAgICAgICAgICAgICMgU28gdGhhdCBjdXJyZW50Q29tcG9uZW50IGluIHRoZSBjb25zdHJ1Y3RvciBjYW4gcmV0dXJuIHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgICMgaW5zaWRlIHdoaWNoIHRoaXMgY29tcG9uZW50IGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxuICAgICAgICAgICAgcmV0dXJuIHdyYXBWaWV3QW5kVGVtcGxhdGUgQmxhemUuY3VycmVudFZpZXcsID0+XG4gICAgICAgICAgICAgICMgVXNlIGFyZ3VtZW50cyBmb3IgdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgY29tcG9uZW50Q2xhc3Mgbm9ucmVhY3RpdmVBcmd1bWVudHMuLi5cblxuICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LnJlbmRlckNvbXBvbmVudCBwYXJlbnRDb21wb25lbnRcblxuICAgICAgICAgICMgSXQgaGFzIHRvIGJlIHRoZSBmaXJzdCBjYWxsYmFjayBzbyB0aGF0IG90aGVyIGhhdmUgYSBjb3JyZWN0IGRhdGEgY29udGV4dC5cbiAgICAgICAgICByZWdpc3RlckZpcnN0Q3JlYXRlZEhvb2sgdGVtcGxhdGUsIC0+XG4gICAgICAgICAgICAjIEFyZ3VtZW50cyB3ZXJlIHBhc3NlZCBpbiBhcyBhIGRhdGEgY29udGV4dC4gUmVzdG9yZSBvcmlnaW5hbCAocGFyZW50KSBkYXRhXG4gICAgICAgICAgICAjIGNvbnRleHQuIFNhbWUgbG9naWMgYXMgaW4gQmxhemUuX0luT3V0ZXJUZW1wbGF0ZVNjb3BlLlxuICAgICAgICAgICAgQHZpZXcub3JpZ2luYWxQYXJlbnRWaWV3ID0gQHZpZXcucGFyZW50Vmlld1xuICAgICAgICAgICAgQHZpZXcucGFyZW50VmlldyA9IEB2aWV3LnBhcmVudFZpZXcucGFyZW50Vmlldy5wYXJlbnRWaWV3XG5cbiAgICAgICAgICB0ZW1wbGF0ZVxuXG4gIHJlbmRlckNvbXBvbmVudDogKHBhcmVudENvbXBvbmVudCkgLT5cbiAgICAjIFRvIG1ha2Ugc3VyZSB3ZSBkbyBub3QgaW50cm9kdWNlIGFueSByZWFjdGl2ZSBkZXBlbmRlbmN5LiBUaGlzIGlzIGEgY29uc2Npb3VzIGRlc2lnbiBkZWNpc2lvbi5cbiAgICAjIFJlYWN0aXZpdHkgc2hvdWxkIGJlIGNoYW5naW5nIGRhdGEgY29udGV4dCwgYnV0IGNvbXBvbmVudHMgc2hvdWxkIGJlIG1vcmUgc3RhYmxlLCBvbmx5IGNoYW5naW5nXG4gICAgIyB3aGVuIHN0cnVjdHVyZSBjaGFuZ2UgaW4gcmVuZGVyZWQgRE9NLiBZb3UgY2FuIGNoYW5nZSB0aGUgY29tcG9uZW50IHlvdSBhcmUgaW5jbHVkaW5nIChvciBwYXNzXG4gICAgIyBkaWZmZXJlbnQgYXJndW1lbnRzKSByZWFjdGl2ZWx5IHRob3VnaC5cbiAgICBUcmFja2VyLm5vbnJlYWN0aXZlID0+XG4gICAgICBjb21wb25lbnQgPSBAY29tcG9uZW50KClcblxuICAgICAgIyBJZiBtaXhpbnMgaGF2ZSBub3QgeWV0IGJlZW4gY3JlYXRlZC5cbiAgICAgIGNvbXBvbmVudC5jcmVhdGVNaXhpbnMoKVxuXG4gICAgICB0ZW1wbGF0ZUJhc2UgPSBnZXRUZW1wbGF0ZUJhc2UgY29tcG9uZW50XG5cbiAgICAgICMgQ3JlYXRlIGEgbmV3IGNvbXBvbmVudCB0ZW1wbGF0ZSBiYXNlZCBvbiB0aGUgQmxhemUgdGVtcGxhdGUuIFdlIHdhbnQgb3VyIG93biB0ZW1wbGF0ZVxuICAgICAgIyBiZWNhdXNlIHRoZSBzYW1lIEJsYXplIHRlbXBsYXRlIGNvdWxkIGJlIHJldXNlZCBiZXR3ZWVuIG11bHRpcGxlIGNvbXBvbmVudHMuXG4gICAgICAjIFRPRE86IFNob3VsZCB3ZSBjYWNoZSB0aGVzZSB0ZW1wbGF0ZXMgYmFzZWQgb24gKGNvbXBvbmVudE5hbWUsIHRlbXBsYXRlQmFzZSkgcGFpcj8gV2UgY291bGQgdXNlIHR3byBsZXZlbHMgb2YgRVMyMDE1IE1hcHMsIGNvbXBvbmVudE5hbWUgLT4gdGVtcGxhdGVCYXNlIC0+IHRlbXBsYXRlLiBXaGF0IGFib3V0IGNvbXBvbmVudCBhcmd1bWVudHMgY2hhbmdpbmc/XG4gICAgICB0ZW1wbGF0ZSA9IG5ldyBCbGF6ZS5UZW1wbGF0ZSBcIkJsYXplQ29tcG9uZW50LiN7Y29tcG9uZW50LmNvbXBvbmVudE5hbWUoKSBvciAndW5uYW1lZCd9XCIsIHRlbXBsYXRlQmFzZS5yZW5kZXJGdW5jdGlvblxuXG4gICAgICAjIFdlIGxvb2t1cCBwcmVleGlzdGluZyB0ZW1wbGF0ZSBoZWxwZXJzIGluIEJsYXplLl9nZXRUZW1wbGF0ZUhlbHBlciwgaWYgdGhlIGNvbXBvbmVudCBkb2VzIG5vdCBoYXZlXG4gICAgICAjIGEgcHJvcGVydHkgd2l0aCB0aGUgc2FtZSBuYW1lLiBQcmVleGlzdGluZyBldmVudCBoYW5kbGVycyBhbmQgbGlmZS1jeWNsZSBob29rcyBhcmUgdGFrZW4gY2FyZSBvZlxuICAgICAgIyBpbiB0aGUgcmVsYXRlZCBtZXRob2RzIGluIHRoZSBiYXNlIGNsYXNzLlxuXG4gICAgICBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscyA/PSB7fVxuICAgICAgY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMudGVtcGxhdGVCYXNlID0gdGVtcGxhdGVCYXNlXG5cbiAgICAgIHJlZ2lzdGVySG9va3MgdGVtcGxhdGUsXG4gICAgICAgIG9uQ3JlYXRlZDogLT5cbiAgICAgICAgICAjIEAgaXMgYSB0ZW1wbGF0ZSBpbnN0YW5jZS5cblxuICAgICAgICAgIGlmIHBhcmVudENvbXBvbmVudFxuICAgICAgICAgICAgIyBjb21wb25lbnQucGFyZW50Q29tcG9uZW50IGlzIHJlYWN0aXZlLCBzbyB3ZSB1c2UgVHJhY2tlci5ub25yZWFjdGl2ZSBqdXN0IHRvIG1ha2Ugc3VyZSB3ZSBkbyBub3QgbGVhayBhbnkgcmVhY3Rpdml0eSBoZXJlLlxuICAgICAgICAgICAgVHJhY2tlci5ub25yZWFjdGl2ZSA9PlxuICAgICAgICAgICAgICAjIFRPRE86IFNob3VsZCB3ZSBzdXBwb3J0IHRoYXQgdGhlIHNhbWUgY29tcG9uZW50IGNhbiBiZSByZW5kZXJlZCBtdWx0aXBsZSB0aW1lcyBpbiBwYXJhbGxlbD8gSG93IGNvdWxkIHdlIGRvIHRoYXQ/IEZvciBkaWZmZXJlbnQgY29tcG9uZW50IHBhcmVudHMgb3Igb25seSB0aGUgc2FtZSBvbmU/XG4gICAgICAgICAgICAgIGFzc2VydCBub3QgY29tcG9uZW50LnBhcmVudENvbXBvbmVudCgpLCBcIkNvbXBvbmVudCAnI3tjb21wb25lbnQuY29tcG9uZW50TmFtZSgpIG9yICd1bm5hbWVkJ30nIHBhcmVudCBjb21wb25lbnQgJyN7Y29tcG9uZW50LnBhcmVudENvbXBvbmVudCgpPy5jb21wb25lbnROYW1lKCkgb3IgJ3VubmFtZWQnfScgYWxyZWFkeSBzZXQuXCJcblxuICAgICAgICAgICAgICAjIFdlIHNldCB0aGUgcGFyZW50IG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNyZWF0ZWQsIG5vdCBqdXN0IGNvbnN0cnVjdGVkLlxuICAgICAgICAgICAgICBjb21wb25lbnQucGFyZW50Q29tcG9uZW50IHBhcmVudENvbXBvbmVudFxuICAgICAgICAgICAgICBwYXJlbnRDb21wb25lbnQuYWRkQ2hpbGRDb21wb25lbnQgY29tcG9uZW50XG5cbiAgICAgICAgICBAdmlldy5fb25WaWV3UmVuZGVyZWQgPT5cbiAgICAgICAgICAgICMgQXR0YWNoIGV2ZW50cyB0aGUgZmlyc3QgdGltZSB0ZW1wbGF0ZSBpbnN0YW5jZSByZW5kZXJzLlxuICAgICAgICAgICAgcmV0dXJuIHVubGVzcyBAdmlldy5yZW5kZXJDb3VudCBpcyAxXG5cbiAgICAgICAgICAgICMgV2UgZmlyc3QgYWRkIGV2ZW50IGhhbmRsZXJzIGZyb20gdGhlIGNvbXBvbmVudCwgdGhlbiBtaXhpbnMuXG4gICAgICAgICAgICBjb21wb25lbnRPck1peGluID0gbnVsbFxuICAgICAgICAgICAgd2hpbGUgY29tcG9uZW50T3JNaXhpbiA9IEBjb21wb25lbnQuZ2V0Rmlyc3RXaXRoIGNvbXBvbmVudE9yTWl4aW4sICdldmVudHMnXG4gICAgICAgICAgICAgIGFkZEV2ZW50cyBAdmlldywgY29tcG9uZW50T3JNaXhpblxuXG4gICAgICAgICAgQGNvbXBvbmVudCA9IGNvbXBvbmVudFxuXG4gICAgICAgICAgIyBUT0RPOiBTaG91bGQgd2Ugc3VwcG9ydCB0aGF0IHRoZSBzYW1lIGNvbXBvbmVudCBjYW4gYmUgcmVuZGVyZWQgbXVsdGlwbGUgdGltZXMgaW4gcGFyYWxsZWw/IEhvdyBjb3VsZCB3ZSBkbyB0aGF0PyBGb3IgZGlmZmVyZW50IGNvbXBvbmVudCBwYXJlbnRzIG9yIG9ubHkgdGhlIHNhbWUgb25lP1xuICAgICAgICAgIGFzc2VydCBub3QgVHJhY2tlci5ub25yZWFjdGl2ZSA9PiBAY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMudGVtcGxhdGVJbnN0YW5jZT8oKVxuXG4gICAgICAgICAgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLnRlbXBsYXRlSW5zdGFuY2UgPz0gbmV3IFJlYWN0aXZlRmllbGQgQCwgKGEsIGIpIC0+IGEgaXMgYlxuICAgICAgICAgIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy50ZW1wbGF0ZUluc3RhbmNlIEBcblxuICAgICAgICAgIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc0NyZWF0ZWQgPz0gbmV3IFJlYWN0aXZlRmllbGQgdHJ1ZVxuICAgICAgICAgIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc0NyZWF0ZWQgdHJ1ZVxuXG4gICAgICAgICAgIyBNYXliZSB3ZSBhcmUgcmUtcmVuZGVyaW5nIHRoZSBjb21wb25lbnQuIFNvIGxldCdzIGluaXRpYWxpemUgdmFyaWFibGVzIGp1c3QgdG8gYmUgc3VyZS5cblxuICAgICAgICAgIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc1JlbmRlcmVkID89IG5ldyBSZWFjdGl2ZUZpZWxkIGZhbHNlXG4gICAgICAgICAgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmlzUmVuZGVyZWQgZmFsc2VcblxuICAgICAgICAgIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc0Rlc3Ryb3llZCA/PSBuZXcgUmVhY3RpdmVGaWVsZCBmYWxzZVxuICAgICAgICAgIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc0Rlc3Ryb3llZCBmYWxzZVxuXG4gICAgICAgICAgdHJ5XG4gICAgICAgICAgICAjIFdlIGhhdmUgdG8ga25vdyBpZiB3ZSBzaG91bGQgY2FsbCBvbkNyZWF0ZWQgb24gdGhlIG1peGluIGluc2lkZSB0aGUgcmVxdWlyZU1peGluIG9yIG5vdC4gV2Ugd2FudCB0byBjYWxsXG4gICAgICAgICAgICAjIGl0IG9ubHkgb25jZS4gSWYgaXQgcmVxdWlyZU1peGluIGlzIGNhbGxlZCBmcm9tIG9uQ3JlYXRlZCBvZiBhbm90aGVyIG1peGluLCB0aGVuIGl0IHdpbGwgYmUgYWRkZWQgYXQgdGhlXG4gICAgICAgICAgICAjIGVuZCBhbmQgd2Ugd2lsbCBnZXQgaXQgaGVyZSBhdCB0aGUgZW5kLiBTbyB3ZSBzaG91bGQgbm90IGNhbGwgb25DcmVhdGVkIGluc2lkZSByZXF1aXJlTWl4aW4gYmVjYXVzZSB0aGVuXG4gICAgICAgICAgICAjIG9uQ3JlYXRlZCB3b3VsZCBiZSBjYWxsZWQgdHdpY2UuXG4gICAgICAgICAgICBAY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMuaW5PbkNyZWF0ZWQgPSB0cnVlXG4gICAgICAgICAgICBjb21wb25lbnRPck1peGluID0gbnVsbFxuICAgICAgICAgICAgd2hpbGUgY29tcG9uZW50T3JNaXhpbiA9IEBjb21wb25lbnQuZ2V0Rmlyc3RXaXRoIGNvbXBvbmVudE9yTWl4aW4sICdvbkNyZWF0ZWQnXG4gICAgICAgICAgICAgIGNvbXBvbmVudE9yTWl4aW4ub25DcmVhdGVkKClcbiAgICAgICAgICBmaW5hbGx5XG4gICAgICAgICAgICBkZWxldGUgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmluT25DcmVhdGVkXG5cbiAgICAgICAgb25SZW5kZXJlZDogLT5cbiAgICAgICAgICAjIEAgaXMgYSB0ZW1wbGF0ZSBpbnN0YW5jZS5cblxuICAgICAgICAgIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc1JlbmRlcmVkID89IG5ldyBSZWFjdGl2ZUZpZWxkIHRydWVcbiAgICAgICAgICBAY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMuaXNSZW5kZXJlZCB0cnVlXG5cbiAgICAgICAgICBUcmFja2VyLm5vbnJlYWN0aXZlID0+XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmlzQ3JlYXRlZCgpLCB0cnVlXG5cbiAgICAgICAgICB0cnlcbiAgICAgICAgICAgICMgU2FtZSBhcyBmb3Igb25DcmVhdGVkIGFib3ZlLlxuICAgICAgICAgICAgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmluT25SZW5kZXJlZCA9IHRydWVcbiAgICAgICAgICAgIGNvbXBvbmVudE9yTWl4aW4gPSBudWxsXG4gICAgICAgICAgICB3aGlsZSBjb21wb25lbnRPck1peGluID0gQGNvbXBvbmVudC5nZXRGaXJzdFdpdGggY29tcG9uZW50T3JNaXhpbiwgJ29uUmVuZGVyZWQnXG4gICAgICAgICAgICAgIGNvbXBvbmVudE9yTWl4aW4ub25SZW5kZXJlZCgpXG4gICAgICAgICAgZmluYWxseVxuICAgICAgICAgICAgZGVsZXRlIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pbk9uUmVuZGVyZWRcblxuICAgICAgICBvbkRlc3Ryb3llZDogLT5cbiAgICAgICAgICBAYXV0b3J1biAoY29tcHV0YXRpb24pID0+XG4gICAgICAgICAgICAjIEAgaXMgYSB0ZW1wbGF0ZSBpbnN0YW5jZS5cblxuICAgICAgICAgICAgIyBXZSB3YWl0IGZvciBhbGwgY2hpbGRyZW4gY29tcG9uZW50cyB0byBiZSBkZXN0cm95ZWQgZmlyc3QuXG4gICAgICAgICAgICAjIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWV0ZW9yL21ldGVvci9pc3N1ZXMvNDE2NlxuICAgICAgICAgICAgcmV0dXJuIGlmIEBjb21wb25lbnQuY2hpbGRDb21wb25lbnRzKCkubGVuZ3RoXG4gICAgICAgICAgICBjb21wdXRhdGlvbi5zdG9wKClcblxuICAgICAgICAgICAgVHJhY2tlci5ub25yZWFjdGl2ZSA9PlxuICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmlzQ3JlYXRlZCgpLCB0cnVlXG5cbiAgICAgICAgICAgICAgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmlzQ3JlYXRlZCBmYWxzZVxuXG4gICAgICAgICAgICAgIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc1JlbmRlcmVkID89IG5ldyBSZWFjdGl2ZUZpZWxkIGZhbHNlXG4gICAgICAgICAgICAgIEBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc1JlbmRlcmVkIGZhbHNlXG5cbiAgICAgICAgICAgICAgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmlzRGVzdHJveWVkID89IG5ldyBSZWFjdGl2ZUZpZWxkIHRydWVcbiAgICAgICAgICAgICAgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmlzRGVzdHJveWVkIHRydWVcblxuICAgICAgICAgICAgICBjb21wb25lbnRPck1peGluID0gbnVsbFxuICAgICAgICAgICAgICB3aGlsZSBjb21wb25lbnRPck1peGluID0gQGNvbXBvbmVudC5nZXRGaXJzdFdpdGggY29tcG9uZW50T3JNaXhpbiwgJ29uRGVzdHJveWVkJ1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudE9yTWl4aW4ub25EZXN0cm95ZWQoKVxuXG4gICAgICAgICAgICAgIGlmIHBhcmVudENvbXBvbmVudFxuICAgICAgICAgICAgICAgICMgVGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQsIGNsZWFyIHVwIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBhcmVudENvbXBvbmVudCBudWxsXG4gICAgICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LnJlbW92ZUNoaWxkQ29tcG9uZW50IGNvbXBvbmVudFxuXG4gICAgICAgICAgICAgICMgUmVtb3ZlIHRoZSByZWZlcmVuY2Ugc28gdGhhdCBpdCBpcyBjbGVhciB0aGF0IHRlbXBsYXRlIGluc3RhbmNlIGlzIG5vdCBhdmFpbGFibGUgYW55bW9yZS5cbiAgICAgICAgICAgICAgQGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLnRlbXBsYXRlSW5zdGFuY2UgbnVsbFxuXG4gICAgICB0ZW1wbGF0ZVxuXG4gIHJlbW92ZUNvbXBvbmVudDogLT5cbiAgICBCbGF6ZS5yZW1vdmUgQGNvbXBvbmVudCgpLl9jb21wb25lbnRJbnRlcm5hbHMudGVtcGxhdGVJbnN0YW5jZSgpLnZpZXcgaWYgQGlzUmVuZGVyZWQoKVxuXG4gIEBfcmVuZGVyQ29tcG9uZW50VG86ICh2aXNpdG9yLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFZpZXcsIGRhdGEpIC0+XG4gICAgY29tcG9uZW50ID0gVHJhY2tlci5ub25yZWFjdGl2ZSA9PlxuICAgICAgY29tcG9uZW50Q2xhc3MgPSBAXG5cbiAgICAgIHBhcmVudFZpZXcgPSBwYXJlbnRWaWV3IG9yIGN1cnJlbnRWaWV3SWZSZW5kZXJpbmcoKSBvciAocGFyZW50Q29tcG9uZW50Py5pc1JlbmRlcmVkKCkgYW5kIHBhcmVudENvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLnRlbXBsYXRlSW5zdGFuY2UoKS52aWV3KSBvciBudWxsXG5cbiAgICAgIHdyYXBWaWV3QW5kVGVtcGxhdGUgcGFyZW50VmlldywgPT5cbiAgICAgICAgbmV3IGNvbXBvbmVudENsYXNzKClcblxuICAgIGlmIGFyZ3VtZW50cy5sZW5ndGggPiAyXG4gICAgICBjb21wb25lbnQuX3JlbmRlckNvbXBvbmVudFRvIHZpc2l0b3IsIHBhcmVudENvbXBvbmVudCwgcGFyZW50VmlldywgZGF0YVxuICAgIGVsc2VcbiAgICAgIGNvbXBvbmVudC5fcmVuZGVyQ29tcG9uZW50VG8gdmlzaXRvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRWaWV3XG5cbiAgQHJlbmRlckNvbXBvbmVudFRvSFRNTDogKHBhcmVudENvbXBvbmVudCwgcGFyZW50VmlldywgZGF0YSkgLT5cbiAgICBpZiBhcmd1bWVudHMubGVuZ3RoID4gMlxuICAgICAgQF9yZW5kZXJDb21wb25lbnRUbyBuZXcgSFRNTC5Ub0hUTUxWaXNpdG9yKCksIHBhcmVudENvbXBvbmVudCwgcGFyZW50VmlldywgZGF0YVxuICAgIGVsc2VcbiAgICAgIEBfcmVuZGVyQ29tcG9uZW50VG8gbmV3IEhUTUwuVG9IVE1MVmlzaXRvcigpLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFZpZXdcblxuICBfcmVuZGVyQ29tcG9uZW50VG86ICh2aXNpdG9yLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFZpZXcsIGRhdGEpIC0+XG4gICAgdGVtcGxhdGUgPSBUcmFja2VyLm5vbnJlYWN0aXZlID0+XG4gICAgICBwYXJlbnRWaWV3ID0gcGFyZW50VmlldyBvciBjdXJyZW50Vmlld0lmUmVuZGVyaW5nKCkgb3IgKHBhcmVudENvbXBvbmVudD8uaXNSZW5kZXJlZCgpIGFuZCBwYXJlbnRDb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy50ZW1wbGF0ZUluc3RhbmNlKCkudmlldykgb3IgbnVsbFxuXG4gICAgICB3cmFwVmlld0FuZFRlbXBsYXRlIHBhcmVudFZpZXcsID0+XG4gICAgICAgIEBjb21wb25lbnQoKS5yZW5kZXJDb21wb25lbnQgcGFyZW50Q29tcG9uZW50XG5cbiAgICBpZiBhcmd1bWVudHMubGVuZ3RoID4gMlxuICAgICAgZXhwYW5kZWRWaWV3ID0gZXhwYW5kVmlldyBCbGF6ZS5fVGVtcGxhdGVXaXRoKGRhdGEsIGNvbnRlbnRBc0Z1bmMgdGVtcGxhdGUpLCBwYXJlbnRWaWV3XG4gICAgZWxzZVxuICAgICAgZXhwYW5kZWRWaWV3ID0gZXhwYW5kVmlldyBjb250ZW50QXNWaWV3KHRlbXBsYXRlKSwgcGFyZW50Vmlld1xuXG4gICAgdmlzaXRvci52aXNpdCBleHBhbmRlZFZpZXdcblxuICByZW5kZXJDb21wb25lbnRUb0hUTUw6IChwYXJlbnRDb21wb25lbnQsIHBhcmVudFZpZXcsIGRhdGEpIC0+XG4gICAgaWYgYXJndW1lbnRzLmxlbmd0aCA+IDJcbiAgICAgIEBfcmVuZGVyQ29tcG9uZW50VG8gbmV3IEhUTUwuVG9IVE1MVmlzaXRvcigpLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFZpZXcsIGRhdGFcbiAgICBlbHNlXG4gICAgICBAX3JlbmRlckNvbXBvbmVudFRvIG5ldyBIVE1MLlRvSFRNTFZpc2l0b3IoKSwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRWaWV3XG5cbiAgdGVtcGxhdGU6IC0+XG4gICAgQGNhbGxGaXJzdFdpdGgoQCwgJ3RlbXBsYXRlJykgb3IgQGNvbnN0cnVjdG9yLmNvbXBvbmVudE5hbWUoKVxuXG4gIG9uQ3JlYXRlZDogLT5cbiAgICBjYWxsVGVtcGxhdGVCYXNlSG9va3MgQCwgJ2NyZWF0ZWQnXG5cbiAgb25SZW5kZXJlZDogLT5cbiAgICBjYWxsVGVtcGxhdGVCYXNlSG9va3MgQCwgJ3JlbmRlcmVkJ1xuXG4gIG9uRGVzdHJveWVkOiAtPlxuICAgIGNhbGxUZW1wbGF0ZUJhc2VIb29rcyBALCAnZGVzdHJveWVkJ1xuXG4gIGlzQ3JlYXRlZDogLT5cbiAgICBjb21wb25lbnQgPSBAY29tcG9uZW50KClcblxuICAgIGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzID89IHt9XG4gICAgY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMuaXNDcmVhdGVkID89IG5ldyBSZWFjdGl2ZUZpZWxkIGZhbHNlXG5cbiAgICBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc0NyZWF0ZWQoKVxuXG4gIGlzUmVuZGVyZWQ6IC0+XG4gICAgY29tcG9uZW50ID0gQGNvbXBvbmVudCgpXG5cbiAgICBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscyA/PSB7fVxuICAgIGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmlzUmVuZGVyZWQgPz0gbmV3IFJlYWN0aXZlRmllbGQgZmFsc2VcblxuICAgIGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLmlzUmVuZGVyZWQoKVxuXG4gIGlzRGVzdHJveWVkOiAtPlxuICAgIGNvbXBvbmVudCA9IEBjb21wb25lbnQoKVxuXG4gICAgY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMgPz0ge31cbiAgICBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscy5pc0Rlc3Ryb3llZCA/PSBuZXcgUmVhY3RpdmVGaWVsZCBmYWxzZVxuXG4gICAgY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMuaXNEZXN0cm95ZWQoKVxuXG4gIGluc2VydERPTUVsZW1lbnQ6IChwYXJlbnQsIG5vZGUsIGJlZm9yZSkgLT5cbiAgICBiZWZvcmUgPz0gbnVsbFxuICAgIGlmIHBhcmVudCBhbmQgbm9kZSBhbmQgKG5vZGUucGFyZW50Tm9kZSBpc250IHBhcmVudCBvciBub2RlLm5leHRTaWJsaW5nIGlzbnQgYmVmb3JlKVxuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZSBub2RlLCBiZWZvcmVcblxuICAgIHJldHVyblxuXG4gIG1vdmVET01FbGVtZW50OiAocGFyZW50LCBub2RlLCBiZWZvcmUpIC0+XG4gICAgYmVmb3JlID89IG51bGxcbiAgICBpZiBwYXJlbnQgYW5kIG5vZGUgYW5kIChub2RlLnBhcmVudE5vZGUgaXNudCBwYXJlbnQgb3Igbm9kZS5uZXh0U2libGluZyBpc250IGJlZm9yZSlcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUgbm9kZSwgYmVmb3JlXG5cbiAgICByZXR1cm5cblxuICByZW1vdmVET01FbGVtZW50OiAocGFyZW50LCBub2RlKSAtPlxuICAgIGlmIHBhcmVudCBhbmQgbm9kZSBhbmQgbm9kZS5wYXJlbnROb2RlIGlzIHBhcmVudFxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkIG5vZGVcblxuICAgIHJldHVyblxuXG4gIGV2ZW50czogLT5cbiAgICAjIEluIG1peGlucyB0aGVyZSBpcyBubyByZWFzb24gZm9yIGEgdGVtcGxhdGUgaW5zdGFuY2UgdG8gZXh0ZW5kIGEgQmxhemUgdGVtcGxhdGUuXG4gICAgcmV0dXJuIFtdIHVubGVzcyBAIGlzIEBjb21wb25lbnQoKVxuXG4gICAgQF9jb21wb25lbnRJbnRlcm5hbHMgPz0ge31cblxuICAgIHZpZXcgPSBUcmFja2VyLm5vbnJlYWN0aXZlID0+XG4gICAgICBAX2NvbXBvbmVudEludGVybmFscy50ZW1wbGF0ZUluc3RhbmNlKCkudmlld1xuICAgICMgV2Ugc2tpcCBibG9jayBoZWxwZXJzIHRvIG1hdGNoIEJsYXplIGJlaGF2aW9yLlxuICAgIHRlbXBsYXRlSW5zdGFuY2UgPSBnZXRUZW1wbGF0ZUluc3RhbmNlRnVuY3Rpb24gdmlldywgdHJ1ZVxuXG4gICAgZm9yIGV2ZW50cyBpbiBAX2NvbXBvbmVudEludGVybmFscy50ZW1wbGF0ZUJhc2UuX19ldmVudE1hcHNcbiAgICAgIGV2ZW50TWFwID0ge31cblxuICAgICAgZm9yIHNwZWMsIGhhbmRsZXIgb2YgZXZlbnRzXG4gICAgICAgIGRvIChzcGVjLCBoYW5kbGVyKSAtPlxuICAgICAgICAgIGV2ZW50TWFwW3NwZWNdID0gKGFyZ3MuLi4pIC0+XG4gICAgICAgICAgICAjIEluIHRlbXBsYXRlIGV2ZW50IGhhbmRsZXJzIHZpZXcgYW5kIHRlbXBsYXRlIGluc3RhbmNlIGFyZSBub3QgYmFzZWQgb24gdGhlIGN1cnJlbnQgdGFyZ2V0XG4gICAgICAgICAgICAjIChsaWtlIEJsYXplIENvbXBvbmVudHMgZXZlbnQgaGFuZGxlcnMgYXJlKSBidXQgaXQgaXMgYmFzZWQgb24gdGhlIHRlbXBsYXRlLWxldmVsIHZpZXcuXG4gICAgICAgICAgICAjIEluIGEgd2F5IHdlIGFyZSByZXZlcnRpbmcgaGVyZSB3aGF0IGFkZEV2ZW50cyBkb2VzLlxuICAgICAgICAgICAgd2l0aFRlbXBsYXRlSW5zdGFuY2VGdW5jIHRlbXBsYXRlSW5zdGFuY2UsIC0+XG4gICAgICAgICAgICAgIEJsYXplLl93aXRoQ3VycmVudFZpZXcgdmlldywgLT5cbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFwcGx5IHZpZXcsIGFyZ3NcblxuICAgICAgZXZlbnRNYXBcblxuICAjIENvbXBvbmVudC1sZXZlbCBkYXRhIGNvbnRleHQuIFJlYWN0aXZlLiBVc2UgdGhpcyB0byBhbHdheXMgZ2V0IHRoZVxuICAjIHRvcC1sZXZlbCBkYXRhIGNvbnRleHQgdXNlZCB0byByZW5kZXIgdGhlIGNvbXBvbmVudC4gSWYgcGF0aCBpc1xuICAjIHByb3ZpZGVkLCBpdCByZXR1cm5zIG9ubHkgdGhlIHZhbHVlIHVuZGVyIHRoYXQgcGF0aCwgd2l0aCByZWFjdGl2aXR5XG4gICMgbGltaXRlZCB0byBjaGFuZ2VzIG9mIHRoYXQgdmFsdWUgb25seS5cbiAgZGF0YTogKHBhdGgsIGVxdWFsc0Z1bmMpIC0+XG4gICAgY29tcG9uZW50ID0gQGNvbXBvbmVudCgpXG5cbiAgICBjb21wb25lbnQuX2NvbXBvbmVudEludGVybmFscyA/PSB7fVxuICAgIGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLnRlbXBsYXRlSW5zdGFuY2UgPz0gbmV3IFJlYWN0aXZlRmllbGQgbnVsbCwgKGEsIGIpIC0+IGEgaXMgYlxuXG4gICAgaWYgdmlldyA9IGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLnRlbXBsYXRlSW5zdGFuY2UoKT8udmlld1xuICAgICAgaWYgcGF0aD9cbiAgICAgICAgIyBEYXRhTG9va3VwIHVzZXMgaW50ZXJuYWxseSBjb21wdXRlZCBmaWVsZCwgd2hpY2ggdXNlcyB2aWV3J3MgYXV0b3J1biwgYnV0XG4gICAgICAgICMgZGF0YSBtaWdodCBiZSB1c2VkIGluc2lkZSByZW5kZXIoKSBtZXRob2QsIHdoZXJlIGl0IGlzIGZvcmJpZGRlbiB0byB1c2VcbiAgICAgICAgIyB2aWV3J3MgYXV0b3J1bi4gU28gd2UgdGVtcG9yYXJ5IGhpZGUgdGhlIGZhY3QgdGhhdCB3ZSBhcmUgaW5zaWRlIGEgdmlld1xuICAgICAgICAjIHRvIG1ha2UgY29tcHV0ZWQgZmllbGQgdXNlIG5vcm1hbCBhdXRvcnVuLlxuICAgICAgICByZXR1cm4gQmxhemUuX3dpdGhDdXJyZW50VmlldyBudWxsLCA9PlxuICAgICAgICAgIERhdGFMb29rdXAuZ2V0ID0+XG4gICAgICAgICAgICBCbGF6ZS5nZXREYXRhIHZpZXdcbiAgICAgICAgICAsXG4gICAgICAgICAgICBwYXRoLCBlcXVhbHNGdW5jXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBCbGF6ZS5nZXREYXRhIHZpZXdcblxuICAgIHVuZGVmaW5lZFxuXG4gICMgQ2FsbGVyLWxldmVsIGRhdGEgY29udGV4dC4gUmVhY3RpdmUuIFVzZSB0aGlzIHRvIGdldCBpbiBldmVudCBoYW5kbGVycyB0aGUgZGF0YVxuICAjIGNvbnRleHQgYXQgdGhlIHBsYWNlIHdoZXJlIGV2ZW50IG9yaWdpbmF0ZWQgKHRhcmdldCBjb250ZXh0KS4gSW4gdGVtcGxhdGUgaGVscGVyc1xuICAjIHRoZSBkYXRhIGNvbnRleHQgd2hlcmUgdGVtcGxhdGUgaGVscGVycyB3ZXJlIGNhbGxlZC4gSW4gb25DcmVhdGVkLCBvblJlbmRlcmVkLFxuICAjIGFuZCBvbkRlc3Ryb3llZCwgdGhlIHNhbWUgYXMgQGRhdGEoKS4gSW5zaWRlIGEgdGVtcGxhdGUgdGhpcyBpcyB0aGUgc2FtZSBhcyB0aGlzLlxuICAjIElmIHBhdGggaXMgcHJvdmlkZWQsIGl0IHJldHVybnMgb25seSB0aGUgdmFsdWUgdW5kZXIgdGhhdCBwYXRoLCB3aXRoIHJlYWN0aXZpdHlcbiAgIyBsaW1pdGVkIHRvIGNoYW5nZXMgb2YgdGhhdCB2YWx1ZSBvbmx5LiBNb3Jlb3ZlciwgaWYgcGF0aCBpcyBwcm92aWRlZCBpcyBhbHNvXG4gICMgbG9va3MgaW50byB0aGUgY3VycmVudCBsZXhpY2FsIHNjb3BlIGRhdGEuXG4gIEBjdXJyZW50RGF0YTogKHBhdGgsIGVxdWFsc0Z1bmMpIC0+XG4gICAgcmV0dXJuIHVuZGVmaW5lZCB1bmxlc3MgQmxhemUuY3VycmVudFZpZXdcblxuICAgIGN1cnJlbnRWaWV3ID0gQmxhemUuY3VycmVudFZpZXdcblxuICAgIGlmIF8uaXNTdHJpbmcgcGF0aFxuICAgICAgcGF0aCA9IHBhdGguc3BsaXQgJy4nXG4gICAgZWxzZSBpZiBub3QgXy5pc0FycmF5IHBhdGhcbiAgICAgIHJldHVybiBCbGF6ZS5nZXREYXRhIGN1cnJlbnRWaWV3XG5cbiAgICAjIERhdGFMb29rdXAgdXNlcyBpbnRlcm5hbGx5IGNvbXB1dGVkIGZpZWxkLCB3aGljaCB1c2VzIHZpZXcncyBhdXRvcnVuLCBidXRcbiAgICAjIGN1cnJlbnREYXRhIG1pZ2h0IGJlIHVzZWQgaW5zaWRlIHJlbmRlcigpIG1ldGhvZCwgd2hlcmUgaXQgaXMgZm9yYmlkZGVuIHRvIHVzZVxuICAgICMgdmlldydzIGF1dG9ydW4uIFNvIHdlIHRlbXBvcmFyeSBoaWRlIHRoZSBmYWN0IHRoYXQgd2UgYXJlIGluc2lkZSBhIHZpZXdcbiAgICAjIHRvIG1ha2UgY29tcHV0ZWQgZmllbGQgdXNlIG5vcm1hbCBhdXRvcnVuLlxuICAgIEJsYXplLl93aXRoQ3VycmVudFZpZXcgbnVsbCwgPT5cbiAgICAgIERhdGFMb29rdXAuZ2V0ID0+XG4gICAgICAgIGlmIEJsYXplLl9sZXhpY2FsQmluZGluZ0xvb2t1cCBhbmQgbGV4aWNhbERhdGEgPSBCbGF6ZS5fbGV4aWNhbEJpbmRpbmdMb29rdXAgY3VycmVudFZpZXcsIHBhdGhbMF1cbiAgICAgICAgICAjIFdlIHJldHVybiBjdXN0b20gZGF0YSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gcmV1c2UgdGhlIHNhbWVcbiAgICAgICAgICAjIGxvb2t1cCBsb2dpYyBmb3IgYm90aCBsZXhpY2FsIGFuZCB0aGUgbm9ybWFsIGRhdGEgY29udGV4dCBjYXNlLlxuICAgICAgICAgIHJlc3VsdCA9IHt9XG4gICAgICAgICAgcmVzdWx0W3BhdGhbMF1dID0gbGV4aWNhbERhdGFcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG5cbiAgICAgICAgQmxhemUuZ2V0RGF0YSBjdXJyZW50Vmlld1xuICAgICAgLFxuICAgICAgICBwYXRoLCBlcXVhbHNGdW5jXG5cbiAgIyBNZXRob2Qgc2hvdWxkIG5ldmVyIGJlIG92ZXJyaWRkZW4uIFRoZSBpbXBsZW1lbnRhdGlvbiBzaG91bGQgYWx3YXlzIGJlIGV4YWN0bHkgdGhlIHNhbWUgYXMgY2xhc3MgbWV0aG9kIGltcGxlbWVudGF0aW9uLlxuICBjdXJyZW50RGF0YTogKHBhdGgsIGVxdWFsc0Z1bmMpIC0+XG4gICAgQGNvbnN0cnVjdG9yLmN1cnJlbnREYXRhIHBhdGgsIGVxdWFsc0Z1bmNcblxuICAjIFVzZWZ1bCBpbiB0ZW1wbGF0ZXMgb3IgbWl4aW5zIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50LlxuICBjb21wb25lbnQ6IC0+XG4gICAgY29tcG9uZW50ID0gQFxuXG4gICAgbG9vcFxuICAgICAgIyBJZiB3ZSBhcmUgb24gYSBtaXhpbiB3aXRob3V0IG1peGluUGFyZW50LCB3ZSBjYW5ub3QgcmVhbGx5IGdldCB0byB0aGUgY29tcG9uZW50LCByZXR1cm4gbnVsbC5cbiAgICAgIHJldHVybiBudWxsIHVubGVzcyBjb21wb25lbnQubWl4aW5QYXJlbnRcblxuICAgICAgIyBSZXR1cm4gY3VycmVudCBjb21wb25lbnQgdW5sZXNzIHRoZXJlIGlzIGEgbWl4aW4gcGFyZW50LlxuICAgICAgcmV0dXJuIGNvbXBvbmVudCB1bmxlc3MgbWl4aW5QYXJlbnQgPSBjb21wb25lbnQubWl4aW5QYXJlbnQoKVxuICAgICAgY29tcG9uZW50ID0gbWl4aW5QYXJlbnRcblxuICAjIENhbGxlci1sZXZlbCBjb21wb25lbnQuIEluIG1vc3QgY2FzZXMgdGhlIHNhbWUgYXMgQCwgYnV0IGluIGV2ZW50IGhhbmRsZXJzXG4gICMgaXQgcmV0dXJucyB0aGUgY29tcG9uZW50IGF0IHRoZSBwbGFjZSB3aGVyZSBldmVudCBvcmlnaW5hdGVkICh0YXJnZXQgY29tcG9uZW50KS5cbiAgIyBJbnNpZGUgdGVtcGxhdGUgY29udGVudCB3cmFwcGVkIHdpdGggYSBibG9jayBoZWxwZXIgY29tcG9uZW50LCBpdCBpcyB0aGUgY2xvc2VzdFxuICAjIGJsb2NrIGhlbHBlciBjb21wb25lbnQuXG4gIEBjdXJyZW50Q29tcG9uZW50OiAtPlxuICAgICMgV2UgYXJlIG5vdCBza2lwcGluZyBibG9jayBoZWxwZXJzIGJlY2F1c2Ugb25lIG9mIG1haW4gcmVhc29ucyBmb3IgQGN1cnJlbnRDb21wb25lbnQoKVxuICAgICMgaXMgdGhhdCB3ZSBjYW4gZ2V0IGhvbGQgb2YgdGhlIGJsb2NrIGhlbHBlciBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAgdGVtcGxhdGVJbnN0YW5jZSA9IGdldFRlbXBsYXRlSW5zdGFuY2VGdW5jdGlvbiBCbGF6ZS5jdXJyZW50VmlldywgZmFsc2VcbiAgICB0ZW1wbGF0ZUluc3RhbmNlVG9Db21wb25lbnQgdGVtcGxhdGVJbnN0YW5jZSwgZmFsc2VcblxuICAjIE1ldGhvZCBzaG91bGQgbmV2ZXIgYmUgb3ZlcnJpZGRlbi4gVGhlIGltcGxlbWVudGF0aW9uIHNob3VsZCBhbHdheXMgYmUgZXhhY3RseSB0aGUgc2FtZSBhcyBjbGFzcyBtZXRob2QgaW1wbGVtZW50YXRpb24uXG4gIGN1cnJlbnRDb21wb25lbnQ6IC0+XG4gICAgQGNvbnN0cnVjdG9yLmN1cnJlbnRDb21wb25lbnQoKVxuXG4gIGZpcnN0Tm9kZTogLT5cbiAgICByZXR1cm4gQGNvbXBvbmVudCgpLl9jb21wb25lbnRJbnRlcm5hbHMudGVtcGxhdGVJbnN0YW5jZSgpLnZpZXcuX2RvbXJhbmdlLmZpcnN0Tm9kZSgpIGlmIEBpc1JlbmRlcmVkKClcblxuICAgIHVuZGVmaW5lZFxuXG4gIGxhc3ROb2RlOiAtPlxuICAgIHJldHVybiBAY29tcG9uZW50KCkuX2NvbXBvbmVudEludGVybmFscy50ZW1wbGF0ZUluc3RhbmNlKCkudmlldy5fZG9tcmFuZ2UubGFzdE5vZGUoKSBpZiBAaXNSZW5kZXJlZCgpXG5cbiAgICB1bmRlZmluZWRcblxuICAjIFRoZSBzYW1lIGFzIGl0IHdvdWxkIGJlIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LCBvbmx5IHRoYXQgdGhlIHJ1bkZ1bmMgZ2V0cyBib3VuZCB0byB0aGUgY29tcG9uZW50LlxuICBhdXRvcnVuOiAocnVuRnVuYykgLT5cbiAgICB0ZW1wbGF0ZUluc3RhbmNlID0gVHJhY2tlci5ub25yZWFjdGl2ZSA9PlxuICAgICAgQGNvbXBvbmVudCgpLl9jb21wb25lbnRJbnRlcm5hbHM/LnRlbXBsYXRlSW5zdGFuY2U/KClcblxuICAgIHRocm93IG5ldyBFcnJvciBcIlRoZSBjb21wb25lbnQgaGFzIHRvIGJlIGNyZWF0ZWQgYmVmb3JlIGNhbGxpbmcgJ2F1dG9ydW4nLlwiIHVubGVzcyB0ZW1wbGF0ZUluc3RhbmNlXG5cbiAgICB0ZW1wbGF0ZUluc3RhbmNlLmF1dG9ydW4gXy5iaW5kIHJ1bkZ1bmMsIEBcblxuU1VQUE9SVFNfUkVBQ1RJVkVfSU5TVEFOQ0UgPSBbXG4gICdzdWJzY3JpcHRpb25zUmVhZHknXG5dXG5cblJFUVVJUkVfUkVOREVSRURfSU5TVEFOQ0UgPSBbXG4gICckJyxcbiAgJ2ZpbmQnLFxuICAnZmluZEFsbCdcbl1cblxuIyBXZSBjb3B5IHV0aWxpdHkgbWV0aG9kcyAoJCwgZmluZEFsbCwgc3Vic2NyaWJlLCBldGMuKSBmcm9tIHRoZSB0ZW1wbGF0ZSBpbnN0YW5jZSBwcm90b3R5cGUsXG4jIGlmIGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZSBkb2VzIG5vdCBleGlzdCBhbHJlYWR5LlxuZm9yIG1ldGhvZE5hbWUsIG1ldGhvZCBvZiAoQmxhemUuVGVtcGxhdGVJbnN0YW5jZTo6KSB3aGVuIG1ldGhvZE5hbWUgbm90IG9mIChCbGF6ZUNvbXBvbmVudDo6KVxuICBkbyAobWV0aG9kTmFtZSwgbWV0aG9kKSAtPlxuICAgIGlmIG1ldGhvZE5hbWUgaW4gU1VQUE9SVFNfUkVBQ1RJVkVfSU5TVEFOQ0VcbiAgICAgIEJsYXplQ29tcG9uZW50OjpbbWV0aG9kTmFtZV0gPSAoYXJncy4uLikgLT5cbiAgICAgICAgY29tcG9uZW50ID0gQGNvbXBvbmVudCgpXG5cbiAgICAgICAgY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMgPz0ge31cbiAgICAgICAgY29tcG9uZW50Ll9jb21wb25lbnRJbnRlcm5hbHMudGVtcGxhdGVJbnN0YW5jZSA/PSBuZXcgUmVhY3RpdmVGaWVsZCBudWxsLCAoYSwgYikgLT4gYSBpcyBiXG5cbiAgICAgICAgaWYgdGVtcGxhdGVJbnN0YW5jZSA9IGNvbXBvbmVudC5fY29tcG9uZW50SW50ZXJuYWxzLnRlbXBsYXRlSW5zdGFuY2UoKVxuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZUluc3RhbmNlW21ldGhvZE5hbWVdIGFyZ3MuLi5cblxuICAgICAgICB1bmRlZmluZWRcblxuICAgIGVsc2UgaWYgbWV0aG9kTmFtZSBpbiBSRVFVSVJFX1JFTkRFUkVEX0lOU1RBTkNFXG4gICAgICBCbGF6ZUNvbXBvbmVudDo6W21ldGhvZE5hbWVdID0gKGFyZ3MuLi4pIC0+XG4gICAgICAgIHJldHVybiBAY29tcG9uZW50KCkuX2NvbXBvbmVudEludGVybmFscy50ZW1wbGF0ZUluc3RhbmNlKClbbWV0aG9kTmFtZV0gYXJncy4uLiBpZiBAaXNSZW5kZXJlZCgpXG5cbiAgICAgICAgdW5kZWZpbmVkXG5cbiAgICBlbHNlXG4gICAgICBCbGF6ZUNvbXBvbmVudDo6W21ldGhvZE5hbWVdID0gKGFyZ3MuLi4pIC0+XG4gICAgICAgIHRlbXBsYXRlSW5zdGFuY2UgPSBUcmFja2VyLm5vbnJlYWN0aXZlID0+XG4gICAgICAgICAgQGNvbXBvbmVudCgpLl9jb21wb25lbnRJbnRlcm5hbHM/LnRlbXBsYXRlSW5zdGFuY2U/KClcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCJUaGUgY29tcG9uZW50IGhhcyB0byBiZSBjcmVhdGVkIGJlZm9yZSBjYWxsaW5nICcje21ldGhvZE5hbWV9Jy5cIiB1bmxlc3MgdGVtcGxhdGVJbnN0YW5jZVxuXG4gICAgICAgIHRlbXBsYXRlSW5zdGFuY2VbbWV0aG9kTmFtZV0gYXJncy4uLlxuIiwiY2xhc3MgQmxhemVDb21wb25lbnREZWJ1ZyBleHRlbmRzIEJhc2VDb21wb25lbnREZWJ1Z1xuICBAc3RhcnRDb21wb25lbnQ6IChjb21wb25lbnQpIC0+XG4gICAgc3VwZXJcblxuICAgIGNvbnNvbGUubG9nIGNvbXBvbmVudC5kYXRhKClcblxuICBAc3RhcnRNYXJrZWRDb21wb25lbnQ6IChjb21wb25lbnQpIC0+XG4gICAgc3VwZXJcblxuICAgIGNvbnNvbGUubG9nIGNvbXBvbmVudC5kYXRhKClcblxuICBAZHVtcENvbXBvbmVudFN1YnRyZWU6IChyb290Q29tcG9uZW50T3JFbGVtZW50KSAtPlxuICAgIGlmICdub2RlVHlwZScgb2Ygcm9vdENvbXBvbmVudE9yRWxlbWVudCBhbmQgcm9vdENvbXBvbmVudE9yRWxlbWVudC5ub2RlVHlwZSBpcyBOb2RlLkVMRU1FTlRfTk9ERVxuICAgICAgcm9vdENvbXBvbmVudE9yRWxlbWVudCA9IEJsYXplQ29tcG9uZW50LmdldENvbXBvbmVudEZvckVsZW1lbnQgcm9vdENvbXBvbmVudE9yRWxlbWVudFxuXG4gICAgc3VwZXJcblxuICBAZHVtcENvbXBvbmVudFRyZWU6IChyb290Q29tcG9uZW50T3JFbGVtZW50KSAtPlxuICAgIGlmICdub2RlVHlwZScgb2Ygcm9vdENvbXBvbmVudE9yRWxlbWVudCBhbmQgcm9vdENvbXBvbmVudE9yRWxlbWVudC5ub2RlVHlwZSBpcyBOb2RlLkVMRU1FTlRfTk9ERVxuICAgICAgcm9vdENvbXBvbmVudE9yRWxlbWVudCA9IEJsYXplQ29tcG9uZW50LmdldENvbXBvbmVudEZvckVsZW1lbnQgcm9vdENvbXBvbmVudE9yRWxlbWVudFxuXG4gICAgc3VwZXJcblxuICBAZHVtcEFsbENvbXBvbmVudHM6IC0+XG4gICAgYWxsUm9vdENvbXBvbmVudHMgPSBbXVxuXG4gICAgJCgnKicpLmVhY2ggKGksIGVsZW1lbnQpID0+XG4gICAgICBjb21wb25lbnQgPSBCbGF6ZUNvbXBvbmVudC5nZXRDb21wb25lbnRGb3JFbGVtZW50IGVsZW1lbnRcbiAgICAgIHJldHVybiB1bmxlc3MgY29tcG9uZW50XG4gICAgICByb290Q29tcG9uZW50ID0gQGNvbXBvbmVudFJvb3QgY29tcG9uZW50XG4gICAgICBhbGxSb290Q29tcG9uZW50cy5wdXNoIHJvb3RDb21wb25lbnQgdW5sZXNzIHJvb3RDb21wb25lbnQgaW4gYWxsUm9vdENvbXBvbmVudHNcblxuICAgIGZvciByb290Q29tcG9uZW50IGluIGFsbFJvb3RDb21wb25lbnRzXG4gICAgICBAZHVtcENvbXBvbmVudFN1YnRyZWUgcm9vdENvbXBvbmVudFxuXG4gICAgcmV0dXJuXG4iLCIjIE5vLW9wIG9uIHRoZSBzZXJ2ZXIuXG5UZW1wbGF0ZS5ib2R5LnJlbmRlclRvRG9jdW1lbnQgPSAtPlxuIl19
