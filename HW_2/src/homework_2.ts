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

// Створити поняття абстрактного батьківського класу Car. Від нього створити 3 похідні класи (марки автомобілів) із застосуванням методу super(). У класах використовувати модифікатори як у батьківському класі, і у похідних. Створити від похідних класів мінімум по 2 екземпляри (моделі автомобілів). Методи у похідних класах повинні виводити на екран усі властивості (опис автомобіля). Подумайте, які властивості у похідних класах мають бути public, які – private та protected.

abstract class Car {
    constructor(public model: string, public year: number, public isCargo: boolean, protected owner: string) { }
    public makeSound() {console.log('grrrrrrrrrrrrrrrrr') }
    public allData = () => console.log(`${this.model} is factory on ${this.year} and this car is ${this.isCargo}`)
}

class Mazda extends Car {
    constructor(public model: string, public year: number, public isCargo: boolean, protected owner: string) {
        super(model, year, isCargo, owner)
    }
}

const cx5: Mazda = new Mazda("mazda cx 5", 2009, false, "Sponge bob");
const mazda3: Mazda = new Mazda("mazda 3", 2017, false, "Squidvard");
const titan: Mazda = new Mazda("mazda Titan", 1987, true, "Patrik");

class Daewoo extends Car {
    constructor(public model: string, public year: number, public isCargo: boolean, protected owner: string) {
        super(model, year, isCargo, owner)
    }
}

const nexia: Daewoo = new Daewoo("daewoo nexia", 1999, false, "Bart");
const lanos: Daewoo = new Daewoo("daewoo Lanos", 2017, false, "Homer");
const lanosCargo: Daewoo = new Daewoo("daewoo Lanos Pirozhock", 1987, true, "Marge");

class Lamborghini extends Car {
    constructor(public model: string, public year: number, public isCargo: boolean, protected owner: string) {
        super(model, year, isCargo, owner)
    }
}

const urus: Lamborghini = new Lamborghini("urus", 2022, false, "Shreder");
const huracan: Lamborghini = new Lamborghini("huracan", 2019, false, "Mickelangelo");
const frog: Lamborghini = new Lamborghini("frog", 2015, false, "Rafael");
