//imports the employee for manager to use.
const Employee = require("./Employee");

// creates manager
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

//exports manager file anywhere in application
module.exports = Manager;
