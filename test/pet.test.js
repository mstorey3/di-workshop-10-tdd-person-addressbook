const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')
const Pet = require('../models/pet.js')

// Your Person test goes here!

describe('Pet', () =>{
    it('should initialize properly', () => {
    var pet = new Pet('Nemo', 'Goldfish')

    expect(pet.name).to.equal('Nemo')
    expect(pet.animal).to.equal('Goldfish')
    })

    it('should make the right sound', () =>{
        var pet = new Pet("Blue", "Dog")
        pet.sound = 'woof'

        expect(pet.sound).to.equal('woof')
    })
})