// OBJECTS - Part II
/*
const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  //job: 'Teacher',
  fullName: function () {
    return this.name + ' ' + this.surname
  },
}

console.log(person)
console.log(person.name)
console.log(person.fullName())
//console.log(person.fullName2())
//console.log(person.job)
console.log(person.toString())
console.log(person.hasOwnProperty('name'))
//console.log(person.constructor()) */

// OBJECT = name, surname, age, fullName() ----> person

// const myObj = {}
// console.log(myObj)
// console.log(myObj.toString())

/*function Person(name, surname, age) {
  this.name = name
  this.surname = surname
  this.age = age
  this.fullName = function () {
    return this.name + ' ' + this.surname
  }
}*/

//const arin = new Person('Arin', 'Çekiç', 6)
//console.log(arin)
//console.log(arin.__proto__)

/*const yeni = [1, 2, 3, 4, 5]
console.log(yeni.filter) */

/*const rakam = {
  bir: 'birinci',
  iki: 'ikinci',
}
console.log(rakam.iki) */

/*const elis = new Person('Elis', 'Çekiç', 4)

elis.job = 'Child'
*/
// OBJECT + name, surname, age, fullName() --> Person + job ---> elis

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.fullName = function () {
  return this.name + ' ' + this.surname
}

Person.prototype.surname = 'Çekiç'

const elis = new Person('Elis', 4)

const arin = new Person('Arin', 6)

console.log(elis)
console.log(arin)
