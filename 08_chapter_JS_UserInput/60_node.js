const readLine=require ('readLine');

const rl=readLine.createInterface(
    {
        input:Process.stdin,
        output :process.stdout
    }
)
rl.question("Enter a number: ",)(input)=
{
    let num= Number(input);
     if(num %2===0)
     {
        console.log(num+" is Even");
     }
     {
        console.log(num+ " is Odd");

     }
     rl.close();
});
