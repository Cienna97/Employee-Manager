//name 
const { TestWatcher } = require("jest");
const employee = require("../lib/employee");

test("Can instantiate employee instance", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});


//id

//email

//getName()

//getId()

//getEmail()

//getRole() Returns 'Employee'