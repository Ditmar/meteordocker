(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ECMAScript = Package.ecmascript.ECMAScript;
var Random = Package.random.Random;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var Template = Package['peerlibrary:blaze-components'].Template;
var BlazeComponent = Package['peerlibrary:blaze-components'].BlazeComponent;
var BlazeComponentDebug = Package['peerlibrary:blaze-components'].BlazeComponentDebug;
var EasySearch = Package['easysearch:core'].EasySearch;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"easysearch:components":{"lib":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/easysearch_components/lib/main.js                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({
  Index: () => Index,
  SingleIndexComponent: () => SingleIndexComponent,
  BaseComponent: () => BaseComponent,
  FieldInputComponent: () => FieldInputComponent,
  EachComponent: () => EachComponent,
  IfInputEmptyComponent: () => IfInputEmptyComponent,
  IfNoResultsComponent: () => IfNoResultsComponent,
  IfSearchingComponent: () => IfSearchingComponent,
  InputComponent: () => InputComponent,
  LoadMoreComponent: () => LoadMoreComponent,
  PaginationComponent: () => PaginationComponent
});
const {
  Index,
  SingleIndexComponent,
  BaseComponent,
  FieldInputComponent,
  EachComponent,
  IfInputEmptyComponent,
  IfNoResultsComponent,
  IfSearchingComponent,
  InputComponent,
  LoadMoreComponent,
  PaginationComponent
} = EasySearch;
///////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});

var exports = require("/node_modules/meteor/easysearch:components/lib/main.js");

/* Exports */
Package._define("easysearch:components", exports, {
  EasySearch: EasySearch
});

})();

//# sourceURL=meteor://💻app/packages/easysearch_components.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZWFzeXNlYXJjaDpjb21wb25lbnRzL2xpYi9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkluZGV4IiwiU2luZ2xlSW5kZXhDb21wb25lbnQiLCJCYXNlQ29tcG9uZW50IiwiRmllbGRJbnB1dENvbXBvbmVudCIsIkVhY2hDb21wb25lbnQiLCJJZklucHV0RW1wdHlDb21wb25lbnQiLCJJZk5vUmVzdWx0c0NvbXBvbmVudCIsIklmU2VhcmNoaW5nQ29tcG9uZW50IiwiSW5wdXRDb21wb25lbnQiLCJMb2FkTW9yZUNvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJFYXN5U2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLE9BQUssRUFBQyxNQUFJQSxLQUFYO0FBQWlCQyxzQkFBb0IsRUFBQyxNQUFJQSxvQkFBMUM7QUFBK0RDLGVBQWEsRUFBQyxNQUFJQSxhQUFqRjtBQUErRkMscUJBQW1CLEVBQUMsTUFBSUEsbUJBQXZIO0FBQTJJQyxlQUFhLEVBQUMsTUFBSUEsYUFBN0o7QUFBMktDLHVCQUFxQixFQUFDLE1BQUlBLHFCQUFyTTtBQUEyTkMsc0JBQW9CLEVBQUMsTUFBSUEsb0JBQXBQO0FBQXlRQyxzQkFBb0IsRUFBQyxNQUFJQSxvQkFBbFM7QUFBdVRDLGdCQUFjLEVBQUMsTUFBSUEsY0FBMVU7QUFBeVZDLG1CQUFpQixFQUFDLE1BQUlBLGlCQUEvVztBQUFpWUMscUJBQW1CLEVBQUMsTUFBSUE7QUFBelosQ0FBZDtBQUFBLE1BQU07QUFDSlYsT0FESTtBQUVKQyxzQkFGSTtBQUdKQyxlQUhJO0FBSUpDLHFCQUpJO0FBS0pDLGVBTEk7QUFNSkMsdUJBTkk7QUFPSkMsc0JBUEk7QUFRSkMsc0JBUkk7QUFTSkMsZ0JBVEk7QUFVSkMsbUJBVkk7QUFXSkM7QUFYSSxJQVlGQyxVQVpKLEMiLCJmaWxlIjoiL3BhY2thZ2VzL2Vhc3lzZWFyY2hfY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcbiAgSW5kZXgsXG4gIFNpbmdsZUluZGV4Q29tcG9uZW50LFxuICBCYXNlQ29tcG9uZW50LFxuICBGaWVsZElucHV0Q29tcG9uZW50LFxuICBFYWNoQ29tcG9uZW50LFxuICBJZklucHV0RW1wdHlDb21wb25lbnQsXG4gIElmTm9SZXN1bHRzQ29tcG9uZW50LFxuICBJZlNlYXJjaGluZ0NvbXBvbmVudCxcbiAgSW5wdXRDb21wb25lbnQsXG4gIExvYWRNb3JlQ29tcG9uZW50LFxuICBQYWdpbmF0aW9uQ29tcG9uZW50LFxufSA9IEVhc3lTZWFyY2g7XG5cbmV4cG9ydCB7XG4gIEluZGV4LFxuICBTaW5nbGVJbmRleENvbXBvbmVudCxcbiAgQmFzZUNvbXBvbmVudCxcbiAgRmllbGRJbnB1dENvbXBvbmVudCxcbiAgRWFjaENvbXBvbmVudCxcbiAgSWZJbnB1dEVtcHR5Q29tcG9uZW50LFxuICBJZk5vUmVzdWx0c0NvbXBvbmVudCxcbiAgSWZTZWFyY2hpbmdDb21wb25lbnQsXG4gIElucHV0Q29tcG9uZW50LFxuICBMb2FkTW9yZUNvbXBvbmVudCxcbiAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbn07XG4iXX0=
