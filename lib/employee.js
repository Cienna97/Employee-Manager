class employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    //return id
    getId() {
        return this.id;
    }
    //return name
    getName() {
        return this.name;
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