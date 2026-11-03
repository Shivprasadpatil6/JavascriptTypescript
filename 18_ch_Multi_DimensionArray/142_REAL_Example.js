let testMatrix=[
  ["login","pass",200],
  ["checkout","fail",404],
  ["search","pass",180]
];

for(let i=0;i<testMatrix.length;i++)
{
    for(let j=0;j<testMatrix[i].length;j++)
    {
        // process stdout it is console without new line
        process.stdout.write(testMatrix[i][j]+" ");
    }
    console.log("");
}