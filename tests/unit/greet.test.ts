import { greetUser } from "../../src/server";

test("should say hello", () => {
  expect(greetUser("John")).toBe("Hello, John!");
});
