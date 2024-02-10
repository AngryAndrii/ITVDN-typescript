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
    function Car(owner) {
        this.owner = owner;
    }
    Car.prototype.makeSound = function () { };
    return Car;
}());
var Mazda = (function (_super) {
    __extends(Mazda, _super);
    function Mazda(owner) {
        var _this = _super.call(this, "lolka") || this;
        _this.owner = owner;
        return _this;
    }
    Mazda.prototype.makeSound = function () {
        console.log("grrrrrrr");
    };
    return Mazda;
}(Car));
var mazda5 = new Mazda("lolka");
mazda5.makeSound();
console.log(mazda5.owner);
//# sourceMappingURL=homework_2.js.map