var Car = (function () {
    function Car(model) {
        this.model = model;
    }
    Car.prototype.showModel = function () {
        return this.model;
    };
    return Car;
}());
var lanos = new Car('daewoo lanos');
console.log(lanos.showModel());
var matiz = new Car(true);
console.log(matiz.showModel());
//# sourceMappingURL=hw_3.js.map