describe "Restaurant Form", ->

	jasmine.getFixtures().fixturesPath = 'javascript/spec/fixtures'

	beforeEach ->
		loadFixtures 'restaurant_form.html'
		@invisible_form = $('#restaurant_form')
		@restaurant_form = new Gourmet.Views.RestaurantForm
			el: @invisible_form
			collection: new Gourmet.Collections.RestaurantsCollection

	it "should be defined", -> 
		expect(Gourmet.Views.RestaurantForm).toBeDefined()

	it "should have the right element", ->
		expect(@restaurant_form.$el).toEqual @invisible_form

	it "should have a collection", ->
		expect(@restaurant_form.collection).toEqual (new Gourmet.Collections.RestaurantsCollection)

	describe "Restaurant Form", ->

		beforeEach ->
			@serialized_data = [
				{
					name: 'restaurant[name]',
					value: 'Panjab'
				},
				{
					name: 'restaurant[rating]',
					value: '5'
				},
				{
					name: 'restaurant[postcode]',
					value: '123456'
				}
			]
			spyOn(@restaurant_form.$el, 'serializeArray').andReturn @serialized_data

		it "should parse form data", ->
			expect(@restaurant_form.parseFormData(@serialized_data)).toEqual
				name: 'Panjab'
				rating: '5'
				postcode: '123456'

		it "should add a restaraunt when form data is valid", ->
			spyOn(@restaurant_form, 'parseFormData').andReturn 
				name: 'Panjab'
				rating: '5'
				postcode: '123456'
			@restaurant_form.save() # we mock the click by calling the method
			expect(@restaurant_form.collection.length).toEqual 1

		it "should not add a restaraunt when form data is invalid", ->
			spyOn(@restaurant_form, 'parseFormData').andReturn 
				name: ''
				rating: '5'
				postcode: '123456'
			@restaurant_form.save() # we mock the click by calling the method
			expect(@restaurant_form.collection.length).toEqual 0

		it "should show validation errors when data is invalid", ->
			console.log "final"
			spyOn(@restaurant_form, 'parseFormData').andReturn
				name: ''
				rating: '5'
				postcode: '123456'
			@restaurant_form.save() # we mock the click by calling the method
			#expect($('.error', $(@invisible_form)).length).toEqual 1 # $ selector not working...
			expect($('.error').length).toEqual 1


































