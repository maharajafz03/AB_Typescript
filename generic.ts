function identity<T>(arg: T): T {
    return arg;
}

const num = identity(42);    // num is of type number
const str = identity("hello"); // str is of type string

console.log(num)
console.log(str)

class Box<T> {
    private value?: T;
    private data: T;

    constructor(value: T, data: T) {
        this.value = value;
        this.data = data;
    }

    getValue(): T {
        return this.value, this.data;
    }
}

const numberBox = new Box<string>("welcome");   // numberBox is a Box<number>
//const stringBox = new Box<string>("hello"); // stringBox is a Box<string>

console.log(numberBox.getValue())
//console.log(stringBox.getValue())


 