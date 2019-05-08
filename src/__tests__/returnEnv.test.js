const returnEnv = require("../returnEnv");

test("set and confirm process.env.TEST", () => {
  process.env.TEST = "TEST1";
  expect(returnEnv()).toBe(process.env.TEST);

  process.env.TEST = "TEST2";
  expect(returnEnv()).toBe(process.env.TEST);
});
