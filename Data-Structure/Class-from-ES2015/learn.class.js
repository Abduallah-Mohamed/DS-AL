// ? create a class
class Student {
  constructor(fName, lName, year = 1889) {
    this.firstName = fName;
    this.lastName = lName;
    this.grade = year;
    this.tardies = 0;
  }

  fullName() {
    return `your fullname is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 2;
    console.log(this.tardies);
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times!`;
  }
}

const student = new Student("Abduallah", "Mohamed", 2020);
const student2 = new Student("Abduallah", "Mohamed");

console.log(student.markLate());
