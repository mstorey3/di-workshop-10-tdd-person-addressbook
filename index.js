var readlineSync = require('readline-sync')

const Person = require('./models/person.js')
const AddressBook = require('./models/addressBook.js')
const Pet = require('./models/pet.js')

var myBook

gameHandler()

function gameHandler(){
    setup()
    shouldContinue = true
    while (shouldContinue){
        //loop with inputs
        //console.log('Program Running')
        //display options
        shouldContinue = menu(shouldContinue)
    }
}


function setup(){
    myBook = new AddressBook()
    console.log("New Book "+ myBook)
}

function menu(shouldContinue){
    console.log("\n1. Show Address Book")
    console.log("2. Search Address Book")
    console.log("3. Add New Person")
    console.log("4. Quit\n")

    var option = readlineSync.question('Input: ')
    if (option == 1){
        displayAddressBook()
        shouldContinue = true
    }
    if (option == 2){
        searchAddressBook()
        shouldContinue = true
    }
    if (option == 3){
        newPerson()
        shouldContinue = true
    }
    else if (option == 4){
        console.log('\n--------------------\nProgram Terminated\n--------------------')
        shouldContinue = false
    }
    return shouldContinue
}

function newPerson(){
    console.log('new Person')
    firstname = readlineSync.question('Firstname: ')
    surname = readlineSync.question('Surname: ')
    dob = readlineSync.question('DoB: ')
    person1 = new Person(firstname, surname, dob)
    myBook.add(person1)
    console.log(myBook.entries)
}

function displayAddressBook(){
    myBook.print()
}

function searchAddressBook(){
    var suboption = readlineSync.question('1 Firstname or 2 Surname: ')
    if (suboption == 1){
        console.log('search by first name')
    }
    else if (suboption == 2){
        console.log('search by surname')
    }
}