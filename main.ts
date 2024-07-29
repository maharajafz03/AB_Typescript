

type Address = {
    state: string;
    distric?: string;
    city: string;
    mob: number;
}

interface name  {
    King: string;
    age: string;
    address: Address
}

const luna: name[]= [{
    King: "hello",
    age: "world",
    address:{
        state: "tamilnadu",
        city: "chennai",
        mob: 876962253
    }
}]

luna.push({King: "maga", age: "world", address: {state: "mumbai", city: "dharun", mob: 89435833}})



const bike: string[] = ["yamaha", "honda", "kawasaki", "ducati", "bmw"]
bike.push("aprilars-v4")

let danger: string[] | number[] | boolean[] = [true];
danger = ["mangai"];

console.log(danger)
 console.log(luna)
 console.log(bike)