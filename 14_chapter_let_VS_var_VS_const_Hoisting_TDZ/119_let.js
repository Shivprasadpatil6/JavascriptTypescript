let b=20;
console.log(b);
function printHello(){
    console.log("Hello TheTestingAcdemy");
    let b=30;//local scope
    console.log(b);
    if(true){
        let b=5;
        console.log(b);
    }
    console.log("let ->",b);

}
printHello();
// let  is block scope
// variable is functional scope
//