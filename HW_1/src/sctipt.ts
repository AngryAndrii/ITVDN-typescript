const cupSize = {
    small: 10,
    large: 25,
}

const topings = {
    shocolate: 5,
    caramel: 6,
    berries: 10
}

const marsh: number = 5;

function getCup(): number {
    const inputCup: string = prompt("який стаканчик? small 10 or large 25", "large");
    if (inputCup === 'small') {
            return cupSize.small;
        }
        return cupSize.large;
}

function getTopping(): number {
    let totalTopping: number = 0;
    const wantChocolate: string = prompt("додати шоколад 5? yes or no", 'yes');
    const wantCaramel: string = prompt("додати карамель 6? yes or no", 'yes');
    const wantBerries: string = prompt("додати ягоди 10? yes or no", 'yes');
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

function getMarshmallow(): (number | undefined) {
    let wantMarsh: string = prompt("додати маршмеллоу 5? yes or no", "yes")
    if (wantMarsh === "yes") {
        return marsh;
    }
    return undefined;
}

function getTotal(cup: number, topping: number, marshmallow?: number): number {
    if (marshmallow === undefined) {
        return cup + topping;
    }
    return cup + topping + marshmallow;
}

const button: Element = document.querySelector("#button");

button.addEventListener("click", () => {
    let total: number = (getTotal(getCup(), getTopping(), getMarshmallow()));
    document.querySelector("#total").append(total.toString());
} )