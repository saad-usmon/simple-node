class User {
  //   name = "";
  //   age = 0;
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  sayHello() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old!`);
  }
}

module.exports = User;
