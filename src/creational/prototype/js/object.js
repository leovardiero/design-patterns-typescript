const personPrototype = {
  firstName: 'Leo',
  lastName: 'Vardiero',
  age: 28,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
personPrototype.firstName = 'OutroNome';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.lastName);
