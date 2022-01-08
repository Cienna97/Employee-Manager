//name 
const Manager = require("../lib/manager");
const Employee = require("../lib/employee");
const { TestWatcher } = require("jest");
//id
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com",
    testValue);
    expect(e.officeNumber).toBe(testValue);
});
//email

//getName()

//getId()

//getEmail()

//officeNumber

//getRole() Overridden to return 'Manager'


