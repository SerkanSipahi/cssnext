/**
 * Test dependencies
 */
var test = require("tape")

var utils = require("./utils")
var cssnext = require("..")
var postcss = require("postcss")

/**
 * Global API tests
 */
test("cssnext API", function(t) {
  var input = utils.read("cases/example")
  var output = utils.read("cases/example.expected").trim()

  // simple API strings + options
  t.ok(typeof cssnext("html{}") === "string", "should return a string")
  t.ok(typeof cssnext("") === "string", "should return a string, even if the given string is empty")
  utils.compareFixtures(t, "cases/example", "simple example with multiples features should work with cssnext API")

  // as a postcss plugin
  var postcssInstance = cssnext()
  t.ok(typeof postcssInstance === "object" && postcssInstance.process, "should return a postcss instance")
  t.equal(postcss().use(cssnext()).process(input).css.trim(), output, "simple example with multiples features should work with postcss API")

  t.end()
})

