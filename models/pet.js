class Pet {
    constructor(name, animal){
        this.name = name
        this.animal = animal
        this.sound = ''
    }

    makeSound(){
        return this.sound
    }

}


module.exports = Pet