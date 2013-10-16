class Gourmet.Views.RestaurantsView extends Backbone.View
	template: Hogan.compile $('#restaurant-template').html()
	initialize: ->
		@render @collection
		@collection.on 'add', @render
		@collection.on 'remove', @render
		#@collection.on 'change', @render

	render: =>
		@$el.empty()
		for restaurant in @collection.models
			do (restaurant) =>
				@$el.append @template.render(restaurant.toJSON())