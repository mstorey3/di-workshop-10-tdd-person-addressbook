const chai = require('chai')
const expect = chai.expect

const AddressBook = require('../models/addressBook.js')
const Person = require('../models/person')
// Your Person test goes here!

Describe('AddressBook', () =>{
    it('should initialize properly', () => {
    book = new AddressBook()
    expect(book.entries).to.deep.equal([])
    })

    it('can add people to the book', () =>{
        book = new AddressBook()
        person1 = new Person('Michael','Storey','17 Mar')

        book.add(person1)
        expect(book.entries.length).to.equal(1)
    } )

    it('should return all the people with a given firstname', () =>{
        book = new AddressBook()
        person1 = new Person('Michael','Storey','17 Mar')
        book.add(person1)
        person2 = new Person('Ben','Smith','19 Mar')
        book.add(person2)
        person3 = new Person('Charlie','Kyle','22 Jan 1954')
        book.add(person3)
        person4 = new Person('Michael','Jenner','31 Oct 1999')
        book.add(person4)
        
        expect(book.findByFirstName('Michael')).to.deep.equal(['Michael','Michael'])
    })

    it('should return all the people with a given surname', () =>{
        book = new AddressBook()
        person1 = new Person('Michael','Storey','17 Mar')
        book.add(person1)
        person2 = new Person('Ben','Storey','19 Mar')
        book.add(person2)
        person3 = new Person('Charlie','Kyle','22 Jan 1954')
        book.add(person3)
        person4 = new Person('Kendal','Jenner','31 Oct 1999')
        book.add(person4)
        
        expect(book.findBySurame('Storey')).to.deep.equal(['Storey','Storey'])
    })

    it('should save to a file', () => {
        book = new AddressBook()
        person1 = new Person('Michael','Storey','17 Mar')
        book.add(person1)
        book.save()

        expect(book.entries.length).to.equal(1)
    })

})