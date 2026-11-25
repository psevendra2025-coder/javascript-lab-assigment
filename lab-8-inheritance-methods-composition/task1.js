// Name: sevendra
 // Roll No.: bcs2025534

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

const teacher1 = new Teacher("Anita", "Maths");
console.log(teacher1.greet());
