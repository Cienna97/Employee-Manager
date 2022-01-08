//name 
const intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UO";
  const e = new intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
//getId()

//getEmail()

//school

//getSchool()

//getRole() Overridden to return 'Intern'


//const checkIfEqual = require('../lib/intern.js');

//test('checks if 10 is equal to 10', () => {
  //expect(checkIfEqual(10, 10)).toBe(true);
//});