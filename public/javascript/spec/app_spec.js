// Generated by CoffeeScript 1.6.3
/*

describe "A suite", ->
	it "contains a spec with an expectation", ->
		expect(true).toBe true
		return
	return

describe "A suite is just a function", ->
	a = undefined
	it "and so is a spec", ->
		a = true
		expect(a).toBe true
		return 
	return 

describe "The 'toBe' function matcher compares with ===", ->

	it "has a positive case ", ->
		expect(true).toBe true
		return 

	it "and can have a negative case", ->
		expect(false).not.toBe true
		return
	return 

describe "Included matchers:", ->
	it "The 'toBe' matcher compares with ===", ->
		a = 12
		b = a 

		expect(a).toBe b
		expect(a).not.toBe null
		return 

	describe "The 'toEqual' matcher", ->
		it "works for simple literals and variables", ->
			a = 12
			expect(a).toEqual 12
			return 

		it "should work for objects", ->
			foo = 
				a: 12
				b: 34
			bar = 
				a: 12
				b: 34
			expect(foo).toEqual bar
			return 

		it "The to 'toMatch' matcher is for regular expressions", =>
			message = "foo bar baz"
			expect(message).toMatch /bar/
			expect(message).toMatch "bar"
			expect(message).not.toMatch(/quux/)
			return

		it "The 'toBeDefined' compares against 'undefined'", ->
			a = 
				foo: "foo"

			expect(a.foo).toBeDefined()
			expect(a.bar).not.toBeDefined()
			return 

		it "The 'toBeUndefined' compares against 'undefined'", ->
			a = 
				foo: "foo"

			expect(a.foo).not.toBeUndefined()
			expect(a.bar).toBeUndefined()
			return 

		it "The 'toBeNull' matcher compares against null", ->
			a = null
			foo = 'foo'

			expect(null).toBeNull()
			expect(a).toBeNull()
			expect(foo).not.toBeNull()
			return

		it "The 'toBeTruthy' matcher is for boolean casting testing", ->
			a = undefined
			foo = "foo"
			expect(foo).toBeTruthy()
			expect(a).not.toBeTruthy()
			return


		it "The 'toBeFalsy' matcher is boolean casting testing", ->
			a = undefined 
			foo = 'foo'

			expect(a).toBeFalsy()
			expect(foo).not.toBeFalsy()
			return

		it "The 'toContain' matcher is for finding an item in an array", ->
			a = ['foo','bar','baz']

			expect(a).toContain('bar')
			expect(a).not.toContain('quux')
			return

		it "The 'toBeLessThan' matcher is for mathematical comparisons", ->
			pi = 3.1415926
			e = 2.78

			expect(e).toBeLessThan(pi)
			expect(pi).not.toBeLessThan(e)
			return

		it "The 'toBeGreaterThan' is for mathematical comparisons", ->
			pi = 3.1415926
			e = 2.78

			expect(pi).toBeGreaterThan(e)
			expect(e).not.toBeGreaterThan(pi)
			return

		it "To 'toBeCloseTo' matcher is for precision math comparison", ->
			pi = 3.14156926
			e = 2.78

			expect(pi).not.toBeCloseTo(e,2)
			expect(pi).toBeCloseTo(e,0)
			return

		it "The 'toThrow' matcher is for testing if a function throws an exception", ->
			foo = ->
				1 + 3
			bar = ->
				a + 1

			expect(foo).not.toThrow()
			expect(bar).toThrow()
			return
		return

describe "A spec", ->
	it "is just a function, so it can contain any code",->
		foo = 0
		foo += 1
		expect(foo).toEqual(1) 
		return

	it "can have more than one expectation", ->
		foo = 0
		foo += 1
		expect(foo).toEqual(1)
		expect(true).toEqual(true)
		return 

	return

describe "A spec (with setup and tear-down", ->

	foo = undefined

	beforeEach ->
		foo = 0
		foo += 1
		return

	afterEach ->
		foo = 0
		return 

	it "is just a function, so it can contain any code", ->
		expect(foo).toEqual(1)
		return 

	it "can have more than one expectation", ->
		expect(foo).toEqual(1)
		expect(true).toEqual(true)
		return

	describe "nested inside a second describe", ->
		bar = undefined

		beforeEach ->
			bar = 1
			return

		it "can reference both scopes as needed", ->
			expect(foo).toEqual(bar)
			return
		return

describe "A spy", ->
	foo = null
	bar = null

	beforeEach ->
		foo = setBar: (value)->
				bar = value
				return

		spyOn foo, 'setBar'

		foo.setBar 123
		foo.setBar 456, "another param"
		return

	it "tracks that the spy was called", ->
		expect(foo.setBar).toHaveBeenCalled()
		return

	it "tracks it number of calls", ->
		expect(foo.setBar.calls.length).toEqual(2)
		return

	it "tracks all the arguments of its calls", ->
		expect(foo.setBar).toHaveBeenCalledWith(123)
		expect(foo.setBar).toHaveBeenCalledWith(456,"another param")
		return

	it "allows access to the most recent call", ->
		expect(foo.setBar.mostRecentCall.args[0]).toEqual 456
		return

	it "allows access to other calls", ->
		expect(foo.setBar.calls[0].args[0]).toEqual 123
		return

	it "stops all execution on a function", ->
		expect(bar).toBeNull()
		return
	return


describe "A spy, when configured to call through", ->
	foo = null
	bar = null
	fetchedBar = null

	beforeEach ->
		foo = 
			setBar: (value)->
				bar = value
				return
			getBar: (value)->
				bar

		spyOn(foo, 'setBar').andCallThrough()

		foo.setBar 123
		fetchedBar = foo.getBar()
		return

	it "tracks that the spy was called", ->
		expect(foo.getBar).toHaveBeenCalled()
		return

	it "should not affect other functions", ->
		expect(bar).toEqual 123
		return

	it "when calls returns the requested value", ->
		expect(fetchedBar).toEqual 123
		return
	return
*/


(function() {
  describe("App namespace", function() {
    it("should be defined", function() {
      expect(Gourmet).toBeDefined();
    });
  });

  xdescribe("A spec", function() {
    it("is just a function, so it can contain any code", function() {
      var foo;
      foo = 0;
      foo += 1;
      expect(foo).toEqual(1);
    });
  });

}).call(this);
