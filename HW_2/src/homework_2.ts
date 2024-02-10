interface Animal {
    name: string;
    woolColor?: string;
    feathersColor?: string;
    movement: string;
    makeSound: () => string;
}

class Cat implements Animal {
    name: string = "Cat"
    woolColor: string = "Grey"
    movement: string = "walking"
    makeSound() : string {
        return "meoow"
    }
}

class Bird implements Animal {
    name: string = "Bird"
    feathersColor?: string = "green"
    movement: string = "flying"
    makeSound() : string {
        return "quiiiiii"
    }
}

abstract class Car {
    constructor(protected owner: string) { }
    public makeSound() {}
}

class Mazda extends Car {
    constructor(public owner: string) {
        super("lolka")
    }

    public makeSound() {
        console.log("grrrrrrr")
    }
}

const mazda5 = new Mazda("lolka")
mazda5.makeSound();
console.log(mazda5.owner)

