//Importing the engineer file for testing
const Engineer = require("../lib/Engineer");

// creates engineer object test
test("creates engineer object", () => {
  const engineer = new Engineer(
    "Rocko Djikstra",
    "171",
    "Rocko1@gmail.com",
    "Rocko1"
  );

  expect(engineer.getName()).toEqual("Rocko Djikstra");
  expect(engineer.getId()).toBe("171");
  expect(engineer.getEmail()).toEqual("Rocko1@gmail.com");
  expect(engineer.getGithub()).toEqual("Rocko1");
});
