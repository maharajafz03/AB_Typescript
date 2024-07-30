// // Generic function
// function identity<T>(arg: T): T {
//     return arg;
// }

// const num = identity(42);    // num is of type number
// const str = identity("hello"); // str is of type string

// console.log(num); // Output: 42
// console.log(str); // Output: hello

// // Generic class
// class Box<T> {
//     private value?: T;

//     constructor(value: T) {
//         this.value = value;
//     }

//     getValue(): T | undefined {
//         return this.value;
//     }
// }

// // Creating instances of Box
// const numberBox = new Box<number>(42);   // numberBox is a Box<number>
// const stringBox = new Box<string>("hello"); // stringBox is a Box<string>

// console.log(numberBox.getValue()); // Output: 42
// console.log(stringBox.getValue()); // Output: hello

// // Example of using a generic type variable
// const juli: string = "welcome";
//console.log(juli); // Output: welcome
type Box<T> = {
    content: T;
};


function wrapInBox<T>(value: T): never {
   const result: Box<T> = {content: value}
   console.log(result) 
   //return result
    
}

wrapInBox(56)
 wrapInBox("mentiion")
