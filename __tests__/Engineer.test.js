//name 
//const { TestWatcher } = require("jest");
const engineer = require("../lib/engineer");


//github Github username

//getGithub()
test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new engineer("Foo", 1, "test@test.com",
    testValue);
    expect(e.getGithub()).toBe(testValue);
});
//getRole() Overridden to return 'Engineer'
