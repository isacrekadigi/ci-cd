import greetUser from "../../src/example";

test("should say hello", () => {
  expect(greetUser("John")).toBe("Hello, John!");
});
