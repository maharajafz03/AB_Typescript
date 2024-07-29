class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}
class employe extends Person {
    dep: string;
    salary: number;

    constructor(name: string, age: number, dep: string, salary: number) {
        super(name, age)
        this.dep = dep;
        this.salary = salary;
    }

    ground(): string {
        return `hello im ${this.name} ${this.age} old working in ${this.dep} my current pacakage is ${this.salary}`
    } 
}

const data: employe = new employe ("maga", 23, "web3", 1100000)

console.log(data.ground())

