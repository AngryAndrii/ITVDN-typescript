var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cat = (function () {
    function Cat() {
        this.name = "Cat";
        this.woolColor = "Grey";
        this.movement = "walking";
    }
    Cat.prototype.makeSound = function () {
        return "meoow";
    };
    return Cat;
}());
var Bird = (function () {
    function Bird() {
        this.name = "Bird";
        this.feathersColor = "green";
        this.movement = "flying";
    }
    Bird.prototype.makeSound = function () {
        return "quiiiiii";
    };
    return Bird;
}());
var Car = (function () {
    function Car(model, year, isCargo, owner) {
        var _this = this;
        this.model = model;
        this.year = year;
        this.isCargo = isCargo;
        this.owner = owner;
        this.allData = function () { return console.log("".concat(_this.model, " is factory on ").concat(_this.year, " and this car is ").concat(_this.isCargo)); };
    }
    Car.prototype.makeSound = function () { console.log('grrrrrrrrrrrrrrrrr'); };
    return Car;
}());
var Mazda = (function (_super) {
    __extends(Mazda, _super);
    function Mazda(model, year, isCargo, owner) {
        var _this = _super.call(this, model, year, isCargo, owner) || this;
        _this.model = model;
        _this.year = year;
        _this.isCargo = isCargo;
        _this.owner = owner;
        return _this;
    }
    return Mazda;
}(Car));
var cx5 = new Mazda("mazda cx 5", 2009, false, "Sponge bob");
var mazda3 = new Mazda("mazda 3", 2017, false, "Squidvard");
var titan = new Mazda("mazda Titan", 1987, true, "Patrik");
var Daewoo = (function (_super) {
    __extends(Daewoo, _super);
    function Daewoo(model, year, isCargo, owner) {
        var _this = _super.call(this, model, year, isCargo, owner) || this;
        _this.model = model;
        _this.year = year;
        _this.isCargo = isCargo;
        _this.owner = owner;
        return _this;
    }
    return Daewoo;
}(Car));
var nexia = new Daewoo("daewoo nexia", 1999, false, "Bart");
var lanos = new Daewoo("daewoo Lanos", 2017, false, "Homer");
var lanosCargo = new Daewoo("daewoo Lanos Pirozhock", 1987, true, "Marge");
var Lamborghini = (function (_super) {
    __extends(Lamborghini, _super);
    function Lamborghini(model, year, isCargo, owner) {
        var _this = _super.call(this, model, year, isCargo, owner) || this;
        _this.model = model;
        _this.year = year;
        _this.isCargo = isCargo;
        _this.owner = owner;
        return _this;
    }
    return Lamborghini;
}(Car));
var urus = new Lamborghini("urus", 2022, false, "Shreder");
var huracan = new Lamborghini("huracan", 2019, false, "Mickelangelo");
var frog = new Lamborghini("frog", 2015, false, "Rafael");
//# sourceMappingURL=homework_2.js.map