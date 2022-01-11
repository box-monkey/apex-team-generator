// Intern is also an employee, so we need that broad employee import to assist in data procurement
const Employee = require("./Employee");

// creates the intern class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // intern has specific input needed.
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

//exports Intern file to anywhere in application
module.exports = Intern;
