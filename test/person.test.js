const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')
const Pet = require('../models/pet.js')
// Your Person test goes here!

describe('Person', () =>{
    it('should initialize properly', () => {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1996')

    expect(person.firstName).to.equal('Joe')
    expect(person.surname).to.equal('Bloggs')
    expect(person.dob).to.equal('1 Jan 1996')
    })

    it('should capitalize the first name', () => {
        var person = new Person('amy', 'Nother', '1 Jan 1998')

        expect(person.firstName).to.equal('Amy')
    })

    it('should return a full name', () => {
        var person = new Person('James','Baker','1 Jan 1990')

        expect(person.fullName()).to.equal("James Baker")
    })

    it('should accept new emails and add them to the array', () =>{
        var person = new Person('James','Baker','1 Jan 1990')

        person.addEmail('joe@example1.com')
        person.addEmail('Joe2@example2.com')
        expect(person.emails).to.deep.equal(['joe@example1.com','Joe2@example2.com'])
    })


    it('should accept new numbers and add them to the array', () =>{
        var person = new Person('James','Baker','1 Jan 1990')

        person.addPhone('0771231212')
        person.addPhone('+44 23423 2342')
        console.log("Fone Numberss")
        console.log(person.phoneNumbers)

        expect(person.phoneNumbers).to.deep.equal(['0771231212','+44 23423 2342'])
    })

    it('should add a pet to the pet list', () =>{
        var person = new Person('James', 'Wood', '19 Dec 1990')
        var pet1 = new Pet("Nemo", "Goldfish")

        person.addPet(pet1)
        expect(person.pets).to.deep.equal([pet1])
    })
})