/**
 * @jest-environment jsdom
 */
const addition = require("../calc");
const subtraction = require("../calc");

describe("Calculator", () => {
  describe("Addition function", () => {
    test("Should return 42 for 20 + 22", () => {
      expect(addition(20, 22)).toBe(42);
    });
    test("Should return 72 for 42 + 30", () => {
      expect(addition(42, 30)).toBe(72);
    });
  });
  describe("Subtraction function", () => {
    // test("Should return 8 for 10 - 2", () => {
    //   expect(subtraction(10, 2)).toBel(8);
    // });
  });
  describe("Multiply function", () => {});
  describe("Division function", () => {});
});
