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


