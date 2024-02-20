function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Leo',
  lastName: 'Vardiero',
  age: 28,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);

const person1 = new Person('Leo', 'Vardiero', 30);
console.log(person1.fullName());
