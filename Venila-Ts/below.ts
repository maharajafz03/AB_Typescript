type address1 = {
    state: string;
    city: string;
    phone: number;
}

type School = {
    schoolname: string;
    address: address1;
}

type Data = {
    name: string;
    class: string;
    age: number;
    school: School;
}

// Initialize the array with an empty array
const details: Data[] = [{
    name: "raja",
    class: "12th",
    age: 17,
    school: {
        schoolname: "ABCD High School",
        address: {
            state: "California",
            city: "Los Angeles",
            phone: 1239874567890
        }
    }
}];

// Function to add a new entry to the array
function addDetail(detail: Data) {
    details.push(detail);
}

// Example usage
addDetail({
    name: "Maga",
    class: "10th",
    age: 16,
    school: {
        schoolname: "ABC High School",
        address: {
            state: "California",
            city: "Los Angeles",
            phone: 1234567890
        }
    }
});


console.log(JSON.stringify(details, null, 2));
//console.log(`${details.name}`);
