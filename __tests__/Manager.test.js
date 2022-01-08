//name 
const Manager = require("../lib/manager");
const Employee = require("../lib/employee");
//const { TestWatcher } = require("jest");
//const manager = require("../lib/manager");
//id
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com",
    testValue);
    expect(e.officeNumber).toBe(testValue);
});
test("getRole() should return \"Manager\"",() => {
    const testValue = "manager";
    const e = new manager("Foo", 1, "test@test.com",
    testValue);
    expect(e.getRole()).toBe(testValue);
});

//officeNumber
//getRole() Overridden to return 'Manager'
test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new manager("Foo", 1, "test@test.com",
    testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
//getName()

//getEmail()



