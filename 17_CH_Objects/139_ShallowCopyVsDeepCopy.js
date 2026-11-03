// ELI5: An object is like a box. Assigning it to another variable gives you
// another label for the same box; it does not make a new box.
const original = {
    name: "Alex",
    address: {
        city: "London",
    },
};

const sameObject = original;
sameObject.name = "Sam";
console.log("Same object:", original.name); // Sam

// JavaScript passes the object reference by value (often informally called
// "call by reference"). A function can change the shared object.
function changeCity(person) {
    person.address.city = "Paris";
}

changeCity(original);
console.log("After function change:", original.address.city); // Paris

// ELI5: Spread (...) makes a new outer box, but nested boxes are still shared.
const shallowCopy = { ...original };
shallowCopy.name = "Jordan";
shallowCopy.address.city = "Rome";
console.log("Shallow copy name:", shallowCopy.name); // Jordan
console.log("Original name:", original.name); // Sam (top-level values are separate)
console.log("Original city:", original.address.city); // Rome (nested object is shared)

// ELI5: structuredClone makes a new box and new nested boxes too.
const deepCopy = structuredClone(original);
deepCopy.address.city = "Tokyo";
console.log("Deep copy city:", deepCopy.address.city); // Tokyo
console.log("Original city after deep copy change:", original.address.city); // Rome