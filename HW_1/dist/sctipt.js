var cupSize = {
    small: 10,
    large: 25,
};
var topings = {
    shocolate: 5,
    caramel: 6,
    berries: 10
};
var marsh = 5;
function getCup() {
    var inputCup = prompt("який стаканчик? small 10 or large 25", "large");
    if (inputCup === 'small') {
        return cupSize.small;
    }
    return cupSize.large;
}
function getTopping() {
    var totalTopping = 0;
    var wantChocolate = prompt("додати шоколад 5? yes or no", 'yes');
    var wantCaramel = prompt("додати карамель 6? yes or no", 'yes');
    var wantBerries = prompt("додати ягоди 10? yes or no", 'yes');
    if (wantChocolate === "yes") {
        totalTopping += topings.shocolate;
    }
    if (wantCaramel === "yes") {
        totalTopping += topings.caramel;
    }
    if (wantBerries === 'yes') {
        totalTopping += topings.berries;
    }
    return totalTopping;
}
function getMarshmallow() {
    var wantMarsh = prompt("додати маршмеллоу 5? yes or no", "yes");
    if (wantMarsh === "yes") {
        return marsh;
    }
    return undefined;
}
function getTotal(cup, topping, marshmallow) {
    if (marshmallow === undefined) {
        return cup + topping;
    }
    return cup + topping + marshmallow;
}
var button = document.querySelector("#button");
button.addEventListener("click", function () {
    var total = (getTotal(getCup(), getTopping(), getMarshmallow()));
    document.querySelector("#total").append(total.toString());
});
//# sourceMappingURL=sctipt.js.map