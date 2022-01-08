
//const { TestWatcher } = require("jest");

const employee = require("../lib/employee");
//name 
test("Can instantiate employee instance", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});
//getName()
test("Can set name via constructor arguments", () => {
    const name = "Cienna";
    const e = new employee(name);
    expect(e.name).toBe(name);
});
//id
test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});
//email
test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

//getId()

//getEmail()

//getRole() Returns 'Employee'