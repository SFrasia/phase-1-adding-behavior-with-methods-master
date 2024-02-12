// Your code here
class Cat {
  constructor(name, sex) {
    this.speak = () => `${name} says meow!`;
  }
}
class Dog {
  constructor(name, sex) {
    this.speak = () => `${name} says woof!`;
  }
}
class Bird {
  constructor(name, sex) {
    this.speak = () =>
      sex === "male" ? `It's me! ${name}, the parrot!` : `${name} says squawk!`;
  }
}
