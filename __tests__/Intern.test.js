//name 
const intern = require("../lib/intern");
//school test value 
test("Can set school via constructor", () => {
  const testValue = "UO";
  const e = new intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
//return intern
test("getRole() should return \"intern\"", () => {
  const testValue = "intern";
  const e = new intern("Foo", 1, "test@test.com", "UO");
  expect(e.getRole()).toBe(testValue);
});


//school

//getSchool()
test("Can get school via getSchool()", () => {
  const testValue = "UO";
  const e = new intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
//getRole() Overridden to return 'Intern'


//const checkIfEqual = require('../lib/intern.js');

//test('checks if 10 is equal to 10', () => {
  //expect(checkIfEqual(10, 10)).toBe(true);
//});