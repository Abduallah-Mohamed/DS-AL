// ? create a class
class Student {
  constructor(fName, lName, year) {
    this.firstName = fName;
    this.lastName = lName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `your fullname is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies = this.tardies + 1;
    if (this.tardies >= 3) return "YOU ARE EXPELED!!!!!";

    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times!`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAvg() {
    let sum = this.scores.reduce((a, b) => a + b, 0);
    return sum / this.scores.length;
  }

  static enrollStudents() {
    return "hello from the other side,,,";
  }
}

const student = new Student("Abduallah", "Mohamed", 2020);
const student2 = new Student("mohamed", "sarhan");

console.log(student.markLate());
console.log(student.addScore(1));
console.log(Student.enrollStudents());

// console.log(student2.markLate());
