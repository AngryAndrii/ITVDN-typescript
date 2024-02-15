// Створіть словник власних визначень, використовуючи Generic function. В середині повинні бути визначення для трьох властивостей – ключ, значення, опис (різних типів даних). Для отримання чи запису використовуйте get/set реалізації доступу. Також для полів необхідно використовувати модифікатори доступу (на ваш розсуд). В підсумку повинний вийти словник термінів, отримуючи у вхідний параметр різні типи даних для реалізації.

// ключ значення опис - різних типів данних
// для отримання чи запису використовуємо get set реалізації доступу.
// використовуємо модифікатори доступу на власний розсуд  public private protected.
// підсумок - словник термінів отримує різні типи даних та виводить результат
class KeyValyeDescription<Tkey, Tvalue, Tdescr> {
    // прватне значення ключа
    private _key: Tkey;
    // присвоїти значення ключа сеттер.
    public set key(val: Tkey) {
        if (!val) {
            throw new Error("Key value can not be empty!")
        }
        this._key = val;
    }
    // Взяти значення ключа геттер.
    public get key(): Tkey {
        return this._key;
    }
    // прватне значення визначення
    private _value: Tvalue;
    // присвоїти значення визначення сеттер.
    public set value(val: Tvalue) {
        if (!val) {
            throw new Error("value cant not be empty")
        }
        this._value = val;
    }
    // Взяти значення визначення геттер.
    public get value(): Tvalue {
        return this._value;
    }
        // захищене значення опису
    protected _descr: Tdescr;
    // присвоїти значення опису сеттер.
    public set descr(val: Tdescr) {
        if (!val) {
            throw new Error("value cant not be empty")
        }
        this._descr = val;
    }
    // Взяти значення опису геттер.
    public get descr(): Tdescr {
        return this._descr;
    }
}

class Dictionary<Tkey, Tvalue, Tdescr> {
    private data: KeyValyeDescription<Tkey, Tvalue, Tdescr>[] = [];
    public add(key: Tkey, value: Tvalue, descr: Tdescr) {
        const entry = new KeyValyeDescription<Tkey, Tvalue, Tdescr>();
        entry.key = key;
        entry.value = value;
        entry.descr = descr;
        this.data.push(entry);
    }

    public getValue(key: Tkey): string | null {
        const entry = this.data.find(item => item.key == key);
        const all = `${entry.value} - ${entry.descr}`
        return entry ? all : null;
    }
}

const dictionary = new Dictionary<number, string, string>();
dictionary.add(1, 'hello', 'привіт');
dictionary.add(2, 'apple', 'яблуко');
dictionary.add(3, 'phone', 'телефон');

console.log(dictionary.getValue(3));