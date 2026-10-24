let arr=[1,2,3];
console.log(arr.length);
//add
arr.push(4);
console.log(arr);
// remove
arr.pop(4);
console.log(arr);
arr.push(4,5);
console.log(arr);
// unshift add to beigin
arr.unshift(0);
console.log(arr);
// remove from begin
arr.shift(2);
console.log(arr);
arr.splice(2,1);
console.log(arr);
arr.splice(2,0,99);
console.log(arr);
arr.splice(2,1,99);
console.log(arr);
arr.splice(1,2,10,10);
console.log(arr);