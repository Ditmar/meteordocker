(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var ECMAScript = Package.ecmascript.ECMAScript;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var options, searchDefinition, searchString, EasySearch;

var require = meteorInstall({"node_modules":{"meteor":{"easysearch:core":{"lib":{"core":{"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/core/index.js                                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Engine;
module.link("./engine", {
  default(v) {
    Engine = v;
  }

}, 1);

/**
 * An Index represents the main entry point for searching with EasySearch. It relies on
 * the given engine to have the search functionality and defines the data that should be searchable.
 *
 * @type {Index}
 */
class Index {
  /**
   * Constructor
   *
   * @param {Object} config Configuration
   *
   * @constructor
   */
  constructor(config) {
    check(config, Object);
    check(config.fields, [String]);
    if (!config.ignoreCollectionCheck) check(config.collection, Mongo.Collection);

    if (!(config.engine instanceof Engine)) {
      throw new Meteor.Error('invalid-engine', 'engine needs to be instanceof Engine');
    }

    if (!config.name) config.name = (config.collection._name || '').toLowerCase();
    this.config = _.extend(Index.defaultConfiguration, config);
    this.defaultSearchOptions = _.defaults({}, this.config.defaultSearchOptions, {
      limit: 10,
      skip: 0,
      props: {}
    }); // Engine specific code on index creation

    config.engine.onIndexCreate(this.config);
  }
  /**
   * Default configuration for an index.
   *
   * @returns {Object}
   */


  static get defaultConfiguration() {
    return {
      permission: () => true,
      defaultSearchOptions: {},
      countUpdateIntervalMs: 2000
    };
  }
  /**
   * Search the index.
   *
   * @param {Object|String} searchDefinition Search definition
   * @param {Object}        options          Options
   *
   * @returns {Cursor}
   */


  search(searchDefinition, options = {}) {
    this.config.engine.checkSearchParam(searchDefinition, this.config);
    check(options, {
      limit: Match.Optional(Number),
      skip: Match.Optional(Number),
      props: Match.Optional(Object),
      userId: Match.Optional(Match.OneOf(String, null))
    });
    options = {
      search: this._getSearchOptions(options),
      index: this.config
    };

    if (!this.config.permission(options.search)) {
      throw new Meteor.Error('not-allowed', "Not allowed to search this index!");
    }

    return this.config.engine.search(searchDefinition, options);
  }
  /**
   * Returns the search options based on the given options.
   *
   * @param {Object} options Options to use
   *
   * @returns {Object}
   */


  _getSearchOptions(options) {
    if (!Meteor.isServer) {
      delete options.userId;
    }

    if (typeof options.userId === "undefined" && Meteor.userId) {
      options.userId = Meteor.userId();
    }

    return _.defaults(options, this.defaultSearchOptions);
  }

}

module.exportDefault(Index);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"engine.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/core/engine.js                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
/**
 * An Engine is the technology used for searching with EasySearch, with
 * customizable configuration to how it interacts with the data from the Index.
 *
 * @type {Engine}
 */
class Engine {
  /**
   * Constructor
   *
   * @param {Object} config configuration
   *
   * @constructor
   */
  constructor(config = {}) {
    if (this.constructor === Engine) {
      throw new Error('Cannot initialize instance of Engine');
    }

    if (!_.isFunction(this.search)) {
      throw new Error('Engine needs to implement search method');
    }

    this.config = _.defaults({}, config, this.defaultConfiguration());
  }
  /**
   * Return default configuration.
   *
   * @returns {Object}
   */


  defaultConfiguration() {
    return {};
  }
  /**
   * Call a configuration method with the engine scope.
   *
   * @param {String} methodName Method name
   * @param {Object} args       Arguments for the method
   *
   * @returns {*}
   */


  callConfigMethod(methodName, ...args) {
    check(methodName, String);
    let func = this.config[methodName];

    if (func) {
      return func.apply(this, args);
    }
  }
  /**
   * Check the given search parameter for validity
   *
   * @param search
   */


  checkSearchParam(search) {
    check(search, String);
  }
  /**
   *Code to run on index creation
   *
   * @param {Object} indexConfig Index configuraction
   */


  onIndexCreate(indexConfig) {
    if (!indexConfig.allowedFields) {
      indexConfig.allowedFields = indexConfig.fields;
    }
  }

}

module.exportDefault(Engine);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reactive-engine.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/core/reactive-engine.js                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
let SearchCollection;
module.link("./search-collection", {
  default(v) {
    SearchCollection = v;
  }

}, 0);
let Engine;
module.link("./engine", {
  default(v) {
    Engine = v;
  }

}, 1);

/**
 * A ReactiveEngine handles the reactive logic, such as subscribing
 * and publishing documents into a self contained collection.
 *
 * @type {ReactiveEngine}
 */
class ReactiveEngine extends Engine {
  /**
   * Constructor.
   *
   * @param {Object} config Configuration
   *
   * @constructor
   */
  constructor(config) {
    super(config);

    if (this === this.constructor) {
      throw new Error('Cannot initialize instance of ReactiveEngine');
    }

    if (!_.isFunction(this.getSearchCursor)) {
      throw new Error('Reactive engine needs to implement getSearchCursor method');
    }
  }
  /**
   * Return default configuration.
   *
   * @returns {Object}
   */


  defaultConfiguration() {
    return _.defaults({}, {
      transform: doc => doc,
      beforePublish: (event, doc) => doc
    }, super.defaultConfiguration());
  }
  /**
   * Code to run on index creation
   *
   * @param {Object} indexConfig Index configuration
   */


  onIndexCreate(indexConfig) {
    super.onIndexCreate(indexConfig);
    indexConfig.searchCollection = new SearchCollection(indexConfig, this);
    indexConfig.mongoCollection = indexConfig.searchCollection._collection;
  }
  /**
   * Transform the search definition.
   *
   * @param {String|Object} searchDefinition Search definition
   * @param {Object}        options          Search and index options
   *
   * @returns {Object}
   */


  transformSearchDefinition(searchDefinition, options) {
    if (_.isString(searchDefinition)) {
      let obj = {};

      _.each(options.index.fields, function (field) {
        obj[field] = searchDefinition;
      });

      searchDefinition = obj;
    }

    return searchDefinition;
  }
  /**
   * Check the given search parameter for validity
   *
   * @param search
   * @param indexOptions
   */


  checkSearchParam(search, indexOptions) {
    check(search, Match.OneOf(String, Object));

    if (_.isObject(search)) {
      _.each(search, function (val, field) {
        check(val, String);

        if (-1 === _.indexOf(indexOptions.allowedFields, field)) {
          throw new Meteor.Error(`Not allowed to search over field "${field}"`);
        }
      });
    }
  }
  /**
   * Reactively search on the collection.
   *
   * @param {Object} searchDefinition Search definition
   * @param {Object} options          Options
   *
   * @returns {Cursor}
   */


  search(searchDefinition, options) {
    if (Meteor.isClient) {
      return options.index.searchCollection.find(searchDefinition, options.search);
    } else {
      return this.getSearchCursor(this.transformSearchDefinition(searchDefinition, options), options);
    }
  }

}

module.exportDefault(ReactiveEngine);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cursor.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/core/cursor.js                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
/**
 * A Cursor represents a pointer to the search results. Since it's specific
 * to EasySearch it can also be used to check for valid return values.
 *
 * @type {Cursor}
 */
class Cursor {
  /**
   * Constructor
   *
   * @param {Mongo.Cursor} mongoCursor   Referenced mongo cursor
   * @param {Number}       count         Count of all documents found
   * @param {Boolean}      isReady       Cursor is ready
   * @param {Object}       publishHandle Publish handle to stop if on client
   *
   * @constructor
   *
   */
  constructor(mongoCursor, count, isReady = true, publishHandle = null) {
    check(mongoCursor.fetch, Function);
    check(count, Number);
    check(isReady, Match.Optional(Boolean));
    check(publishHandle, Match.OneOf(null, Object));
    this._mongoCursor = mongoCursor;
    this._count = count;
    this._isReady = isReady;
    this._publishHandle = publishHandle;
  }
  /**
   * Fetch the search results.
   *
   * @returns {[Object]}
   */


  fetch() {
    return this._mongoCursor.fetch();
  }
  /**
   * Stop the subscription handle associated with the cursor.
   */


  stop() {
    if (this._publishHandle) {
      return this._publishHandle.stop();
    }
  }
  /**
   * Return count of all documents found
   *
   * @returns {Number}
   */


  count() {
    return this._count;
  }
  /**
   * Return if the cursor is ready.
   *
   * @returns {Boolean}
   */


  isReady() {
    return this._isReady;
  }
  /**
   * Return the raw mongo cursor.
   *
   * @returns {Mongo.Cursor}
   */


  get mongoCursor() {
    return this._mongoCursor;
  }
  /**
   * Return a fake empty cursor, without data.
   *
   * @returns {Object}
   */


  static get emptyCursor() {
    return {
      fetch: () => [],
      observe: () => {
        return {
          stop: () => null
        };
      },
      stop: () => {}
    };
  }

}

module.exportDefault(Cursor);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search-collection.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/core/search-collection.js                                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Cursor;
module.link("./cursor", {
  default(v) {
    Cursor = v;
  }

}, 1);
let ReactiveEngine;
module.link("./reactive-engine", {
  default(v) {
    ReactiveEngine = v;
  }

}, 2);

/**
 * A search collection represents a reactive collection on the client,
 * which is used by the ReactiveEngine for searching.
 *
 * @type {SearchCollection}
 */
class SearchCollection {
  /**
   * Constructor
   *
   * @param {Object}         indexConfiguration Index configuration
   * @param {ReactiveEngine} engine             Reactive Engine
   *
   * @constructor
   */
  constructor(indexConfiguration, engine) {
    check(indexConfiguration, Object);
    check(indexConfiguration.name, Match.OneOf(String, null));

    if (!(engine instanceof ReactiveEngine)) {
      throw new Meteor.Error('invalid-engine', 'engine needs to be instanceof ReactiveEngine');
    }

    this._indexConfiguration = indexConfiguration;
    this._name = `${indexConfiguration.name}/easySearch`;
    this._engine = engine;

    if (Meteor.isClient) {
      this._collection = new Mongo.Collection(this._name);
    } else if (Meteor.isServer) {
      this._setUpPublication();
    }
  }
  /**
   * Get name
   *
   * @returns {String}
   */


  get name() {
    return this._name;
  }
  /**
   * Get engine
   *
   * @returns {ReactiveEngine}
   */


  get engine() {
    return this._engine;
  }
  /**
   * Find documents on the client.
   *
   * @param {Object} searchDefinition Search definition
   * @param {Object} options          Options
   *
   * @returns {Cursor}
   */


  find(searchDefinition, options) {
    if (!Meteor.isClient) {
      throw new Error('find can only be used on client');
    }

    let publishHandle = Meteor.subscribe(this.name, searchDefinition, options);

    let count = this._getCount(searchDefinition);

    let mongoCursor = this._getMongoCursor(searchDefinition, options);

    if (!_.isNumber(count)) {
      return new Cursor(mongoCursor, 0, false);
    }

    return new Cursor(mongoCursor, count, true, publishHandle);
  }
  /**
   * Get the count of the cursor.
   *
   * @params {Object} searchDefinition Search definition
   *
   * @returns {Cursor.count}
   *
   * @private
   */


  _getCount(searchDefinition) {
    let countDoc = this._collection.findOne('searchCount' + JSON.stringify(searchDefinition));

    if (countDoc) {
      return countDoc.count;
    }
  }
  /**
   * Get the mongo cursor on the client.
   *
   * @param {Object} searchDefinition Search definition
   * @param {Object} options          Search options
   *
   * @returns {Cursor}
   * @private
   */


  _getMongoCursor(searchDefinition, options) {
    const clientSort = this.engine.callConfigMethod('clientSort', searchDefinition, options);
    return this._collection.find({
      __searchDefinition: JSON.stringify(searchDefinition),
      __searchOptions: JSON.stringify(options.props)
    }, {
      transform: doc => {
        delete doc.__searchDefinition;
        delete doc.__searchOptions;
        delete doc.__sortPosition;
        doc = this.engine.config.transform(doc);
        return doc;
      },
      sort: clientSort ? clientSort : ['__sortPosition']
    });
  }
  /**
   * Return a unique document id for publication.
   *
   * @param {Document} doc
   *
   * @returns string
   */


  generateId(doc) {
    return doc._id + doc.__searchDefinition + doc.__searchOptions;
  }
  /**
   * Add custom fields to the given document
   *
   * @param {Document} doc
   * @param {Object}   data
   * @returns {*}
   */


  addCustomFields(doc, data) {
    _.forEach(data, function (val, key) {
      doc['__' + key] = val;
    });

    return doc;
  }
  /**
   * Set up publication.
   *
   * @private
   */


  _setUpPublication() {
    var collectionScope = this,
        collectionName = this.name;
    Meteor.publish(collectionName, function (searchDefinition, options) {
      check(searchDefinition, Match.OneOf(String, Object));
      check(options, Object);
      let definitionString = JSON.stringify(searchDefinition),
          optionsString = JSON.stringify(options.props);
      options.userId = this.userId;
      options.publicationScope = this;

      if (!collectionScope._indexConfiguration.permission(options)) {
        throw new Meteor.Error('not-allowed', "You're not allowed to search this index!");
      }

      collectionScope.engine.checkSearchParam(searchDefinition, collectionScope._indexConfiguration);
      let cursor = collectionScope.engine.search(searchDefinition, {
        search: options,
        index: collectionScope._indexConfiguration
      });
      const count = cursor.count();
      this.added(collectionName, 'searchCount' + definitionString, {
        count
      });
      let intervalID;

      if (collectionScope._indexConfiguration.countUpdateIntervalMs) {
        intervalID = Meteor.setInterval(() => this.changed(collectionName, 'searchCount' + definitionString, {
          count: cursor.mongoCursor.count && cursor.mongoCursor.count() || 0
        }), collectionScope._indexConfiguration.countUpdateIntervalMs);
      }

      this.onStop(function () {
        intervalID && Meteor.clearInterval(intervalID);
        resultsHandle && resultsHandle.stop();
      });
      let observedDocs = [];

      const updateDocWithCustomFields = (doc, sortPosition) => collectionScope.addCustomFields(doc, {
        originalId: doc._id,
        sortPosition,
        searchDefinition: definitionString,
        searchOptions: optionsString
      });

      let resultsHandle = cursor.mongoCursor.observe({
        addedAt: (doc, atIndex, before) => {
          doc = collectionScope.engine.config.beforePublish('addedAt', doc, atIndex, before);
          doc = updateDocWithCustomFields(doc, atIndex);
          this.added(collectionName, collectionScope.generateId(doc), doc);
          /*
           * Reorder all observed docs to keep valid sorting. Here we adjust the
           * sortPosition number field to give space for the newly added doc
           */

          if (observedDocs.map(d => d.__sortPosition).includes(atIndex)) {
            observedDocs = observedDocs.map((doc, docIndex) => {
              if (doc.__sortPosition >= atIndex) {
                doc = collectionScope.addCustomFields(doc, {
                  sortPosition: doc.__sortPosition + 1
                }); // do not throw changed event on last doc as it will be removed from cursor

                if (docIndex < observedDocs.length) {
                  this.changed(collectionName, collectionScope.generateId(doc), doc);
                }
              }

              return doc;
            });
          }

          observedDocs = [...observedDocs, doc];
        },
        changedAt: (doc, oldDoc, atIndex) => {
          doc = collectionScope.engine.config.beforePublish('changedAt', doc, oldDoc, atIndex);
          doc = collectionScope.addCustomFields(doc, {
            searchDefinition: definitionString,
            searchOptions: optionsString,
            sortPosition: atIndex,
            originalId: doc._id
          });
          this.changed(collectionName, collectionScope.generateId(doc), doc);
        },
        movedTo: (doc, fromIndex, toIndex, before) => {
          doc = collectionScope.engine.config.beforePublish('movedTo', doc, fromIndex, toIndex, before);
          doc = updateDocWithCustomFields(doc, toIndex);

          let beforeDoc = collectionScope._indexConfiguration.collection.findOne(before);

          if (beforeDoc) {
            beforeDoc = collectionScope.addCustomFields(beforeDoc, {
              searchDefinition: definitionString,
              searchOptions: optionsString,
              sortPosition: fromIndex
            });
            this.changed(collectionName, collectionScope.generateId(beforeDoc), beforeDoc);
          }

          this.changed(collectionName, collectionScope.generateId(doc), doc);
        },
        removedAt: (doc, atIndex) => {
          doc = collectionScope.engine.config.beforePublish('removedAt', doc, atIndex);
          doc = collectionScope.addCustomFields(doc, {
            searchDefinition: definitionString,
            searchOptions: optionsString
          });
          this.removed(collectionName, collectionScope.generateId(doc));
          /*
           * Adjust sort position for all docs after the removed doc and
           * remove the doc from the observed docs array
           */

          observedDocs = observedDocs.map(doc => {
            if (doc.__sortPosition > atIndex) {
              doc.__sortPosition -= 1;
            }

            return doc;
          }).filter(d => collectionScope.generateId(d) !== collectionScope.generateId(doc));
        }
      });
      this.onStop(function () {
        resultsHandle.stop();
      });
      this.ready();
    });
  }

}

module.exportDefault(SearchCollection);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"engines":{"mongo-db.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/engines/mongo-db.js                                                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
let Cursor;
module.link("../core/cursor", {
  default(v) {
    Cursor = v;
  }

}, 0);
let ReactiveEngine;
module.link("../core/reactive-engine", {
  default(v) {
    ReactiveEngine = v;
  }

}, 1);

/**
 * The MongoDBEngine lets you search the index on the server side with MongoDB. Subscriptions and publications
 * are handled within the Engine.
 *
 * @type {MongoDBEngine}
 */
class MongoDBEngine extends ReactiveEngine {
  /**
   * Return default configuration.
   *
   * @returns {Object}
   */
  defaultConfiguration() {
    return _.defaults({}, MongoDBEngine.defaultMongoConfiguration(this), super.defaultConfiguration());
  }
  /**
   * Default mongo configuration, used in constructor and MinimongoEngine to get the configuration.
   *
   * @param {Object} engineScope Scope of the engine
   *
   * @returns {Object}
   */


  static defaultMongoConfiguration(engineScope) {
    return {
      aggregation: '$or',

      selector(searchObject, options, aggregation) {
        const selector = {};
        selector[aggregation] = [];

        _.each(searchObject, (searchString, field) => {
          const fieldSelector = engineScope.callConfigMethod('selectorPerField', field, searchString, options);

          if (fieldSelector) {
            selector[aggregation].push(fieldSelector);
          }
        });

        return selector;
      },

      selectorPerField(field, searchString) {
        const selector = {};
        searchString = searchString.replace(/(\W{1})/g, '\\$1');
        selector[field] = {
          '$regex': `.*${searchString}.*`,
          '$options': 'i'
        };
        return selector;
      },

      sort(searchObject, options) {
        return options.index.fields;
      }

    };
  }
  /**
   * Return the find options for the mongo find query.
   *
   * @param {String} searchDefinition Search definition
   * @param {Object} options          Search and index options
   */


  getFindOptions(searchDefinition, options) {
    return {
      skip: options.search.skip,
      limit: options.search.limit,
      disableOplog: this.config.disableOplog,
      pollingIntervalMs: this.config.pollingIntervalMs,
      pollingThrottleMs: this.config.pollingThrottleMs,
      sort: this.callConfigMethod('sort', searchDefinition, options),
      fields: this.callConfigMethod('fields', searchDefinition, options)
    };
  }
  /**
   * Return the reactive search cursor.
   *
   * @param {String} searchDefinition Search definition
   * @param {Object} options          Search and index options
   */


  getSearchCursor(searchDefinition, options) {
    const selector = this.callConfigMethod('selector', searchDefinition, options, this.config.aggregation),
          findOptions = this.getFindOptions(searchDefinition, options),
          collection = options.index.collection;
    check(options, Object);
    check(selector, Object);
    check(findOptions, Object);
    return new Cursor(collection.find(selector, findOptions), collection.find(selector).count());
  }

}

module.exportDefault(MongoDBEngine);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"minimongo.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/engines/minimongo.js                                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
let Engine;
module.link("../core/engine", {
  default(v) {
    Engine = v;
  }

}, 0);
let ReactiveEngine;
module.link("../core/reactive-engine", {
  default(v) {
    ReactiveEngine = v;
  }

}, 1);
let MongoDBEngine;
module.link("./mongo-db", {
  default(v) {
    MongoDBEngine = v;
  }

}, 2);

/**
 * The MinimongEngine lets you search the index on the client-side.
 *
 * @type {MinimongoEngine}
 */
class MinimongoEngine extends Engine {
  /**
   * Return default configuration.
   *
   * @returns {Object}
   */
  defaultConfiguration() {
    return _.defaults({}, MongoDBEngine.defaultMongoConfiguration(this), super.defaultConfiguration());
  }
  /**
   * Search the index.
   *
   * @param {Object} searchDefinition Search definition
   * @param {Object} options          Object of options
   *
   * @returns {cursor}
   */


  search(searchDefinition, options) {
    if (!Meteor.isClient) {
      throw new Meteor.Error('only-client', 'Minimongo can only be used on the client');
    }

    searchDefinition = this.transformSearchDefinition(searchDefinition, options); // check() calls are in getSearchCursor method

    return MongoDBEngine.prototype.getSearchCursor.apply(this, [searchDefinition, options]);
  }

}

MinimongoEngine.prototype.checkSearchParam = ReactiveEngine.prototype.checkSearchParam;
MinimongoEngine.prototype.transformSearchDefinition = ReactiveEngine.prototype.transformSearchDefinition;

MinimongoEngine.prototype.getFindOptions = function (...args) {
  let findOptions = MongoDBEngine.prototype.getFindOptions.apply(this, args);
  findOptions.transform = this.config.transform;
  return findOptions;
};

module.exportDefault(MinimongoEngine);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mongo-text-index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/engines/mongo-text-index.js                                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
let ReactiveEngine;
module.link("../core/reactive-engine", {
  default(v) {
    ReactiveEngine = v;
  }

}, 0);
let MongoDBEngine;
module.link("./mongo-db", {
  default(v) {
    MongoDBEngine = v;
  }

}, 1);

/**
 * The MongoTextIndexEngine lets you search the index with Mongo text indexes.
 *
 * @type {MongoTextIndexEngine}
 */
class MongoTextIndexEngine extends ReactiveEngine {
  /**
   * Return default configuration.
   *
   * @returns {Object}
   */
  defaultConfiguration() {
    let mongoConfiguration = MongoDBEngine.defaultMongoConfiguration(this);

    mongoConfiguration.selector = function (searchString) {
      if (searchString.trim()) {
        return {
          $text: {
            $search: searchString
          }
        };
      }

      return {};
    };

    return _.defaults({}, mongoConfiguration, super.defaultConfiguration());
  }
  /**
   * Setup the index on creation.
   *
   * @param {Object} indexConfig Index configuration
   */


  onIndexCreate(indexConfig) {
    super.onIndexCreate(indexConfig);

    if (Meteor.isServer) {
      let textIndexesConfig = {};

      _.each(indexConfig.fields, function (field) {
        textIndexesConfig[field] = 'text';
      });

      if (indexConfig.weights) {
        textIndexesConfig.weights = options.weights();
      }

      indexConfig.collection._ensureIndex(textIndexesConfig);
    }
  }
  /**
   * Transform the search definition.
   *
   * @param {String|Object} searchDefinition Search definition
   * @param {Object}        options          Search and index options
   *
   * @returns {Object}
   */


  transformSearchDefinition(searchDefinition, options) {
    return searchDefinition;
  }
  /**
   * Check the given search parameter for validity
   *
   * @param search
   */


  checkSearchParam(search) {
    check(search, String);
  }

} // Explicitely inherit getSearchCursor method functionality


MongoTextIndexEngine.prototype.getSearchCursor = MongoDBEngine.prototype.getSearchCursor;
MongoTextIndexEngine.prototype.getFindOptions = MongoDBEngine.prototype.getFindOptions;
module.exportDefault(MongoTextIndexEngine);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"globals.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/globals.js                                                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
let Index, Engine, ReactiveEngine, Cursor, MongoDBEngine, MinimongoEngine, MongoTextIndexEngine;
module.link("./main", {
  Index(v) {
    Index = v;
  },

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
EasySearch = {
  // Core
  Index,
  Engine,
  ReactiveEngine,
  Cursor,
  // Engines
  MongoDB: MongoDBEngine,
  Minimongo: MinimongoEngine,
  MongoTextIndex: MongoTextIndexEngine
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/easysearch_core/lib/main.js                                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({
  Index: () => Index,
  Engine: () => Engine,
  ReactiveEngine: () => ReactiveEngine,
  Cursor: () => Cursor,
  MongoDBEngine: () => MongoDBEngine,
  MinimongoEngine: () => MinimongoEngine,
  MongoTextIndexEngine: () => MongoTextIndexEngine
});
let Index;
module.link("./core/index", {
  default(v) {
    Index = v;
  }

}, 0);
let Engine;
module.link("./core/engine", {
  default(v) {
    Engine = v;
  }

}, 1);
let ReactiveEngine;
module.link("./core/reactive-engine", {
  default(v) {
    ReactiveEngine = v;
  }

}, 2);
let Cursor;
module.link("./core/cursor", {
  default(v) {
    Cursor = v;
  }

}, 3);
let MongoDBEngine;
module.link("./engines/mongo-db", {
  default(v) {
    MongoDBEngine = v;
  }

}, 4);
let MinimongoEngine;
module.link("./engines/minimongo", {
  default(v) {
    MinimongoEngine = v;
  }

}, 5);
let MongoTextIndexEngine;
module.link("./engines/mongo-text-index", {
  default(v) {
    MongoTextIndexEngine = v;
  }

}, 6);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/easysearch:core/lib/core/index.js");
require("/node_modules/meteor/easysearch:core/lib/core/engine.js");
require("/node_modules/meteor/easysearch:core/lib/core/reactive-engine.js");
require("/node_modules/meteor/easysearch:core/lib/core/cursor.js");
require("/node_modules/meteor/easysearch:core/lib/core/search-collection.js");
require("/node_modules/meteor/easysearch:core/lib/engines/mongo-db.js");
require("/node_modules/meteor/easysearch:core/lib/engines/minimongo.js");
require("/node_modules/meteor/easysearch:core/lib/engines/mongo-text-index.js");
require("/node_modules/meteor/easysearch:core/lib/globals.js");
var exports = require("/node_modules/meteor/easysearch:core/lib/main.js");

/* Exports */
Package._define("easysearch:core", exports, {
  EasySearch: EasySearch
});

})();

//# sourceURL=meteor://💻app/packages/easysearch_core.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZWFzeXNlYXJjaDpjb3JlL2xpYi9jb3JlL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9lYXN5c2VhcmNoOmNvcmUvbGliL2NvcmUvZW5naW5lLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9lYXN5c2VhcmNoOmNvcmUvbGliL2NvcmUvcmVhY3RpdmUtZW5naW5lLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9lYXN5c2VhcmNoOmNvcmUvbGliL2NvcmUvY3Vyc29yLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9lYXN5c2VhcmNoOmNvcmUvbGliL2NvcmUvc2VhcmNoLWNvbGxlY3Rpb24uanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2Vhc3lzZWFyY2g6Y29yZS9saWIvZW5naW5lcy9tb25nby1kYi5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZWFzeXNlYXJjaDpjb3JlL2xpYi9lbmdpbmVzL21pbmltb25nby5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZWFzeXNlYXJjaDpjb3JlL2xpYi9lbmdpbmVzL21vbmdvLXRleHQtaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2Vhc3lzZWFyY2g6Y29yZS9saWIvZ2xvYmFscy5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZWFzeXNlYXJjaDpjb3JlL2xpYi9tYWluLmpzIl0sIm5hbWVzIjpbIk1vbmdvIiwibW9kdWxlIiwibGluayIsInYiLCJFbmdpbmUiLCJkZWZhdWx0IiwiSW5kZXgiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsImNoZWNrIiwiT2JqZWN0IiwiZmllbGRzIiwiU3RyaW5nIiwiaWdub3JlQ29sbGVjdGlvbkNoZWNrIiwiY29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJlbmdpbmUiLCJNZXRlb3IiLCJFcnJvciIsIm5hbWUiLCJfbmFtZSIsInRvTG93ZXJDYXNlIiwiXyIsImV4dGVuZCIsImRlZmF1bHRDb25maWd1cmF0aW9uIiwiZGVmYXVsdFNlYXJjaE9wdGlvbnMiLCJkZWZhdWx0cyIsImxpbWl0Iiwic2tpcCIsInByb3BzIiwib25JbmRleENyZWF0ZSIsInBlcm1pc3Npb24iLCJjb3VudFVwZGF0ZUludGVydmFsTXMiLCJzZWFyY2giLCJzZWFyY2hEZWZpbml0aW9uIiwib3B0aW9ucyIsImNoZWNrU2VhcmNoUGFyYW0iLCJNYXRjaCIsIk9wdGlvbmFsIiwiTnVtYmVyIiwidXNlcklkIiwiT25lT2YiLCJfZ2V0U2VhcmNoT3B0aW9ucyIsImluZGV4IiwiaXNTZXJ2ZXIiLCJleHBvcnREZWZhdWx0IiwiaXNGdW5jdGlvbiIsImNhbGxDb25maWdNZXRob2QiLCJtZXRob2ROYW1lIiwiYXJncyIsImZ1bmMiLCJhcHBseSIsImluZGV4Q29uZmlnIiwiYWxsb3dlZEZpZWxkcyIsIlNlYXJjaENvbGxlY3Rpb24iLCJSZWFjdGl2ZUVuZ2luZSIsImdldFNlYXJjaEN1cnNvciIsInRyYW5zZm9ybSIsImRvYyIsImJlZm9yZVB1Ymxpc2giLCJldmVudCIsInNlYXJjaENvbGxlY3Rpb24iLCJtb25nb0NvbGxlY3Rpb24iLCJfY29sbGVjdGlvbiIsInRyYW5zZm9ybVNlYXJjaERlZmluaXRpb24iLCJpc1N0cmluZyIsIm9iaiIsImVhY2giLCJmaWVsZCIsImluZGV4T3B0aW9ucyIsImlzT2JqZWN0IiwidmFsIiwiaW5kZXhPZiIsImlzQ2xpZW50IiwiZmluZCIsIkN1cnNvciIsIm1vbmdvQ3Vyc29yIiwiY291bnQiLCJpc1JlYWR5IiwicHVibGlzaEhhbmRsZSIsImZldGNoIiwiRnVuY3Rpb24iLCJCb29sZWFuIiwiX21vbmdvQ3Vyc29yIiwiX2NvdW50IiwiX2lzUmVhZHkiLCJfcHVibGlzaEhhbmRsZSIsInN0b3AiLCJlbXB0eUN1cnNvciIsIm9ic2VydmUiLCJpbmRleENvbmZpZ3VyYXRpb24iLCJfaW5kZXhDb25maWd1cmF0aW9uIiwiX2VuZ2luZSIsIl9zZXRVcFB1YmxpY2F0aW9uIiwic3Vic2NyaWJlIiwiX2dldENvdW50IiwiX2dldE1vbmdvQ3Vyc29yIiwiaXNOdW1iZXIiLCJjb3VudERvYyIsImZpbmRPbmUiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50U29ydCIsIl9fc2VhcmNoRGVmaW5pdGlvbiIsIl9fc2VhcmNoT3B0aW9ucyIsIl9fc29ydFBvc2l0aW9uIiwic29ydCIsImdlbmVyYXRlSWQiLCJfaWQiLCJhZGRDdXN0b21GaWVsZHMiLCJkYXRhIiwiZm9yRWFjaCIsImtleSIsImNvbGxlY3Rpb25TY29wZSIsImNvbGxlY3Rpb25OYW1lIiwicHVibGlzaCIsImRlZmluaXRpb25TdHJpbmciLCJvcHRpb25zU3RyaW5nIiwicHVibGljYXRpb25TY29wZSIsImN1cnNvciIsImFkZGVkIiwiaW50ZXJ2YWxJRCIsInNldEludGVydmFsIiwiY2hhbmdlZCIsIm9uU3RvcCIsImNsZWFySW50ZXJ2YWwiLCJyZXN1bHRzSGFuZGxlIiwib2JzZXJ2ZWREb2NzIiwidXBkYXRlRG9jV2l0aEN1c3RvbUZpZWxkcyIsInNvcnRQb3NpdGlvbiIsIm9yaWdpbmFsSWQiLCJzZWFyY2hPcHRpb25zIiwiYWRkZWRBdCIsImF0SW5kZXgiLCJiZWZvcmUiLCJtYXAiLCJkIiwiaW5jbHVkZXMiLCJkb2NJbmRleCIsImxlbmd0aCIsImNoYW5nZWRBdCIsIm9sZERvYyIsIm1vdmVkVG8iLCJmcm9tSW5kZXgiLCJ0b0luZGV4IiwiYmVmb3JlRG9jIiwicmVtb3ZlZEF0IiwicmVtb3ZlZCIsImZpbHRlciIsInJlYWR5IiwiTW9uZ29EQkVuZ2luZSIsImRlZmF1bHRNb25nb0NvbmZpZ3VyYXRpb24iLCJlbmdpbmVTY29wZSIsImFnZ3JlZ2F0aW9uIiwic2VsZWN0b3IiLCJzZWFyY2hPYmplY3QiLCJzZWFyY2hTdHJpbmciLCJmaWVsZFNlbGVjdG9yIiwicHVzaCIsInNlbGVjdG9yUGVyRmllbGQiLCJyZXBsYWNlIiwiZ2V0RmluZE9wdGlvbnMiLCJkaXNhYmxlT3Bsb2ciLCJwb2xsaW5nSW50ZXJ2YWxNcyIsInBvbGxpbmdUaHJvdHRsZU1zIiwiZmluZE9wdGlvbnMiLCJNaW5pbW9uZ29FbmdpbmUiLCJwcm90b3R5cGUiLCJNb25nb1RleHRJbmRleEVuZ2luZSIsIm1vbmdvQ29uZmlndXJhdGlvbiIsInRyaW0iLCIkdGV4dCIsIiRzZWFyY2giLCJ0ZXh0SW5kZXhlc0NvbmZpZyIsIndlaWdodHMiLCJfZW5zdXJlSW5kZXgiLCJFYXN5U2VhcmNoIiwiTW9uZ29EQiIsIk1pbmltb25nbyIsIk1vbmdvVGV4dEluZGV4IiwiZXhwb3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxLQUFKO0FBQVVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ0YsT0FBSyxDQUFDRyxDQUFELEVBQUc7QUFBQ0gsU0FBSyxHQUFDRyxDQUFOO0FBQVE7O0FBQWxCLENBQTNCLEVBQStDLENBQS9DO0FBQWtELElBQUlDLE1BQUo7QUFBV0gsTUFBTSxDQUFDQyxJQUFQLENBQVksVUFBWixFQUF1QjtBQUFDRyxTQUFPLENBQUNGLENBQUQsRUFBRztBQUFDQyxVQUFNLEdBQUNELENBQVA7QUFBUzs7QUFBckIsQ0FBdkIsRUFBOEMsQ0FBOUM7O0FBR3ZFOzs7Ozs7QUFNQSxNQUFNRyxLQUFOLENBQVk7QUFDVjs7Ozs7OztBQU9BQyxhQUFXLENBQUNDLE1BQUQsRUFBUztBQUNsQkMsU0FBSyxDQUFDRCxNQUFELEVBQVNFLE1BQVQsQ0FBTDtBQUNBRCxTQUFLLENBQUNELE1BQU0sQ0FBQ0csTUFBUixFQUFnQixDQUFDQyxNQUFELENBQWhCLENBQUw7QUFDQSxRQUFHLENBQUNKLE1BQU0sQ0FBQ0sscUJBQVgsRUFBa0NKLEtBQUssQ0FBQ0QsTUFBTSxDQUFDTSxVQUFSLEVBQW9CZCxLQUFLLENBQUNlLFVBQTFCLENBQUw7O0FBRWxDLFFBQUksRUFBRVAsTUFBTSxDQUFDUSxNQUFQLFlBQXlCWixNQUEzQixDQUFKLEVBQXdDO0FBQ3RD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LENBQWxDLEVBQWtFLENBQWxFO0FBQXFFLElBQUlxSyxvQkFBSjtBQUF5QnZLLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDRCQUFaLEVBQXlDO0FBQUNHLFNBQU8sQ0FBQ0YsQ0FBRCxFQUFHO0FBQUNxSyx3QkFBb0IsR0FBQ3JLLENBQXJCO0FBQXVCOztBQUFuQyxDQUF6QyxFQUE4RSxDQUE5RSxFIiwiZmlsZSI6Ii9wYWNrYWdlcy9lYXN5c2VhcmNoX2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbydcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUnXG5cbi8qKlxuICogQW4gSW5kZXggcmVwcmVzZW50cyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3Igc2VhcmNoaW5nIHdpdGggRWFzeVNlYXJjaC4gSXQgcmVsaWVzIG9uXG4gKiB0aGUgZ2l2ZW4gZW5naW5lIHRvIGhhdmUgdGhlIHNlYXJjaCBmdW5jdGlvbmFsaXR5IGFuZCBkZWZpbmVzIHRoZSBkYXRhIHRoYXQgc2hvdWxkIGJlIHNlYXJjaGFibGUuXG4gKlxuICogQHR5cGUge0luZGV4fVxuICovXG5jbGFzcyBJbmRleCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIENvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjaGVjayhjb25maWcsIE9iamVjdCk7XG4gICAgY2hlY2soY29uZmlnLmZpZWxkcywgW1N0cmluZ10pO1xuICAgIGlmKCFjb25maWcuaWdub3JlQ29sbGVjdGlvbkNoZWNrKSBjaGVjayhjb25maWcuY29sbGVjdGlvbiwgTW9uZ28uQ29sbGVjdGlvbik7XG5cbiAgICBpZiAoIShjb25maWcuZW5naW5lIGluc3RhbmNlb2YgRW5naW5lKSkge1xuICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignaW52YWxpZC1lbmdpbmUnLCAnZW5naW5lIG5lZWRzIHRvIGJlIGluc3RhbmNlb2YgRW5naW5lJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcubmFtZSlcbiAgICAgIGNvbmZpZy5uYW1lID0gKGNvbmZpZy5jb2xsZWN0aW9uLl9uYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5jb25maWcgPSBfLmV4dGVuZChJbmRleC5kZWZhdWx0Q29uZmlndXJhdGlvbiwgY29uZmlnKTtcbiAgICB0aGlzLmRlZmF1bHRTZWFyY2hPcHRpb25zID0gXy5kZWZhdWx0cyhcbiAgICAgIHt9LFxuICAgICAgdGhpcy5jb25maWcuZGVmYXVsdFNlYXJjaE9wdGlvbnMsXG4gICAgICB7IGxpbWl0OiAxMCwgc2tpcDogMCwgcHJvcHM6IHt9IH0sXG4gICAgKTtcblxuICAgIC8vIEVuZ2luZSBzcGVjaWZpYyBjb2RlIG9uIGluZGV4IGNyZWF0aW9uXG4gICAgY29uZmlnLmVuZ2luZS5vbkluZGV4Q3JlYXRlKHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9yIGFuIGluZGV4LlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGVybWlzc2lvbjogKCkgPT4gdHJ1ZSxcbiAgICAgIGRlZmF1bHRTZWFyY2hPcHRpb25zOiB7fSxcbiAgICAgIGNvdW50VXBkYXRlSW50ZXJ2YWxNczogMjAwMCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCB0aGUgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gc2VhcmNoRGVmaW5pdGlvbiBTZWFyY2ggZGVmaW5pdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgIG9wdGlvbnMgICAgICAgICAgT3B0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7Q3Vyc29yfVxuICAgKi9cbiAgc2VhcmNoKHNlYXJjaERlZmluaXRpb24sIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuY29uZmlnLmVuZ2luZS5jaGVja1NlYXJjaFBhcmFtKHNlYXJjaERlZmluaXRpb24sIHRoaXMuY29uZmlnKTtcblxuICAgIGNoZWNrKG9wdGlvbnMsIHtcbiAgICAgIGxpbWl0OiBNYXRjaC5PcHRpb25hbChOdW1iZXIpLFxuICAgICAgc2tpcDogTWF0Y2guT3B0aW9uYWwoTnVtYmVyKSxcbiAgICAgIHByb3BzOiBNYXRjaC5PcHRpb25hbChPYmplY3QpLFxuICAgICAgdXNlcklkOiBNYXRjaC5PcHRpb25hbChNYXRjaC5PbmVPZihTdHJpbmcsIG51bGwpKSxcbiAgICB9KTtcblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICBzZWFyY2g6IHRoaXMuX2dldFNlYXJjaE9wdGlvbnMob3B0aW9ucyksXG4gICAgICBpbmRleDogdGhpcy5jb25maWcsXG4gICAgfTtcblxuICAgIGlmICghdGhpcy5jb25maWcucGVybWlzc2lvbihvcHRpb25zLnNlYXJjaCkpIHtcbiAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ25vdC1hbGxvd2VkJywgXCJOb3QgYWxsb3dlZCB0byBzZWFyY2ggdGhpcyBpbmRleCFcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmVuZ2luZS5zZWFyY2goc2VhcmNoRGVmaW5pdGlvbiwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VhcmNoIG9wdGlvbnMgYmFzZWQgb24gdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgdG8gdXNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBfZ2V0U2VhcmNoT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKCFNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgICAgIGRlbGV0ZSBvcHRpb25zLnVzZXJJZDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudXNlcklkID09PSBcInVuZGVmaW5lZFwiICYmIE1ldGVvci51c2VySWQpIHtcbiAgICAgIG9wdGlvbnMudXNlcklkID0gTWV0ZW9yLnVzZXJJZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBfLmRlZmF1bHRzKG9wdGlvbnMsIHRoaXMuZGVmYXVsdFNlYXJjaE9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiLyoqXG4gKiBBbiBFbmdpbmUgaXMgdGhlIHRlY2hub2xvZ3kgdXNlZCBmb3Igc2VhcmNoaW5nIHdpdGggRWFzeVNlYXJjaCwgd2l0aFxuICogY3VzdG9taXphYmxlIGNvbmZpZ3VyYXRpb24gdG8gaG93IGl0IGludGVyYWN0cyB3aXRoIHRoZSBkYXRhIGZyb20gdGhlIEluZGV4LlxuICpcbiAqIEB0eXBlIHtFbmdpbmV9XG4gKi9cbmNsYXNzIEVuZ2luZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yID09PSBFbmdpbmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGluaXRpYWxpemUgaW5zdGFuY2Ugb2YgRW5naW5lJyk7XG4gICAgfVxuXG4gICAgaWYgKCFfLmlzRnVuY3Rpb24odGhpcy5zZWFyY2gpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VuZ2luZSBuZWVkcyB0byBpbXBsZW1lbnQgc2VhcmNoIG1ldGhvZCcpO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlnID0gXy5kZWZhdWx0cyh7fSwgY29uZmlnLCB0aGlzLmRlZmF1bHRDb25maWd1cmF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBkZWZhdWx0IGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBkZWZhdWx0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBhIGNvbmZpZ3VyYXRpb24gbWV0aG9kIHdpdGggdGhlIGVuZ2luZSBzY29wZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgTWV0aG9kIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IGFyZ3MgICAgICAgQXJndW1lbnRzIGZvciB0aGUgbWV0aG9kXG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgY2FsbENvbmZpZ01ldGhvZChtZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gICAgY2hlY2sobWV0aG9kTmFtZSwgU3RyaW5nKTtcblxuICAgIGxldCBmdW5jID0gdGhpcy5jb25maWdbbWV0aG9kTmFtZV07XG5cbiAgICBpZiAoZnVuYykge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyIGZvciB2YWxpZGl0eVxuICAgKlxuICAgKiBAcGFyYW0gc2VhcmNoXG4gICAqL1xuICBjaGVja1NlYXJjaFBhcmFtKHNlYXJjaCkge1xuICAgIGNoZWNrKHNlYXJjaCwgU3RyaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKkNvZGUgdG8gcnVuIG9uIGluZGV4IGNyZWF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbmRleENvbmZpZyBJbmRleCBjb25maWd1cmFjdGlvblxuICAgKi9cbiAgb25JbmRleENyZWF0ZShpbmRleENvbmZpZykge1xuICAgIGlmICghaW5kZXhDb25maWcuYWxsb3dlZEZpZWxkcykge1xuICAgICAgaW5kZXhDb25maWcuYWxsb3dlZEZpZWxkcyA9IGluZGV4Q29uZmlnLmZpZWxkcztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5naW5lO1xuIiwiaW1wb3J0IFNlYXJjaENvbGxlY3Rpb24gZnJvbSAnLi9zZWFyY2gtY29sbGVjdGlvbidcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUnXG5cbi8qKlxuICogQSBSZWFjdGl2ZUVuZ2luZSBoYW5kbGVzIHRoZSByZWFjdGl2ZSBsb2dpYywgc3VjaCBhcyBzdWJzY3JpYmluZ1xuICogYW5kIHB1Ymxpc2hpbmcgZG9jdW1lbnRzIGludG8gYSBzZWxmIGNvbnRhaW5lZCBjb2xsZWN0aW9uLlxuICpcbiAqIEB0eXBlIHtSZWFjdGl2ZUVuZ2luZX1cbiAqL1xuY2xhc3MgUmVhY3RpdmVFbmdpbmUgZXh0ZW5kcyBFbmdpbmUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgQ29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICBpZiAodGhpcyA9PT0gdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW5pdGlhbGl6ZSBpbnN0YW5jZSBvZiBSZWFjdGl2ZUVuZ2luZScpO1xuICAgIH1cblxuICAgIGlmICghXy5pc0Z1bmN0aW9uKHRoaXMuZ2V0U2VhcmNoQ3Vyc29yKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdGl2ZSBlbmdpbmUgbmVlZHMgdG8gaW1wbGVtZW50IGdldFNlYXJjaEN1cnNvciBtZXRob2QnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGRlZmF1bHQgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGRlZmF1bHRDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiBfLmRlZmF1bHRzKHt9LCB7XG4gICAgICB0cmFuc2Zvcm06IChkb2MpID0+IGRvYyxcbiAgICAgIGJlZm9yZVB1Ymxpc2g6IChldmVudCwgZG9jKSA9PiBkb2NcbiAgICB9LCBzdXBlci5kZWZhdWx0Q29uZmlndXJhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2RlIHRvIHJ1biBvbiBpbmRleCBjcmVhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5kZXhDb25maWcgSW5kZXggY29uZmlndXJhdGlvblxuICAgKi9cbiAgb25JbmRleENyZWF0ZShpbmRleENvbmZpZykge1xuICAgIHN1cGVyLm9uSW5kZXhDcmVhdGUoaW5kZXhDb25maWcpO1xuICAgIGluZGV4Q29uZmlnLnNlYXJjaENvbGxlY3Rpb24gPSBuZXcgU2VhcmNoQ29sbGVjdGlvbihpbmRleENvbmZpZywgdGhpcyk7XG4gICAgaW5kZXhDb25maWcubW9uZ29Db2xsZWN0aW9uID0gaW5kZXhDb25maWcuc2VhcmNoQ29sbGVjdGlvbi5fY29sbGVjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIHNlYXJjaCBkZWZpbml0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHNlYXJjaERlZmluaXRpb24gU2VhcmNoIGRlZmluaXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICBvcHRpb25zICAgICAgICAgIFNlYXJjaCBhbmQgaW5kZXggb3B0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtU2VhcmNoRGVmaW5pdGlvbihzZWFyY2hEZWZpbml0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKF8uaXNTdHJpbmcoc2VhcmNoRGVmaW5pdGlvbikpIHtcbiAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgXy5lYWNoKG9wdGlvbnMuaW5kZXguZmllbGRzLCBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgb2JqW2ZpZWxkXSA9IHNlYXJjaERlZmluaXRpb247XG4gICAgICB9KTtcblxuICAgICAgc2VhcmNoRGVmaW5pdGlvbiA9IG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VhcmNoRGVmaW5pdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciBmb3IgdmFsaWRpdHlcbiAgICpcbiAgICogQHBhcmFtIHNlYXJjaFxuICAgKiBAcGFyYW0gaW5kZXhPcHRpb25zXG4gICAqL1xuICBjaGVja1NlYXJjaFBhcmFtKHNlYXJjaCwgaW5kZXhPcHRpb25zKSB7XG4gICAgY2hlY2soc2VhcmNoLCBNYXRjaC5PbmVPZihTdHJpbmcsIE9iamVjdCkpO1xuXG4gICAgaWYgKF8uaXNPYmplY3Qoc2VhcmNoKSkge1xuICAgICAgXy5lYWNoKHNlYXJjaCwgZnVuY3Rpb24gKHZhbCwgZmllbGQpIHtcbiAgICAgICAgY2hlY2sodmFsLCBTdHJpbmcpO1xuXG4gICAgICAgIGlmICgtMSA9PT0gXy5pbmRleE9mKGluZGV4T3B0aW9ucy5hbGxvd2VkRmllbGRzLCBmaWVsZCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKGBOb3QgYWxsb3dlZCB0byBzZWFyY2ggb3ZlciBmaWVsZCBcIiR7ZmllbGR9XCJgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWN0aXZlbHkgc2VhcmNoIG9uIHRoZSBjb2xsZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2VhcmNoRGVmaW5pdGlvbiBTZWFyY2ggZGVmaW5pdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgICAgICAgICBPcHRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtDdXJzb3J9XG4gICAqL1xuICBzZWFyY2goc2VhcmNoRGVmaW5pdGlvbiwgb3B0aW9ucykge1xuICAgIGlmIChNZXRlb3IuaXNDbGllbnQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmluZGV4LnNlYXJjaENvbGxlY3Rpb24uZmluZChzZWFyY2hEZWZpbml0aW9uLCBvcHRpb25zLnNlYXJjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFNlYXJjaEN1cnNvcihcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1TZWFyY2hEZWZpbml0aW9uKHNlYXJjaERlZmluaXRpb24sIG9wdGlvbnMpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZUVuZ2luZTtcbiIsIi8qKlxuICogQSBDdXJzb3IgcmVwcmVzZW50cyBhIHBvaW50ZXIgdG8gdGhlIHNlYXJjaCByZXN1bHRzLiBTaW5jZSBpdCdzIHNwZWNpZmljXG4gKiB0byBFYXN5U2VhcmNoIGl0IGNhbiBhbHNvIGJlIHVzZWQgdG8gY2hlY2sgZm9yIHZhbGlkIHJldHVybiB2YWx1ZXMuXG4gKlxuICogQHR5cGUge0N1cnNvcn1cbiAqL1xuY2xhc3MgQ3Vyc29yIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7TW9uZ28uQ3Vyc29yfSBtb25nb0N1cnNvciAgIFJlZmVyZW5jZWQgbW9uZ28gY3Vyc29yXG4gICAqIEBwYXJhbSB7TnVtYmVyfSAgICAgICBjb3VudCAgICAgICAgIENvdW50IG9mIGFsbCBkb2N1bWVudHMgZm91bmRcbiAgICogQHBhcmFtIHtCb29sZWFufSAgICAgIGlzUmVhZHkgICAgICAgQ3Vyc29yIGlzIHJlYWR5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICBwdWJsaXNoSGFuZGxlIFB1Ymxpc2ggaGFuZGxlIHRvIHN0b3AgaWYgb24gY2xpZW50XG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IobW9uZ29DdXJzb3IsIGNvdW50LCBpc1JlYWR5ID0gdHJ1ZSwgcHVibGlzaEhhbmRsZSA9IG51bGwpIHtcbiAgICBjaGVjayhtb25nb0N1cnNvci5mZXRjaCwgRnVuY3Rpb24pO1xuICAgIGNoZWNrKGNvdW50LCBOdW1iZXIpO1xuICAgIGNoZWNrKGlzUmVhZHksIE1hdGNoLk9wdGlvbmFsKEJvb2xlYW4pKTtcbiAgICBjaGVjayhwdWJsaXNoSGFuZGxlLCBNYXRjaC5PbmVPZihudWxsLCBPYmplY3QpKTtcblxuICAgIHRoaXMuX21vbmdvQ3Vyc29yID0gbW9uZ29DdXJzb3I7XG4gICAgdGhpcy5fY291bnQgPSBjb3VudDtcbiAgICB0aGlzLl9pc1JlYWR5ID0gaXNSZWFkeTtcbiAgICB0aGlzLl9wdWJsaXNoSGFuZGxlID0gcHVibGlzaEhhbmRsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCB0aGUgc2VhcmNoIHJlc3VsdHMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtbT2JqZWN0XX1cbiAgICovXG4gIGZldGNoKCkge1xuICAgIHJldHVybiB0aGlzLl9tb25nb0N1cnNvci5mZXRjaCgpO1xuICB9XG5cbiAvKipcbiAgKiBTdG9wIHRoZSBzdWJzY3JpcHRpb24gaGFuZGxlIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3Vyc29yLlxuICAqL1xuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9wdWJsaXNoSGFuZGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHVibGlzaEhhbmRsZS5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBjb3VudCBvZiBhbGwgZG9jdW1lbnRzIGZvdW5kXG4gICAqXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGlmIHRoZSBjdXJzb3IgaXMgcmVhZHkuXG4gICAqXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNSZWFkeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHJhdyBtb25nbyBjdXJzb3IuXG4gICAqXG4gICAqIEByZXR1cm5zIHtNb25nby5DdXJzb3J9XG4gICAqL1xuICBnZXQgbW9uZ29DdXJzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbmdvQ3Vyc29yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGZha2UgZW1wdHkgY3Vyc29yLCB3aXRob3V0IGRhdGEuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGVtcHR5Q3Vyc29yKCkge1xuICAgIHJldHVybiB7IGZldGNoOiAoKSA9PiBbXSwgb2JzZXJ2ZTogKCkgPT4geyByZXR1cm4geyBzdG9wOiAoKSA9PiBudWxsIH07IH0sIHN0b3A6ICgpID0+IHt9IH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Vyc29yO1xuIiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nXG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJ1xuaW1wb3J0IFJlYWN0aXZlRW5naW5lIGZyb20gJy4vcmVhY3RpdmUtZW5naW5lJ1xuXG4vKipcbiAqIEEgc2VhcmNoIGNvbGxlY3Rpb24gcmVwcmVzZW50cyBhIHJlYWN0aXZlIGNvbGxlY3Rpb24gb24gdGhlIGNsaWVudCxcbiAqIHdoaWNoIGlzIHVzZWQgYnkgdGhlIFJlYWN0aXZlRW5naW5lIGZvciBzZWFyY2hpbmcuXG4gKlxuICogQHR5cGUge1NlYXJjaENvbGxlY3Rpb259XG4gKi9cbmNsYXNzIFNlYXJjaENvbGxlY3Rpb24ge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgaW5kZXhDb25maWd1cmF0aW9uIEluZGV4IGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIHtSZWFjdGl2ZUVuZ2luZX0gZW5naW5lICAgICAgICAgICAgIFJlYWN0aXZlIEVuZ2luZVxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKGluZGV4Q29uZmlndXJhdGlvbiwgZW5naW5lKSB7XG4gICAgY2hlY2soaW5kZXhDb25maWd1cmF0aW9uLCBPYmplY3QpO1xuICAgIGNoZWNrKGluZGV4Q29uZmlndXJhdGlvbi5uYW1lLCBNYXRjaC5PbmVPZihTdHJpbmcsIG51bGwpKTtcblxuICAgIGlmICghKGVuZ2luZSBpbnN0YW5jZW9mIFJlYWN0aXZlRW5naW5lKSkge1xuICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignaW52YWxpZC1lbmdpbmUnLCAnZW5naW5lIG5lZWRzIHRvIGJlIGluc3RhbmNlb2YgUmVhY3RpdmVFbmdpbmUnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbmRleENvbmZpZ3VyYXRpb24gPSBpbmRleENvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fbmFtZSA9IGAke2luZGV4Q29uZmlndXJhdGlvbi5uYW1lfS9lYXN5U2VhcmNoYDtcbiAgICB0aGlzLl9lbmdpbmUgPSBlbmdpbmU7XG5cbiAgICBpZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24odGhpcy5fbmFtZSk7XG4gICAgfSBlbHNlIGlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX3NldFVwUHVibGljYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5hbWVcbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlbmdpbmVcbiAgICpcbiAgICogQHJldHVybnMge1JlYWN0aXZlRW5naW5lfVxuICAgKi9cbiAgZ2V0IGVuZ2luZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5naW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgZG9jdW1lbnRzIG9uIHRoZSBjbGllbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZWFyY2hEZWZpbml0aW9uIFNlYXJjaCBkZWZpbml0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICAgICAgICAgIE9wdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge0N1cnNvcn1cbiAgICovXG4gIGZpbmQoc2VhcmNoRGVmaW5pdGlvbiwgb3B0aW9ucykge1xuICAgIGlmICghTWV0ZW9yLmlzQ2xpZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmQgY2FuIG9ubHkgYmUgdXNlZCBvbiBjbGllbnQnKTtcbiAgICB9XG5cbiAgICBsZXQgcHVibGlzaEhhbmRsZSA9IE1ldGVvci5zdWJzY3JpYmUodGhpcy5uYW1lLCBzZWFyY2hEZWZpbml0aW9uLCBvcHRpb25zKTtcblxuICAgIGxldCBjb3VudCA9IHRoaXMuX2dldENvdW50KHNlYXJjaERlZmluaXRpb24pO1xuICAgIGxldCBtb25nb0N1cnNvciA9IHRoaXMuX2dldE1vbmdvQ3Vyc29yKHNlYXJjaERlZmluaXRpb24sIG9wdGlvbnMpO1xuXG4gICAgaWYgKCFfLmlzTnVtYmVyKGNvdW50KSkge1xuICAgICAgcmV0dXJuIG5ldyBDdXJzb3IobW9uZ29DdXJzb3IsIDAsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEN1cnNvcihtb25nb0N1cnNvciwgY291bnQsIHRydWUsIHB1Ymxpc2hIYW5kbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY291bnQgb2YgdGhlIGN1cnNvci5cbiAgICpcbiAgICogQHBhcmFtcyB7T2JqZWN0fSBzZWFyY2hEZWZpbml0aW9uIFNlYXJjaCBkZWZpbml0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtDdXJzb3IuY291bnR9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0Q291bnQoc2VhcmNoRGVmaW5pdGlvbikge1xuICAgIGxldCBjb3VudERvYyA9IHRoaXMuX2NvbGxlY3Rpb24uZmluZE9uZSgnc2VhcmNoQ291bnQnICsgSlNPTi5zdHJpbmdpZnkoc2VhcmNoRGVmaW5pdGlvbikpO1xuXG4gICAgaWYgKGNvdW50RG9jKSB7XG4gICAgICByZXR1cm4gY291bnREb2MuY291bnQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9uZ28gY3Vyc29yIG9uIHRoZSBjbGllbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZWFyY2hEZWZpbml0aW9uIFNlYXJjaCBkZWZpbml0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICAgICAgICAgIFNlYXJjaCBvcHRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtDdXJzb3J9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0TW9uZ29DdXJzb3Ioc2VhcmNoRGVmaW5pdGlvbiwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNsaWVudFNvcnQgPSB0aGlzLmVuZ2luZS5jYWxsQ29uZmlnTWV0aG9kKCdjbGllbnRTb3J0Jywgc2VhcmNoRGVmaW5pdGlvbiwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbi5maW5kKFxuICAgICAgeyBfX3NlYXJjaERlZmluaXRpb246IEpTT04uc3RyaW5naWZ5KHNlYXJjaERlZmluaXRpb24pLCBfX3NlYXJjaE9wdGlvbnM6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucHJvcHMpIH0sXG4gICAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogKGRvYykgPT4ge1xuICAgICAgICAgIGRlbGV0ZSBkb2MuX19zZWFyY2hEZWZpbml0aW9uO1xuICAgICAgICAgIGRlbGV0ZSBkb2MuX19zZWFyY2hPcHRpb25zO1xuICAgICAgICAgIGRlbGV0ZSBkb2MuX19zb3J0UG9zaXRpb247XG5cbiAgICAgICAgICBkb2MgPSB0aGlzLmVuZ2luZS5jb25maWcudHJhbnNmb3JtKGRvYyk7XG5cbiAgICAgICAgICByZXR1cm4gZG9jO1xuICAgICAgICB9LFxuICAgICAgICBzb3J0OiAoY2xpZW50U29ydCA/IGNsaWVudFNvcnQgOiBbJ19fc29ydFBvc2l0aW9uJ10pXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSB1bmlxdWUgZG9jdW1lbnQgaWQgZm9yIHB1YmxpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBkb2NcbiAgICpcbiAgICogQHJldHVybnMgc3RyaW5nXG4gICAqL1xuICBnZW5lcmF0ZUlkKGRvYykge1xuICAgIHJldHVybiBkb2MuX2lkICsgZG9jLl9fc2VhcmNoRGVmaW5pdGlvbiArIGRvYy5fX3NlYXJjaE9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGN1c3RvbSBmaWVsZHMgdG8gdGhlIGdpdmVuIGRvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvY1xuICAgKiBAcGFyYW0ge09iamVjdH0gICBkYXRhXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgYWRkQ3VzdG9tRmllbGRzKGRvYywgZGF0YSkge1xuICAgIF8uZm9yRWFjaChkYXRhLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgIGRvY1snX18nICsga2V5XSA9IHZhbDtcbiAgICB9KTtcblxuICAgIHJldHVybiBkb2M7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIHB1YmxpY2F0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldFVwUHVibGljYXRpb24oKSB7XG4gICAgdmFyIGNvbGxlY3Rpb25TY29wZSA9IHRoaXMsXG4gICAgICBjb2xsZWN0aW9uTmFtZSA9IHRoaXMubmFtZTtcblxuICAgIE1ldGVvci5wdWJsaXNoKGNvbGxlY3Rpb25OYW1lLCBmdW5jdGlvbiAoc2VhcmNoRGVmaW5pdGlvbiwgb3B0aW9ucykge1xuICAgICAgY2hlY2soc2VhcmNoRGVmaW5pdGlvbiwgTWF0Y2guT25lT2YoU3RyaW5nLCBPYmplY3QpKTtcbiAgICAgIGNoZWNrKG9wdGlvbnMsIE9iamVjdCk7XG5cbiAgICAgIGxldCBkZWZpbml0aW9uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoc2VhcmNoRGVmaW5pdGlvbiksXG4gICAgICAgIG9wdGlvbnNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLnByb3BzKTtcblxuICAgICAgb3B0aW9ucy51c2VySWQgPSB0aGlzLnVzZXJJZDtcbiAgICAgIG9wdGlvbnMucHVibGljYXRpb25TY29wZSA9IHRoaXM7XG5cbiAgICAgIGlmICghY29sbGVjdGlvblNjb3BlLl9pbmRleENvbmZpZ3VyYXRpb24ucGVybWlzc2lvbihvcHRpb25zKSkge1xuICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYWxsb3dlZCcsIFwiWW91J3JlIG5vdCBhbGxvd2VkIHRvIHNlYXJjaCB0aGlzIGluZGV4IVwiKTtcbiAgICAgIH1cblxuICAgICAgY29sbGVjdGlvblNjb3BlLmVuZ2luZS5jaGVja1NlYXJjaFBhcmFtKHNlYXJjaERlZmluaXRpb24sIGNvbGxlY3Rpb25TY29wZS5faW5kZXhDb25maWd1cmF0aW9uKTtcblxuICAgICAgbGV0IGN1cnNvciA9IGNvbGxlY3Rpb25TY29wZS5lbmdpbmUuc2VhcmNoKHNlYXJjaERlZmluaXRpb24sIHtcbiAgICAgICAgc2VhcmNoOiBvcHRpb25zLFxuICAgICAgICBpbmRleDogY29sbGVjdGlvblNjb3BlLl9pbmRleENvbmZpZ3VyYXRpb25cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb3VudCA9IGN1cnNvci5jb3VudCgpO1xuXG4gICAgICB0aGlzLmFkZGVkKGNvbGxlY3Rpb25OYW1lLCAnc2VhcmNoQ291bnQnICsgZGVmaW5pdGlvblN0cmluZywgeyBjb3VudCB9KTtcblxuICAgICAgbGV0IGludGVydmFsSUQ7XG5cbiAgICAgIGlmIChjb2xsZWN0aW9uU2NvcGUuX2luZGV4Q29uZmlndXJhdGlvbi5jb3VudFVwZGF0ZUludGVydmFsTXMpIHtcbiAgICAgICAgaW50ZXJ2YWxJRCA9IE1ldGVvci5zZXRJbnRlcnZhbChcbiAgICAgICAgICAoKSA9PiB0aGlzLmNoYW5nZWQoXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgICAgICdzZWFyY2hDb3VudCcgKyBkZWZpbml0aW9uU3RyaW5nLFxuICAgICAgICAgICAgeyBjb3VudDogY3Vyc29yLm1vbmdvQ3Vyc29yLmNvdW50ICYmIGN1cnNvci5tb25nb0N1cnNvci5jb3VudCgpIHx8IDAgfVxuICAgICAgICAgICksXG4gICAgICAgICAgY29sbGVjdGlvblNjb3BlLl9pbmRleENvbmZpZ3VyYXRpb24uY291bnRVcGRhdGVJbnRlcnZhbE1zXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25TdG9wKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW50ZXJ2YWxJRCAmJiBNZXRlb3IuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgcmVzdWx0c0hhbmRsZSAmJiByZXN1bHRzSGFuZGxlLnN0b3AoKTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgb2JzZXJ2ZWREb2NzID0gW107XG5cbiAgICAgIGNvbnN0IHVwZGF0ZURvY1dpdGhDdXN0b21GaWVsZHMgPSAoZG9jLCBzb3J0UG9zaXRpb24pID0+IGNvbGxlY3Rpb25TY29wZVxuICAgICAgICAuYWRkQ3VzdG9tRmllbGRzKGRvYywge1xuICAgICAgICAgIG9yaWdpbmFsSWQ6IGRvYy5faWQsXG4gICAgICAgICAgc29ydFBvc2l0aW9uLFxuICAgICAgICAgIHNlYXJjaERlZmluaXRpb246IGRlZmluaXRpb25TdHJpbmcsXG4gICAgICAgICAgc2VhcmNoT3B0aW9uczogb3B0aW9uc1N0cmluZyxcbiAgICAgICAgfSk7XG5cbiAgICAgIGxldCByZXN1bHRzSGFuZGxlID0gY3Vyc29yLm1vbmdvQ3Vyc29yLm9ic2VydmUoe1xuICAgICAgICBhZGRlZEF0OiAoZG9jLCBhdEluZGV4LCBiZWZvcmUpID0+IHtcbiAgICAgICAgICBkb2MgPSBjb2xsZWN0aW9uU2NvcGUuZW5naW5lLmNvbmZpZy5iZWZvcmVQdWJsaXNoKCdhZGRlZEF0JywgZG9jLCBhdEluZGV4LCBiZWZvcmUpO1xuICAgICAgICAgIGRvYyA9IHVwZGF0ZURvY1dpdGhDdXN0b21GaWVsZHMoZG9jLCBhdEluZGV4KTtcblxuICAgICAgICAgIHRoaXMuYWRkZWQoY29sbGVjdGlvbk5hbWUsIGNvbGxlY3Rpb25TY29wZS5nZW5lcmF0ZUlkKGRvYyksIGRvYyk7XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIFJlb3JkZXIgYWxsIG9ic2VydmVkIGRvY3MgdG8ga2VlcCB2YWxpZCBzb3J0aW5nLiBIZXJlIHdlIGFkanVzdCB0aGVcbiAgICAgICAgICAgKiBzb3J0UG9zaXRpb24gbnVtYmVyIGZpZWxkIHRvIGdpdmUgc3BhY2UgZm9yIHRoZSBuZXdseSBhZGRlZCBkb2NcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAob2JzZXJ2ZWREb2NzLm1hcChkID0+IGQuX19zb3J0UG9zaXRpb24pLmluY2x1ZGVzKGF0SW5kZXgpKSB7XG4gICAgICAgICAgICBvYnNlcnZlZERvY3MgPSBvYnNlcnZlZERvY3MubWFwKChkb2MsIGRvY0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChkb2MuX19zb3J0UG9zaXRpb24gPj0gYXRJbmRleCkge1xuICAgICAgICAgICAgICAgIGRvYyA9IGNvbGxlY3Rpb25TY29wZS5hZGRDdXN0b21GaWVsZHMoZG9jLCB7XG4gICAgICAgICAgICAgICAgICBzb3J0UG9zaXRpb246IGRvYy5fX3NvcnRQb3NpdGlvbiArIDEsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgdGhyb3cgY2hhbmdlZCBldmVudCBvbiBsYXN0IGRvYyBhcyBpdCB3aWxsIGJlIHJlbW92ZWQgZnJvbSBjdXJzb3JcbiAgICAgICAgICAgICAgICBpZiAoZG9jSW5kZXggPCBvYnNlcnZlZERvY3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWQoXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uU2NvcGUuZ2VuZXJhdGVJZChkb2MpLFxuICAgICAgICAgICAgICAgICAgICBkb2NcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9ic2VydmVkRG9jcyA9IFsuLi5vYnNlcnZlZERvY3MgLCBkb2NdO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VkQXQ6IChkb2MsIG9sZERvYywgYXRJbmRleCkgPT4ge1xuICAgICAgICAgIGRvYyA9IGNvbGxlY3Rpb25TY29wZS5lbmdpbmUuY29uZmlnLmJlZm9yZVB1Ymxpc2goJ2NoYW5nZWRBdCcsIGRvYywgb2xkRG9jLCBhdEluZGV4KTtcbiAgICAgICAgICBkb2MgPSBjb2xsZWN0aW9uU2NvcGUuYWRkQ3VzdG9tRmllbGRzKGRvYywge1xuICAgICAgICAgICAgc2VhcmNoRGVmaW5pdGlvbjogZGVmaW5pdGlvblN0cmluZyxcbiAgICAgICAgICAgIHNlYXJjaE9wdGlvbnM6IG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBzb3J0UG9zaXRpb246IGF0SW5kZXgsXG4gICAgICAgICAgICBvcmlnaW5hbElkOiBkb2MuX2lkXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLmNoYW5nZWQoY29sbGVjdGlvbk5hbWUsIGNvbGxlY3Rpb25TY29wZS5nZW5lcmF0ZUlkKGRvYyksIGRvYyk7XG4gICAgICAgIH0sXG4gICAgICAgIG1vdmVkVG86IChkb2MsIGZyb21JbmRleCwgdG9JbmRleCwgYmVmb3JlKSA9PiB7XG4gICAgICAgICAgZG9jID0gY29sbGVjdGlvblNjb3BlLmVuZ2luZS5jb25maWcuYmVmb3JlUHVibGlzaCgnbW92ZWRUbycsIGRvYywgZnJvbUluZGV4LCB0b0luZGV4LCBiZWZvcmUpO1xuICAgICAgICAgIGRvYyA9IHVwZGF0ZURvY1dpdGhDdXN0b21GaWVsZHMoZG9jLCB0b0luZGV4KTtcblxuICAgICAgICAgIGxldCBiZWZvcmVEb2MgPSBjb2xsZWN0aW9uU2NvcGUuX2luZGV4Q29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbmRPbmUoYmVmb3JlKTtcblxuICAgICAgICAgIGlmIChiZWZvcmVEb2MpIHtcbiAgICAgICAgICAgIGJlZm9yZURvYyA9IGNvbGxlY3Rpb25TY29wZS5hZGRDdXN0b21GaWVsZHMoYmVmb3JlRG9jLCB7XG4gICAgICAgICAgICAgIHNlYXJjaERlZmluaXRpb246IGRlZmluaXRpb25TdHJpbmcsXG4gICAgICAgICAgICAgIHNlYXJjaE9wdGlvbnM6IG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICAgIHNvcnRQb3NpdGlvbjogZnJvbUluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZChjb2xsZWN0aW9uTmFtZSwgY29sbGVjdGlvblNjb3BlLmdlbmVyYXRlSWQoYmVmb3JlRG9jKSwgYmVmb3JlRG9jKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNoYW5nZWQoY29sbGVjdGlvbk5hbWUsIGNvbGxlY3Rpb25TY29wZS5nZW5lcmF0ZUlkKGRvYyksIGRvYyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZWRBdDogKGRvYywgYXRJbmRleCkgPT4ge1xuICAgICAgICAgIGRvYyA9IGNvbGxlY3Rpb25TY29wZS5lbmdpbmUuY29uZmlnLmJlZm9yZVB1Ymxpc2goJ3JlbW92ZWRBdCcsIGRvYywgYXRJbmRleCk7XG4gICAgICAgICAgZG9jID0gY29sbGVjdGlvblNjb3BlLmFkZEN1c3RvbUZpZWxkcyhcbiAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VhcmNoRGVmaW5pdGlvbjogZGVmaW5pdGlvblN0cmluZyxcbiAgICAgICAgICAgICAgc2VhcmNoT3B0aW9uczogb3B0aW9uc1N0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVkKGNvbGxlY3Rpb25OYW1lLCBjb2xsZWN0aW9uU2NvcGUuZ2VuZXJhdGVJZChkb2MpKTtcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogQWRqdXN0IHNvcnQgcG9zaXRpb24gZm9yIGFsbCBkb2NzIGFmdGVyIHRoZSByZW1vdmVkIGRvYyBhbmRcbiAgICAgICAgICAgKiByZW1vdmUgdGhlIGRvYyBmcm9tIHRoZSBvYnNlcnZlZCBkb2NzIGFycmF5XG4gICAgICAgICAgICovXG4gICAgICAgICAgb2JzZXJ2ZWREb2NzID0gb2JzZXJ2ZWREb2NzLm1hcChkb2MgPT4ge1xuICAgICAgICAgICAgaWYgKGRvYy5fX3NvcnRQb3NpdGlvbiA+IGF0SW5kZXgpIHtcbiAgICAgICAgICAgICAgZG9jLl9fc29ydFBvc2l0aW9uIC09IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgICAgfSkuZmlsdGVyKFxuICAgICAgICAgICAgZCA9PiBjb2xsZWN0aW9uU2NvcGUuZ2VuZXJhdGVJZChkKSAhPT0gY29sbGVjdGlvblNjb3BlLmdlbmVyYXRlSWQoZG9jKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm9uU3RvcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc3VsdHNIYW5kbGUuc3RvcCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVhZHkoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDb2xsZWN0aW9uO1xuIiwiaW1wb3J0IEN1cnNvciBmcm9tICcuLi9jb3JlL2N1cnNvcic7XG5pbXBvcnQgUmVhY3RpdmVFbmdpbmUgZnJvbSAnLi4vY29yZS9yZWFjdGl2ZS1lbmdpbmUnO1xuXG4vKipcbiAqIFRoZSBNb25nb0RCRW5naW5lIGxldHMgeW91IHNlYXJjaCB0aGUgaW5kZXggb24gdGhlIHNlcnZlciBzaWRlIHdpdGggTW9uZ29EQi4gU3Vic2NyaXB0aW9ucyBhbmQgcHVibGljYXRpb25zXG4gKiBhcmUgaGFuZGxlZCB3aXRoaW4gdGhlIEVuZ2luZS5cbiAqXG4gKiBAdHlwZSB7TW9uZ29EQkVuZ2luZX1cbiAqL1xuY2xhc3MgTW9uZ29EQkVuZ2luZSBleHRlbmRzIFJlYWN0aXZlRW5naW5lIHtcbiAgLyoqXG4gICAqIFJldHVybiBkZWZhdWx0IGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBkZWZhdWx0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gXy5kZWZhdWx0cyh7fSwgTW9uZ29EQkVuZ2luZS5kZWZhdWx0TW9uZ29Db25maWd1cmF0aW9uKHRoaXMpLCBzdXBlci5kZWZhdWx0Q29uZmlndXJhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG1vbmdvIGNvbmZpZ3VyYXRpb24sIHVzZWQgaW4gY29uc3RydWN0b3IgYW5kIE1pbmltb25nb0VuZ2luZSB0byBnZXQgdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbmdpbmVTY29wZSBTY29wZSBvZiB0aGUgZW5naW5lXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdE1vbmdvQ29uZmlndXJhdGlvbihlbmdpbmVTY29wZSkge1xuICAgIHJldHVybiB7XG4gICAgICBhZ2dyZWdhdGlvbjogJyRvcicsXG4gICAgICBzZWxlY3RvcihzZWFyY2hPYmplY3QsIG9wdGlvbnMsIGFnZ3JlZ2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0ge307XG5cbiAgICAgICAgc2VsZWN0b3JbYWdncmVnYXRpb25dID0gW107XG5cbiAgICAgICAgXy5lYWNoKHNlYXJjaE9iamVjdCwgKHNlYXJjaFN0cmluZywgZmllbGQpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWVsZFNlbGVjdG9yID0gZW5naW5lU2NvcGUuY2FsbENvbmZpZ01ldGhvZChcbiAgICAgICAgICAgICdzZWxlY3RvclBlckZpZWxkJywgZmllbGQsIHNlYXJjaFN0cmluZywgb3B0aW9uc1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoZmllbGRTZWxlY3Rvcikge1xuICAgICAgICAgICAgc2VsZWN0b3JbYWdncmVnYXRpb25dLnB1c2goZmllbGRTZWxlY3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICB9LFxuICAgICAgc2VsZWN0b3JQZXJGaWVsZChmaWVsZCwgc2VhcmNoU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0ge307XG5cbiAgICAgICAgc2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nLnJlcGxhY2UoLyhcXFd7MX0pL2csICdcXFxcJDEnKTtcbiAgICAgICAgc2VsZWN0b3JbZmllbGRdID0geyAnJHJlZ2V4JyA6IGAuKiR7c2VhcmNoU3RyaW5nfS4qYCwgJyRvcHRpb25zJyA6ICdpJ307XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgfSxcbiAgICAgIHNvcnQoc2VhcmNoT2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmluZGV4LmZpZWxkcztcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZmluZCBvcHRpb25zIGZvciB0aGUgbW9uZ28gZmluZCBxdWVyeS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaERlZmluaXRpb24gU2VhcmNoIGRlZmluaXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgICAgICAgICAgU2VhcmNoIGFuZCBpbmRleCBvcHRpb25zXG4gICAqL1xuICBnZXRGaW5kT3B0aW9ucyhzZWFyY2hEZWZpbml0aW9uLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNraXA6IG9wdGlvbnMuc2VhcmNoLnNraXAsXG4gICAgICBsaW1pdDogb3B0aW9ucy5zZWFyY2gubGltaXQsXG4gICAgICBkaXNhYmxlT3Bsb2c6IHRoaXMuY29uZmlnLmRpc2FibGVPcGxvZyxcbiAgICAgIHBvbGxpbmdJbnRlcnZhbE1zOiB0aGlzLmNvbmZpZy5wb2xsaW5nSW50ZXJ2YWxNcyxcbiAgICAgIHBvbGxpbmdUaHJvdHRsZU1zOiB0aGlzLmNvbmZpZy5wb2xsaW5nVGhyb3R0bGVNcyxcbiAgICAgIHNvcnQ6IHRoaXMuY2FsbENvbmZpZ01ldGhvZCgnc29ydCcsIHNlYXJjaERlZmluaXRpb24sIG9wdGlvbnMpLFxuICAgICAgZmllbGRzOiB0aGlzLmNhbGxDb25maWdNZXRob2QoJ2ZpZWxkcycsIHNlYXJjaERlZmluaXRpb24sIG9wdGlvbnMpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHJlYWN0aXZlIHNlYXJjaCBjdXJzb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hEZWZpbml0aW9uIFNlYXJjaCBkZWZpbml0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICAgICAgICAgIFNlYXJjaCBhbmQgaW5kZXggb3B0aW9uc1xuICAgKi9cbiAgZ2V0U2VhcmNoQ3Vyc29yKHNlYXJjaERlZmluaXRpb24sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuY2FsbENvbmZpZ01ldGhvZChcbiAgICAgICAgJ3NlbGVjdG9yJyxcbiAgICAgICAgc2VhcmNoRGVmaW5pdGlvbixcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgdGhpcy5jb25maWcuYWdncmVnYXRpb25cbiAgICAgICksXG4gICAgICBmaW5kT3B0aW9ucyA9IHRoaXMuZ2V0RmluZE9wdGlvbnMoc2VhcmNoRGVmaW5pdGlvbiwgb3B0aW9ucyksXG4gICAgICBjb2xsZWN0aW9uID0gb3B0aW9ucy5pbmRleC5jb2xsZWN0aW9uO1xuXG4gICAgY2hlY2sob3B0aW9ucywgT2JqZWN0KTtcbiAgICBjaGVjayhzZWxlY3RvciwgT2JqZWN0KTtcbiAgICBjaGVjayhmaW5kT3B0aW9ucywgT2JqZWN0KTtcblxuICAgIHJldHVybiBuZXcgQ3Vyc29yKFxuICAgICAgY29sbGVjdGlvbi5maW5kKHNlbGVjdG9yLCBmaW5kT3B0aW9ucyksXG4gICAgICBjb2xsZWN0aW9uLmZpbmQoc2VsZWN0b3IpLmNvdW50KClcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbmdvREJFbmdpbmU7XG4iLCJpbXBvcnQgRW5naW5lIGZyb20gJy4uL2NvcmUvZW5naW5lJztcbmltcG9ydCBSZWFjdGl2ZUVuZ2luZSBmcm9tICcuLi9jb3JlL3JlYWN0aXZlLWVuZ2luZSc7XG5pbXBvcnQgTW9uZ29EQkVuZ2luZSBmcm9tICcuL21vbmdvLWRiJztcblxuLyoqXG4gKiBUaGUgTWluaW1vbmdFbmdpbmUgbGV0cyB5b3Ugc2VhcmNoIHRoZSBpbmRleCBvbiB0aGUgY2xpZW50LXNpZGUuXG4gKlxuICogQHR5cGUge01pbmltb25nb0VuZ2luZX1cbiAqL1xuY2xhc3MgTWluaW1vbmdvRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgLyoqXG4gICAqIFJldHVybiBkZWZhdWx0IGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBkZWZhdWx0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gXy5kZWZhdWx0cyh7fSwgTW9uZ29EQkVuZ2luZS5kZWZhdWx0TW9uZ29Db25maWd1cmF0aW9uKHRoaXMpLCBzdXBlci5kZWZhdWx0Q29uZmlndXJhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggdGhlIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2VhcmNoRGVmaW5pdGlvbiBTZWFyY2ggZGVmaW5pdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgICAgICAgICBPYmplY3Qgb2Ygb3B0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7Y3Vyc29yfVxuICAgKi9cbiAgc2VhcmNoKHNlYXJjaERlZmluaXRpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAoIU1ldGVvci5pc0NsaWVudCkge1xuICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignb25seS1jbGllbnQnLCAnTWluaW1vbmdvIGNhbiBvbmx5IGJlIHVzZWQgb24gdGhlIGNsaWVudCcpO1xuICAgIH1cblxuICAgIHNlYXJjaERlZmluaXRpb24gPSB0aGlzLnRyYW5zZm9ybVNlYXJjaERlZmluaXRpb24oc2VhcmNoRGVmaW5pdGlvbiwgb3B0aW9ucyk7XG5cbiAgICAvLyBjaGVjaygpIGNhbGxzIGFyZSBpbiBnZXRTZWFyY2hDdXJzb3IgbWV0aG9kXG4gICAgcmV0dXJuIE1vbmdvREJFbmdpbmUucHJvdG90eXBlLmdldFNlYXJjaEN1cnNvci5hcHBseSh0aGlzLCBbc2VhcmNoRGVmaW5pdGlvbiwgb3B0aW9uc10pO1xuICB9XG59XG5cbk1pbmltb25nb0VuZ2luZS5wcm90b3R5cGUuY2hlY2tTZWFyY2hQYXJhbSA9IFJlYWN0aXZlRW5naW5lLnByb3RvdHlwZS5jaGVja1NlYXJjaFBhcmFtO1xuTWluaW1vbmdvRW5naW5lLnByb3RvdHlwZS50cmFuc2Zvcm1TZWFyY2hEZWZpbml0aW9uID0gUmVhY3RpdmVFbmdpbmUucHJvdG90eXBlLnRyYW5zZm9ybVNlYXJjaERlZmluaXRpb247XG5cbk1pbmltb25nb0VuZ2luZS5wcm90b3R5cGUuZ2V0RmluZE9wdGlvbnMgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICBsZXQgZmluZE9wdGlvbnMgPSBNb25nb0RCRW5naW5lLnByb3RvdHlwZS5nZXRGaW5kT3B0aW9ucy5hcHBseSh0aGlzLCBhcmdzKTtcblxuICBmaW5kT3B0aW9ucy50cmFuc2Zvcm0gPSB0aGlzLmNvbmZpZy50cmFuc2Zvcm07XG5cbiAgcmV0dXJuIGZpbmRPcHRpb25zO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWluaW1vbmdvRW5naW5lO1xuIiwiaW1wb3J0IFJlYWN0aXZlRW5naW5lIGZyb20gJy4uL2NvcmUvcmVhY3RpdmUtZW5naW5lJztcbmltcG9ydCBNb25nb0RCRW5naW5lIGZyb20gJy4vbW9uZ28tZGInO1xuXG4vKipcbiAqIFRoZSBNb25nb1RleHRJbmRleEVuZ2luZSBsZXRzIHlvdSBzZWFyY2ggdGhlIGluZGV4IHdpdGggTW9uZ28gdGV4dCBpbmRleGVzLlxuICpcbiAqIEB0eXBlIHtNb25nb1RleHRJbmRleEVuZ2luZX1cbiAqL1xuY2xhc3MgTW9uZ29UZXh0SW5kZXhFbmdpbmUgZXh0ZW5kcyBSZWFjdGl2ZUVuZ2luZSB7XG4gIC8qKlxuICAgKiBSZXR1cm4gZGVmYXVsdCBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZGVmYXVsdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgbGV0IG1vbmdvQ29uZmlndXJhdGlvbiA9IE1vbmdvREJFbmdpbmUuZGVmYXVsdE1vbmdvQ29uZmlndXJhdGlvbih0aGlzKTtcblxuICAgIG1vbmdvQ29uZmlndXJhdGlvbi5zZWxlY3RvciA9IGZ1bmN0aW9uIChzZWFyY2hTdHJpbmcpIHtcbiAgICAgIGlmIChzZWFyY2hTdHJpbmcudHJpbSgpKSB7XG4gICAgICAgIHJldHVybiB7ICR0ZXh0OiB7ICRzZWFyY2g6IHNlYXJjaFN0cmluZyB9IH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF8uZGVmYXVsdHMoe30sIG1vbmdvQ29uZmlndXJhdGlvbiwgc3VwZXIuZGVmYXVsdENvbmZpZ3VyYXRpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgdGhlIGluZGV4IG9uIGNyZWF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5kZXhDb25maWcgSW5kZXggY29uZmlndXJhdGlvblxuICAgKi9cbiAgb25JbmRleENyZWF0ZShpbmRleENvbmZpZykge1xuICAgIHN1cGVyLm9uSW5kZXhDcmVhdGUoaW5kZXhDb25maWcpO1xuXG4gICAgaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAgICAgbGV0IHRleHRJbmRleGVzQ29uZmlnID0ge307XG5cbiAgICAgIF8uZWFjaChpbmRleENvbmZpZy5maWVsZHMsIGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICB0ZXh0SW5kZXhlc0NvbmZpZ1tmaWVsZF0gPSAndGV4dCc7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGluZGV4Q29uZmlnLndlaWdodHMpIHtcbiAgICAgICAgdGV4dEluZGV4ZXNDb25maWcud2VpZ2h0cyA9IG9wdGlvbnMud2VpZ2h0cygpO1xuICAgICAgfVxuXG4gICAgICBpbmRleENvbmZpZy5jb2xsZWN0aW9uLl9lbnN1cmVJbmRleCh0ZXh0SW5kZXhlc0NvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgc2VhcmNoIGRlZmluaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gc2VhcmNoRGVmaW5pdGlvbiBTZWFyY2ggZGVmaW5pdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgIG9wdGlvbnMgICAgICAgICAgU2VhcmNoIGFuZCBpbmRleCBvcHRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1TZWFyY2hEZWZpbml0aW9uKHNlYXJjaERlZmluaXRpb24sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc2VhcmNoRGVmaW5pdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciBmb3IgdmFsaWRpdHlcbiAgICpcbiAgICogQHBhcmFtIHNlYXJjaFxuICAgKi9cbiAgY2hlY2tTZWFyY2hQYXJhbShzZWFyY2gpIHtcbiAgICBjaGVjayhzZWFyY2gsIFN0cmluZyk7XG4gIH1cbn1cblxuLy8gRXhwbGljaXRlbHkgaW5oZXJpdCBnZXRTZWFyY2hDdXJzb3IgbWV0aG9kIGZ1bmN0aW9uYWxpdHlcbk1vbmdvVGV4dEluZGV4RW5naW5lLnByb3RvdHlwZS5nZXRTZWFyY2hDdXJzb3IgPSBNb25nb0RCRW5naW5lLnByb3RvdHlwZS5nZXRTZWFyY2hDdXJzb3I7XG5Nb25nb1RleHRJbmRleEVuZ2luZS5wcm90b3R5cGUuZ2V0RmluZE9wdGlvbnMgPSBNb25nb0RCRW5naW5lLnByb3RvdHlwZS5nZXRGaW5kT3B0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgTW9uZ29UZXh0SW5kZXhFbmdpbmU7XG4iLCJpbXBvcnQge1xuICBJbmRleCxcbiAgRW5naW5lLFxuICBSZWFjdGl2ZUVuZ2luZSxcbiAgQ3Vyc29yLFxuICBNb25nb0RCRW5naW5lLFxuICBNaW5pbW9uZ29FbmdpbmUsXG4gIE1vbmdvVGV4dEluZGV4RW5naW5lXG59IGZyb20gJy4vbWFpbic7XG5cbkVhc3lTZWFyY2ggPSB7XG4gIC8vIENvcmVcbiAgSW5kZXgsXG4gIEVuZ2luZSxcbiAgUmVhY3RpdmVFbmdpbmUsXG4gIEN1cnNvcixcbiAgLy8gRW5naW5lc1xuICBNb25nb0RCOiBNb25nb0RCRW5naW5lLFxuICBNaW5pbW9uZ286IE1pbmltb25nb0VuZ2luZSxcbiAgTW9uZ29UZXh0SW5kZXg6IE1vbmdvVGV4dEluZGV4RW5naW5lXG59O1xuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vY29yZS9pbmRleCc7XG5pbXBvcnQgRW5naW5lIGZyb20gJy4vY29yZS9lbmdpbmUnO1xuaW1wb3J0IFJlYWN0aXZlRW5naW5lIGZyb20gJy4vY29yZS9yZWFjdGl2ZS1lbmdpbmUnO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2NvcmUvY3Vyc29yJztcbmltcG9ydCBNb25nb0RCRW5naW5lIGZyb20gJy4vZW5naW5lcy9tb25nby1kYic7XG5pbXBvcnQgTWluaW1vbmdvRW5naW5lIGZyb20gJy4vZW5naW5lcy9taW5pbW9uZ28nO1xuaW1wb3J0IE1vbmdvVGV4dEluZGV4RW5naW5lIGZyb20gJy4vZW5naW5lcy9tb25nby10ZXh0LWluZGV4JztcblxuZXhwb3J0IHtcbiAgSW5kZXgsXG4gIEVuZ2luZSxcbiAgUmVhY3RpdmVFbmdpbmUsXG4gIEN1cnNvcixcbiAgTW9uZ29EQkVuZ2luZSxcbiAgTWluaW1vbmdvRW5naW5lLFxuICBNb25nb1RleHRJbmRleEVuZ2luZVxufTtcbiJdfQ==
