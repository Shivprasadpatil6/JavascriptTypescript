let original =[1,2,3];
let copy1=[...original];
// console.log(original);
// console.log(copy1);

// slice create new array
let copy2=original.slice();
copy1.push(92);
copy2.push(93);
console.log(original);
console.log(copy1);
console.log(copy2);
// Deep_copy_array
 let deep_copy_array=original;
 //Deep copy
 deep_copy_array.push(91);
 console.log(original);
 console.log(deep_copy_array);
