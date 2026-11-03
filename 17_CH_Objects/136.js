const user={
    name:"JOhn",
    age:30,
    email:"john@example.com"
};
console.log(user);
// Accessing properties
console.log(user.name);
console.log(user["age"]);
// Adding modifiy properties'
user.city="NYC";
user.age=31;
console.log(user);