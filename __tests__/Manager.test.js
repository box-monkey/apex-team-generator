
const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager');

// manager tester object
test('creates manager object', () => {
  const manager = new Manager('Austin Martin', 10, 'AustinMartin@gmail.com', 5);
  
  expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
  const manager = new Manager('Austin Martin', 10, 'AustinMartin@gmail.com', 5);

  expect(manager.getRole()).toEqual('Manager');
}); 