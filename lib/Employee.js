
// creates Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    // function to get selected data
   getName(){
       return this.name;
   }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }
}

// allows us to export this page to anywhere in our application
module.exports = Employee;