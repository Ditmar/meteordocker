(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var EasySearch = Package['easysearch:components'].EasySearch;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"easy:search":{"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/easy_search/main.js                                                           //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
module.export({
  Index: () => Index,
  Engine: () => Engine,
  ReactiveEngine: () => ReactiveEngine,
  Cursor: () => Cursor,
  MongoDBEngine: () => MongoDBEngine,
  MinimongoEngine: () => MinimongoEngine,
  MongoTextIndexEngine: () => MongoTextIndexEngine,
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
let Engine, ReactiveEngine, Cursor, MongoDBEngine, MinimongoEngine, MongoTextIndexEngine;
module.link("meteor/easysearch:core", {
  Engine(v) {
    Engine = v;
  },

  ReactiveEngine(v) {
    ReactiveEngine = v;
  },

  Cursor(v) {
    Cursor = v;
  },

  MongoDBEngine(v) {
    MongoDBEngine = v;
  },

  MinimongoEngine(v) {
    MinimongoEngine = v;
  },

  MongoTextIndexEngine(v) {
    MongoTextIndexEngine = v;
  }

}, 0);
let Index, SingleIndexComponent, BaseComponent, FieldInputComponent, EachComponent, IfInputEmptyComponent, IfNoResultsComponent, IfSearchingComponent, InputComponent, LoadMoreComponent, PaginationComponent;
module.link("meteor/easysearch:components", {
  Index(v) {
    Index = v;
  },

  SingleIndexComponent(v) {
    SingleIndexComponent = v;
  },

  BaseComponent(v) {
    BaseComponent = v;
  },

  FieldInputComponent(v) {
    FieldInputComponent = v;
  },

  EachComponent(v) {
    EachComponent = v;
  },

  IfInputEmptyComponent(v) {
    IfInputEmptyComponent = v;
  },

  IfNoResultsComponent(v) {
    IfNoResultsComponent = v;
  },

  IfSearchingComponent(v) {
    IfSearchingComponent = v;
  },

  InputComponent(v) {
    InputComponent = v;
  },

  LoadMoreComponent(v) {
    LoadMoreComponent = v;
  },

  PaginationComponent(v) {
    PaginationComponent = v;
  }

}, 1);
////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/easy:search/main.js");

/* Exports */
Package._define("easy:search", exports, {
  EasySearch: EasySearch
});

})();

//# sourceURL=meteor://💻app/packages/easy_search.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZWFzeTpzZWFyY2gvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJJbmRleCIsIkVuZ2luZSIsIlJlYWN0aXZlRW5naW5lIiwiQ3Vyc29yIiwiTW9uZ29EQkVuZ2luZSIsIk1pbmltb25nb0VuZ2luZSIsIk1vbmdvVGV4dEluZGV4RW5naW5lIiwiU2luZ2xlSW5kZXhDb21wb25lbnQiLCJCYXNlQ29tcG9uZW50IiwiRmllbGRJbnB1dENvbXBvbmVudCIsIkVhY2hDb21wb25lbnQiLCJJZklucHV0RW1wdHlDb21wb25lbnQiLCJJZk5vUmVzdWx0c0NvbXBvbmVudCIsIklmU2VhcmNoaW5nQ29tcG9uZW50IiwiSW5wdXRDb21wb25lbnQiLCJMb2FkTW9yZUNvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJsaW5rIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsT0FBSyxFQUFDLE1BQUlBLEtBQVg7QUFBaUJDLFFBQU0sRUFBQyxNQUFJQSxNQUE1QjtBQUFtQ0MsZ0JBQWMsRUFBQyxNQUFJQSxjQUF0RDtBQUFxRUMsUUFBTSxFQUFDLE1BQUlBLE1BQWhGO0FBQXVGQyxlQUFhLEVBQUMsTUFBSUEsYUFBekc7QUFBdUhDLGlCQUFlLEVBQUMsTUFBSUEsZUFBM0k7QUFBMkpDLHNCQUFvQixFQUFDLE1BQUlBLG9CQUFwTDtBQUF5TUMsc0JBQW9CLEVBQUMsTUFBSUEsb0JBQWxPO0FBQXVQQyxlQUFhLEVBQUMsTUFBSUEsYUFBelE7QUFBdVJDLHFCQUFtQixFQUFDLE1BQUlBLG1CQUEvUztBQUFtVUMsZUFBYSxFQUFDLE1BQUlBLGFBQXJWO0FBQW1XQyx1QkFBcUIsRUFBQyxNQUFJQSxxQkFBN1g7QUFBbVpDLHNCQUFvQixFQUFDLE1BQUlBLG9CQUE1YTtBQUFpY0Msc0JBQW9CLEVBQUMsTUFBSUEsb0JBQTFkO0FBQStlQyxnQkFBYyxFQUFDLE1BQUlBLGNBQWxnQjtBQUFpaEJDLG1CQUFpQixFQUFDLE1BQUlBLGlCQUF2aUI7QUFBeWpCQyxxQkFBbUIsRUFBQyxNQUFJQTtBQUFqbEIsQ0FBZDtBQUFxbkIsSUFBSWYsTUFBSixFQUFXQyxjQUFYLEVBQTBCQyxNQUExQixFQUFpQ0MsYUFBakMsRUFBK0NDLGVBQS9DLEVBQStEQyxvQkFBL0Q7QUFBb0ZSLE1BQU0sQ0FBQ21CLElBQVAsQ0FBWSx3QkFBWixFQUFxQztBQUFDaEIsUUFBTSxDQUFDaUIsQ0FBRCxFQUFHO0FBQUNqQixVQUFNLEdBQUNpQixDQUFQO0FBQVMsR0FBcEI7O0FBQXFCaEIsZ0JBQWMsQ0FBQ2dCLENBQUQsRUFBRztBQUFDaEIsa0JBQWMsR0FBQ2dCLENBQWY7QUFBaUIsR0FBeEQ7O0FBQXlEZixRQUFNLENBQUNlLENBQUQsRUFBRztBQUFDZixVQUFNLEdBQUNlLENBQVA7QUFBUyxHQUE1RTs7QUFBNkVkLGVBQWEsQ0FBQ2MsQ0FBRCxFQUFHO0FBQUNkLGlCQUFhLEdBQUNjLENBQWQ7QUFBZ0IsR0FBOUc7O0FBQStHYixpQkFBZSxDQUFDYSxDQUFELEVBQUc7QUFBQ2IsbUJBQWUsR0FBQ2EsQ0FBaEI7QUFBa0IsR0FBcEo7O0FBQXFKWixzQkFBb0IsQ0FBQ1ksQ0FBRCxFQUFHO0FBQUNaLHdCQUFvQixHQUFDWSxDQUFyQjtBQUF1Qjs7QUFBcE0sQ0FBckMsRUFBMk8sQ0FBM087QUFBOE8sSUFBSWxCLEtBQUosRUFBVU8sb0JBQVYsRUFBK0JDLGFBQS9CLEVBQTZDQyxtQkFBN0MsRUFBaUVDLGFBQWpFLEVBQStFQyxxQkFBL0UsRUFBcUdDLG9CQUFyRyxFQUEwSEMsb0JBQTFILEVBQStJQyxjQUEvSSxFQUE4SkMsaUJBQTlKLEVBQWdMQyxtQkFBaEw7QUFBb01sQixNQUFNLENBQUNtQixJQUFQLENBQVksOEJBQVosRUFBMkM7QUFBQ2pCLE9BQUssQ0FBQ2tCLENBQUQsRUFBRztBQUFDbEIsU0FBSyxHQUFDa0IsQ0FBTjtBQUFRLEdBQWxCOztBQUFtQlgsc0JBQW9CLENBQUNXLENBQUQsRUFBRztBQUFDWCx3QkFBb0IsR0FBQ1csQ0FBckI7QUFBdUIsR0FBbEU7O0FBQW1FVixlQUFhLENBQUNVLENBQUQsRUFBRztBQUFDVixpQkFBYSxHQUFDVSxDQUFkO0FBQWdCLEdBQXBHOztBQUFxR1QscUJBQW1CLENBQUNTLENBQUQsRUFBRztBQUFDVCx1QkFBbUIsR0FBQ1MsQ0FBcEI7QUFBc0IsR0FBbEo7O0FBQW1KUixlQUFhLENBQUNRLENBQUQsRUFBRztBQUFDUixpQkFBYSxHQUFDUSxDQUFkO0FBQWdCLEdBQXBMOztBQUFxTFAsdUJBQXFCLENBQUNPLENBQUQsRUFBRztBQUFDUCx5QkFBcUIsR0FBQ08sQ0FBdEI7QUFBd0IsR0FBdE87O0FBQXVPTixzQkFBb0IsQ0FBQ00sQ0FBRCxFQUFHO0FBQUNOLHdCQUFvQixHQUFDTSxDQUFyQjtBQUF1QixHQUF0Ujs7QUFBdVJMLHNCQUFvQixDQUFDSyxDQUFELEVBQUc7QUFBQ0wsd0JBQW9CLEdBQUNLLENBQXJCO0FBQXVCLEdBQXRVOztBQUF1VUosZ0JBQWMsQ0FBQ0ksQ0FBRCxFQUFHO0FBQUNKLGtCQUFjLEdBQUNJLENBQWY7QUFBaUIsR0FBMVc7O0FBQTJXSCxtQkFBaUIsQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILHFCQUFpQixHQUFDRyxDQUFsQjtBQUFvQixHQUFwWjs7QUFBcVpGLHFCQUFtQixDQUFDRSxDQUFELEVBQUc7QUFBQ0YsdUJBQW1CLEdBQUNFLENBQXBCO0FBQXNCOztBQUFsYyxDQUEzQyxFQUErZSxDQUEvZSxFIiwiZmlsZSI6Ii9wYWNrYWdlcy9lYXN5X3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRW5naW5lLFxuICAgIFJlYWN0aXZlRW5naW5lLFxuICAgIEN1cnNvcixcbiAgICBNb25nb0RCRW5naW5lLFxuICAgIE1pbmltb25nb0VuZ2luZSxcbiAgICBNb25nb1RleHRJbmRleEVuZ2luZSxcbn0gZnJvbSAnbWV0ZW9yL2Vhc3lzZWFyY2g6Y29yZSdcblxuaW1wb3J0IHtcbiAgSW5kZXgsIC8vIGluZGV4IGVuaGFuY2VkIHdpdGggY29tcG9uZW50IGxvZ2ljXG4gIFNpbmdsZUluZGV4Q29tcG9uZW50LFxuICBCYXNlQ29tcG9uZW50LFxuICBGaWVsZElucHV0Q29tcG9uZW50LFxuICBFYWNoQ29tcG9uZW50LFxuICBJZklucHV0RW1wdHlDb21wb25lbnQsXG4gIElmTm9SZXN1bHRzQ29tcG9uZW50LFxuICBJZlNlYXJjaGluZ0NvbXBvbmVudCxcbiAgSW5wdXRDb21wb25lbnQsXG4gIExvYWRNb3JlQ29tcG9uZW50LFxuICBQYWdpbmF0aW9uQ29tcG9uZW50LFxufSBmcm9tICdtZXRlb3IvZWFzeXNlYXJjaDpjb21wb25lbnRzJ1xuXG5leHBvcnQge1xuICBJbmRleCxcbiAgRW5naW5lLFxuICBSZWFjdGl2ZUVuZ2luZSxcbiAgQ3Vyc29yLFxuXG4gIE1vbmdvREJFbmdpbmUsXG4gIE1pbmltb25nb0VuZ2luZSxcbiAgTW9uZ29UZXh0SW5kZXhFbmdpbmUsXG5cbiAgU2luZ2xlSW5kZXhDb21wb25lbnQsXG4gIEJhc2VDb21wb25lbnQsXG4gIEZpZWxkSW5wdXRDb21wb25lbnQsXG4gIEVhY2hDb21wb25lbnQsXG4gIElmSW5wdXRFbXB0eUNvbXBvbmVudCxcbiAgSWZOb1Jlc3VsdHNDb21wb25lbnQsXG4gIElmU2VhcmNoaW5nQ29tcG9uZW50LFxuICBJbnB1dENvbXBvbmVudCxcbiAgTG9hZE1vcmVDb21wb25lbnQsXG4gIFBhZ2luYXRpb25Db21wb25lbnQsXG59XG4iXX0=
