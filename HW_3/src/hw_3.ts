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