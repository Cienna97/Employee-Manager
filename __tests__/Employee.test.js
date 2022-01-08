
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

test("Can get name via getName()", () => {
    const testValue = "Cienna";
    const e = new employee(testValue);
    expect(e.getName()).toBe(testValue);
  });


//getId()
test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

//getEmail()
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

//getRole() Returns 'Employee'
test("getRole() should return \"employee\"", () => {
    const testValue = "employee";
    const e = new employee("Cienna", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});
