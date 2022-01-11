const Employee = require("../lib/Employee");
// tests employee object
test("Creates Employee object", () => {
  const employee = new Employee("Alex", "21", "AlexIsTheMan@gmail.com");
  // compares hardcoded values above and compares
  expect(employee.getName()).toEqual("Alex");
  expect(employee.getId()).toBe("21");
  expect(employee.getEmail()).toEqual("AlexIsTheMan@gmail.com");
});
