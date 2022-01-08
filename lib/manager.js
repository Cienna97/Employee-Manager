const employee = require("./employee");

class manager extends employee {
  constructor(id, email, name, officeNumber) {
    super(id, email, name);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }


}


module.exports = manager;