// Generated by CoffeeScript 1.6.3
(function() {
  describe("Restaurant Form", function() {
    jasmine.getFixtures().fixturesPath = 'javascript/spec/fixtures';
    beforeEach(function() {
      loadFixtures('restaurant_form.html');
      this.invisible_form = $('#restaurant_form');
      return this.restaurant_form = new Gourmet.Views.RestaurantForm({
        el: this.invisible_form,
        collection: new Gourmet.Collections.RestaurantsCollection
      });
    });
    it("should be defined", function() {
      return expect(Gourmet.Views.RestaurantForm).toBeDefined();
    });
    it("should have the right element", function() {
      return expect(this.restaurant_form.$el).toEqual(this.invisible_form);
    });
    it("should have a collection", function() {
      return expect(this.restaurant_form.collection).toEqual(new Gourmet.Collections.RestaurantsCollection);
    });
    return describe("Restaurant Form", function() {
      beforeEach(function() {
        this.serialized_data = [
          {
            name: 'restaurant[name]',
            value: 'Panjab'
          }, {
            name: 'restaurant[rating]',
            value: '5'
          }, {
            name: 'restaurant[postcode]',
            value: '123456'
          }
        ];
        return spyOn(this.restaurant_form.$el, 'serializeArray').andReturn(this.serialized_data);
      });
      it("should parse form data", function() {
        return expect(this.restaurant_form.parseFormData(this.serialized_data)).toEqual({
          name: 'Panjab',
          rating: '5',
          postcode: '123456'
        });
      });
      it("should add a restaraunt when form data is valid", function() {
        spyOn(this.restaurant_form, 'parseFormData').andReturn({
          name: 'Panjab',
          rating: '5',
          postcode: '123456'
        });
        this.restaurant_form.save();
        return expect(this.restaurant_form.collection.length).toEqual(1);
      });
      it("should not add a restaraunt when form data is invalid", function() {
        spyOn(this.restaurant_form, 'parseFormData').andReturn({
          name: '',
          rating: '5',
          postcode: '123456'
        });
        this.restaurant_form.save();
        return expect(this.restaurant_form.collection.length).toEqual(0);
      });
      return it("should show validation errors when data is invalid", function() {
        console.log("final");
        spyOn(this.restaurant_form, 'parseFormData').andReturn({
          name: '',
          rating: '5',
          postcode: '123456'
        });
        this.restaurant_form.save();
        return expect($('.error').length).toEqual(1);
      });
    });
  });

}).call(this);