//name 
const manager = require("../lib/manager");
const employee = require("../lib/employee");
//const { TestWatcher } = require("jest");
//const manager = require("../lib/manager");
//id
test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });


test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new manager("Foo", 1, "test@test.com",
    testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new manager("Foo", 1, "test@test.com",
    testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

//officeNumber
//getRole() Overridden to return 'Manager'

//getName()

//getEmail()



