interface ISalary {
    takehome: number;
    base: number;
    value(): number;
}

interface IInvestment {
    crypto: number;
    stock: number;
}

class Salary implements ISalary {
    takehome: number;
    base: number;

    constructor(takehome: number, base: number) {
        this.base = base;
        this.takehome = takehome;
    }

    value(): number {
        return this.takehome - this.base;
    }
}

class Investment implements IInvestment {
    crypto: number;
    stock: number;

    constructor(crypto: number, stock: number) {
        this.crypto = crypto;
        this.stock = stock;
    }
}

class Combined implements ISalary, IInvestment {
    takehome: number;
    base: number;
    crypto: number;
    stock: number;

    constructor(takehome: number, base: number, crypto: number, stock: number) {
        this.takehome = takehome;
        this.base = base;
        this.crypto = crypto;
        this.stock = stock;
    }

    value(): number {
        return (this.takehome - this.base) + (this.crypto + this.stock);
    }
}

const detail = new Combined(1000, 7823, 92364, 23746);
console.log(detail.value());
