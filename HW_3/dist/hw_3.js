var KeyValyeDescription = (function () {
    function KeyValyeDescription() {
    }
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
        configurable: true
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
        configurable: true
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
        configurable: true
    });
    return KeyValyeDescription;
}());
var Dictionary = (function () {
    function Dictionary() {
        this.data = [];
    }
    Dictionary.prototype.add = function (key, value, descr) {
        var entry = new KeyValyeDescription();
        entry.key = key;
        entry.value = value;
        entry.descr = descr;
        this.data.push(entry);
    };
    Dictionary.prototype.getValue = function (key) {
        var entry = this.data.find(function (item) { return item.key == key; });
        var all = "".concat(entry.value, " - ").concat(entry.descr);
        return entry ? all : null;
    };
    return Dictionary;
}());
var dictionary = new Dictionary();
dictionary.add(1, 'hello', 'привіт');
dictionary.add(2, 'apple', 'яблуко');
dictionary.add(3, 'phone', 'телефон');
console.log(dictionary.getValue(3));
//# sourceMappingURL=hw_3.js.map