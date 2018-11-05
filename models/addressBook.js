var fs = require('fs')
var fileContent = 'Hello Michael'

class AddressBook {
    constructor(){
        this.entries = []
    }

    print(){
        if (this.entries.length > 0){
        console.log('Address Book: ')
        for (var i = 0; i < this.entries.length; i++){
            console.log(this.entries[i].fullName())
        }
        }
        else{
            console.log('There are no contacts in your address book.')
        }
    }

    add(person){
        this.entries.push(person)
    }

    findByFirstName(name){
        var people = []
        for(var i = 0; i < this.entries.length; i++){
            if (this.entries[i].firstName == name){
                people.push(this.entries[i].firstName)
            }
        }
        console.log(people)
        return(people)
    }

    findBySurame(name){
        var people = []
        for(var i = 0; i < this.entries.length; i++){
            if (this.entries[i].surname == name){
                people.push(this.entries[i].surname)
            }
        }
        console.log(people)
        return(people)
    }

    save(){
        //save to json file
        fs.writeFile('./AddressBook.json', JSON.stringify(this), (err) => {
            if (err){
                console.error(err)
            }
        })
        console.log("File has been created")
    }
}

module.exports = AddressBook