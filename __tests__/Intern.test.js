//Importing the intern file for testing
const Intern = require("../lib/Intern");

// creates intern testing object
test("creates intern object", () => {
  const intern = new Intern(
    "Laura Bytes",
    10,
    "Laura-Bytes@gmail.com",
    "St. Clair College"
  );

  expect(intern.school).toEqual(expect.any(String));
});

test("gets role of employee", () => {
  const intern = new Intern(
    "Laura Bytes",
    10,
    "Laura-Bytes@gmail.com",
    "St. Clair College"
  );

  expect(intern.getRole()).toEqual("Intern");
});
