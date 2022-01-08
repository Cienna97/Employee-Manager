//name 
//const { TestWatcher } = require("jest");
const engineer = require("../lib/engineer");
//github Github username
test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new engineer("Foo", 1, "test@test.com",
    testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"engineer\"", () => {
    const testValue = "engineer";
    const e = new engineer("Foo", 1, "test@test.com",
    "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

//getGithub()
test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new engineer("Foo", 1, "test@test.com",
    testValue);
    expect(e.getGithub()).toBe(testValue);
});
//getRole() Overridden to return 'Engineer'
