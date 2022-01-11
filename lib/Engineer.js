// engineer is also an employee, so we need that broad employee import to assist in data procurement 
const Employee = require("./Employee");

// creates and writes Engineer class while using employee characteristics.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // Engineer has specific data inputs not included in employee file
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

//exports ths especific Engineer file to entire application
module.exports = Engineer;
