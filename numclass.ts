class salary {
    takehome: number;
    base: number;

    constructor(takehome: number,  base: number) {
        this.base = base;
        this.takehome = takehome
    }
}

class invest extends salary {
    crypto: number;
    stock: number;

    constructor(takehome: number, base: number, crypto: number, stock: number) {
      super(takehome, base)
      this.crypto = crypto;
      this.stock = stock;  
    }

    value(): number {
        const res: number = this.takehome - this.base;
        const ser: number  = this.crypto + this.stock;
        const mil: number = res + ser;
        return mil;
    }


}

const detail: invest = new invest (1000, 7823, 92364, 23746);
 console.log(detail.value());