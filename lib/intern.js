const employee = require("./employee");

class intern extends employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }

  getRole() {
    return "intern";
  }

  getSchool() {
    return this.school;
  }
    
}











module.exports = intern;

//module.exports = function() {};