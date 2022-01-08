class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //return id
    getName() {
        return this.name;
    }
    //return name
    getId() {
        return this.id;
    }
    //return email
    getEmail() {
        return this.email
    }
    //return employee info
    getRole() {
        return "employee";
    }
}












module.exports = employee;