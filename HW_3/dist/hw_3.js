var Car = (function () {
  function Car(model) {
    this.model = model;
  }
  Car.prototype.showModel = function () {
    return this.model;
  };
  return Car;
})();
var lanos = new Car("daewoo lanos");
console.log(lanos.showModel());
var matiz = new Car(true);
console.log(matiz.showModel());
var KeyValyeDescription = (function () {
  function KeyValyeDescription() {}
  Object.defineProperty(KeyValyeDescription.prototype, "key", {
    get: function () {
      return this._key;
    },
    set: function (val) {
      if (!val) {
        throw new Error("Key value can not be empty!");
      }
      this._key = val;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(KeyValyeDescription.prototype, "value", {
    get: function () {
      return this._value;
    },
    set: function (val) {
      if (!val) {
        throw new Error("value cant not be empty");
      }
      this._value = val;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(KeyValyeDescription.prototype, "descr", {
    get: function () {
      return this._descr;
    },
    set: function (val) {
      if (!val) {
        throw new Error("value cant not be empty");
      }
      this._descr = val;
    },
    enumerable: false,
    configurable: true,
  });
  return KeyValyeDescription;
})();
var firstString = new KeyValyeDescription();
firstString.key = 1;
firstString.value = true;
firstString.descr = "it is first string with value and key and description";
var Dictionary = (function () {
  function Dictionary() {}
  return Dictionary;
})();
//# sourceMappingURL=hw_3.js.map
