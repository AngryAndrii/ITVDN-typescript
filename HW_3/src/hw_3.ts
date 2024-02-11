// Створіть словник власних визначень, використовуючи Generic function. В середині повинні бути визначення для трьох властивостей – ключ, значення, опис (різних типів даних). Для отримання чи запису використовуйте get/set реалізації доступу. Також для полів необхідно використовувати модифікатори доступу (на ваш розсуд). В підсумку повинний вийти словник термінів, отримуючи у вхідний параметр різні типи даних для реалізації.

// class Enemy {
//     constructor(public power: number) {
//     }
// }

// class Alien extends Enemy {
//     species: string;
//     constructor(public name: string, public phrase: string, public power: number, private birthYear: number) {
//         super(power);
//         this.species = "Alien"
//     }
//     fly = (): void => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     sayPhrase = (): void => console.log(this.phrase)
//     sayAll = (): void => console.log(`hello i am a ${this.name} my species is a ${this.species}. ${this.phrase}`)
//     sayPower = (): void => console.log(`my crazy power is ${this.power}`)
//     howOld = (): void => console.log(`${this.name} was born in ${this.birthYear}`)
// }

// const monster: Alien = new Alien("Monster_Alien", "lets go to cosmo Sheep!!!", 34, 1702)

// monster.fly();
// monster.sayPhrase();
// monster.sayAll();
// monster.sayPower();
// monster.howOld();

// console.log(monster)

class Character {
    constructor (public speed: number) {
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(public name: string, public phrase: string, public power: number, public speed: number) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    species: string;
    constructor (public name: string, public phrase: string, public power: number, public speed: number) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

class Bug extends Enemy {
    species: string;
    constructor (public name: string, public phrase: string, public power: number, public speed: number) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot extends Enemy {
    species: string;
    constructor (public name: string, public phrase: string, public power: number, public speed: number) {
        super(name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
}


const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30)
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40)
