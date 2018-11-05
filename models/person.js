// Your Person class goes here!

class Person {
    constructor(firstname, surname, dob){
        this.firstName = toProperCase(firstname)
        this.surname = toProperCase(surname)
        this.dob = dob
        this.emails = []
        this.phoneNumbers = []
        this.pets = []
        //this.fullName = fullname()
    }

    addPet(pet){
        this.pets.push(pet)
    }

    fullName(){
        return this.firstName + ' ' + this.surname
    }

    addEmail(email){
        this.emails.push(email)
    }

    addPhone(number){
        this.phoneNumbers.push(number)
    }

    returnFormattedDetails(){
        //heererererere
        stringToOutput = ''
        stringToOutput += '¬¬¬\n'
        stringToOutput += this.fullName() + '\n'
        stringToOutput += '--------------\n'
        stringToOutput += 'DOB: '+ this.dob + '\n\n'
        stringToOutput += 'EmailAddresses: \n'
        for (var i of this.emails){
            stringToOutput += ' - '+this.emails[i] + '\n'
        }
        stringToOutput += '¬¬¬\n\n¬¬¬\n'
        console.log(stringToOutput)
    }


}

function toProperCase(string){
    newString = ''
    newString += string[0].toUpperCase()
    newString += string.slice(1).toLowerCase()
    return newString
}

module.exports = Person