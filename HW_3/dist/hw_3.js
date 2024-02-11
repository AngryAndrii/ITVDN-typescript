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
var Character = (function () {
    function Character(speed) {
        var _this = this;
        this.speed = speed;
        this.move = function () { return console.log("I'm moving at the speed of ".concat(_this.speed, "!")); };
        this.speed = speed;
    }
    return Character;
}());
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name, phrase, power, speed) {
        var _this = _super.call(this, speed) || this;
        _this.name = name;
        _this.phrase = phrase;
        _this.power = power;
        _this.speed = speed;
        _this.sayPhrase = function () { return console.log(_this.phrase); };
        _this.attack = function () { return console.log("I'm attacking with a power of ".concat(_this.power, "!")); };
        _this.name = name;
        _this.phrase = phrase;
        _this.power = power;
        return _this;
    }
    return Enemy;
}(Character));
var Alien = (function (_super) {
    __extends(Alien, _super);
    function Alien(name, phrase, power, speed) {
        var _this = _super.call(this, name, phrase, power, speed) || this;
        _this.name = name;
        _this.phrase = phrase;
        _this.power = power;
        _this.speed = speed;
        _this.fly = function () { return console.log("Zzzzzziiiiiinnnnnggggg!!"); };
        _this.species = "alien";
        return _this;
    }
    return Alien;
}(Enemy));
var Bug = (function (_super) {
    __extends(Bug, _super);
    function Bug(name, phrase, power, speed) {
        var _this = _super.call(this, name, phrase, power, speed) || this;
        _this.name = name;
        _this.phrase = phrase;
        _this.power = power;
        _this.speed = speed;
        _this.hide = function () { return console.log("You can't catch me now!"); };
        _this.species = "bug";
        return _this;
    }
    return Bug;
}(Enemy));
var Robot = (function (_super) {
    __extends(Robot, _super);
    function Robot(name, phrase, power, speed) {
        var _this = _super.call(this, name, phrase, power, speed) || this;
        _this.name = name;
        _this.phrase = phrase;
        _this.power = power;
        _this.speed = speed;
        _this.transform = function () { return console.log("Optimus prime!"); };
        _this.species = "robot";
        return _this;
    }
    return Robot;
}(Enemy));
var alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
var alien2 = new Alien("Lien", "Run for your lives!", 15, 60);
var bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);
var bug2 = new Bug("Erik", "I drink decaf!", 5, 120);
var Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30);
var Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40);
//# sourceMappingURL=hw_3.js.map