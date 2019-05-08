const returnEnv = require("../returnEnv");

test("set and confirm process.env.TEST", () => {
  const value = "TEST";
  process.env.TEST = value;
  expect(returnEnv()).toBe(value);
});
