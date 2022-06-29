// Mocha Tests - DO NOT TOUCH

// GREETING
describe("greeting()", function () {
  it("greeting('Megan', 'Morning') -> 'Hello Megan. Have a great Morning!' ", function () {
    assert.equal(
      greeting("Megan", "Morning"),
      "Hello Megan. Have a great Morning!"
    );
  });

  it("greeting('Azra', 'Afternoon') -> 'Hello Azra. Have a great Afternoon!' ", function () {
    assert.equal(
      greeting("Azra", "Afternoon"),
      "Hello Azra. Have a great Afternoon!"
    );
  });

  it("greeting('Nathan', 'Night') -> 'Hello Nathan. Have a great Night!' ", function () {
    assert.equal(
      greeting("Nathan", "Night"),
      "Hello Nathan. Have a great Night!"
    );
  });
});

// HERONS FORMULA
describe("heronsFormula()", function () {
  it("heronsFormula(3, 4, 5) -> 6", function () {
    assert.equal(heronsFormula(3, 4, 5), 6);
  });

  it("heronsFormula(4, 5, 6) -> 9.921567416492215", function () {
    assert.equal(heronsFormula(4, 5, 6), 9.921567416492215);
  });

  it("heronsFormula(8, 9, 10) -> 34.197039345533994", function () {
    assert.equal(heronsFormula(8, 9, 10), 34.197039345533994);
  });
});

// WITHIN RANGE
describe("withinRange()", function () {
  it("withinRange(4, 1, 10) -> true", function () {
    assert.equal(withinRange(4, 1, 10), true);
  });

  it("withinRange(14, 1, 10) -> false", function () {
    assert.equal(withinRange(14, 1, 10), false);
  });

  it("withinRange(5, 5, 20) -> true", function () {
    assert.equal(withinRange(5, 5, 20), true);
  });

  it("withinRange(20, 5, 20) -> true", function () {
    assert.equal(withinRange(20, 5, 20), true);
  });

  it("withinRange(-40, -50, -30) -> true", function () {
    assert.equal(withinRange(-40, -50, -30), true);
  });

  it("withinRange(-10, -50, -30) -> false", function () {
    assert.equal(withinRange(-10, -50, -30), false);
  });
});

// FAHRENHEIT TO CELSIUS
describe("fahrToCels()", function () {
  it("fahrToCels(68) -> 20", function () {
    assert.equal(fahrToCels(68), 20);
  });

  it("fahrToCels(32) -> 0", function () {
    assert.equal(fahrToCels(32), 0);
  });

  it("fahrToCels(23) -> -5", function () {
    assert.equal(fahrToCels(23), -5);
  });

  it("fahrToCels(0) -> -17.77777777777778", function () {
    assert.equal(fahrToCels(0), -17.77777777777778);
  });
});

// DISTANCE
describe("dist()", function () {
  it("dist(0, 0, 3, 4) -> 5", function () {
    assert.equal(dist(0, 0, 3, 4), 5);
  });

  it("dist(-1, -4, 2, 3) -> 7.615773105863909", function () {
    assert.equal(dist(-1, -4, 2, 3), 7.615773105863909);
  });

  it("dist(-5, 8, 10, 8) -> 15", function () {
    assert.equal(dist(-5, 8, 10, 8), 15);
  });

  it("dist(3, -1, 3, 2) -> 3", function () {
    assert.equal(dist(3, -1, 3, 2), 3);
  });
});

// ANALYZE NUMBER
describe("analyzeNumber()", function () {
  it("analyzeNumber(7) -> 'positive'", function () {
    assert.equal(analyzeNumber(7), "positive");
  });

  it("analyzeNumber(-12) -> 'negative'", function () {
    assert.equal(analyzeNumber(-12), "negative");
  });

  it("analyzeNumber(0) -> 'zero'", function () {
    assert.equal(analyzeNumber(0), "zero");
  });
});

// VALID USERNAME
describe("validUsername()", function () {
  it("validUsername('good') -> true", function () {
    assert.equal(validUsername("good"), true);
  });

  it("validUsername('johnuser') -> true", function () {
    assert.equal(validUsername("johnuser"), true);
  });

  it("validUsername('johnlongusername') -> false", function () {
    assert.equal(validUsername("johnlongusername"), false);
  });

  it("validUsername('to') -> false", function () {
    assert.equal(validUsername("to"), false);
  });

  it("validUsername('tom') -> true", function () {
    assert.equal(validUsername("tom"), true);
  });
});
