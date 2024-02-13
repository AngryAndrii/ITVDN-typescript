// Створіть словник власних визначень, використовуючи Generic function. В середині повинні бути визначення для трьох властивостей – ключ, значення, опис (різних типів даних). Для отримання чи запису використовуйте get/set реалізації доступу. Також для полів необхідно використовувати модифікатори доступу (на ваш розсуд). В підсумку повинний вийти словник термінів, отримуючи у вхідний параметр різні типи даних для реалізації.
class Car<T> {
    constructor(public model: T){  }
    public showModel(): T {
        return this.model;
    }
}
const lanos = new Car<string>('daewoo lanos');
console.log(lanos.showModel())
const matiz = new Car<boolean>(true);
console.log(matiz.showModel());
// ключ значення опис - різних типів данних
// для отримання чи запису використовуємо get set реалізації доступу.
// використовуємо модифікатори доступу на власний розсуд  public private protected.
// підсумок - словник термінів отримує різні типи даних та виводить результат
class Dictionary<Tkey, Tvalue, Tdescr> {
    // прватне значення ключа
    private _key: Tkey;
    // присвоїти значення ключа сеттер.
    public set key(value: Tkey) {
        if (!value) {
            throw new Error("value can not be empty!")
        }
        this._key = value;
    }
    // Взяти значення ключа геттер.
    public get key(): Tkey {
        return this._key;
    }
}
