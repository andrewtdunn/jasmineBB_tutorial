// Generated by CoffeeScript 1.6.3
(function() {
  var _ref, _ref1,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Gourmet.Models.Restaurant = (function(_super) {
    __extends(Restaurant, _super);

    function Restaurant() {
      this.removeRestaurant = __bind(this.removeRestaurant, this);
      _ref = Restaurant.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Restaurant.prototype.urlRoot = '/restaurants';

    Restaurant.prototype.defaults = {
      name: null,
      postcode: null,
      rating: null
    };

    Restaurant.prototype.validate = {
      name: {
        required: true
      },
      postcode: {
        required: true
      },
      rating: {
        required: true,
        type: 'number',
        min: 1,
        max: 5
      }
    };

    Restaurant.prototype.removeRestaurant = function(evt) {
      var id, model;
      id = evt.target.id;
      model = this.collection.get(id);
      console.log("removing model: ");
      console.log(model);
      this.collection.remove(model);
      return model.destroy();
    };

    return Restaurant;

  })(Backbone.Model);

  Gourmet.Collections.RestaurantsCollection = (function(_super) {
    __extends(RestaurantsCollection, _super);

    function RestaurantsCollection() {
      _ref1 = RestaurantsCollection.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    RestaurantsCollection.prototype.url = '/restaurants';

    RestaurantsCollection.prototype.model = Gourmet.Models.Restaurant;

    return RestaurantsCollection;

  })(Backbone.Collection);

}).call(this);
