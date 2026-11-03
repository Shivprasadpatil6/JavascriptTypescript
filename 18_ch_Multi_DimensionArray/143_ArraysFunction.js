let scores=[
    [85,90,78],
    [60,45,70],
    [95,88,92]
];

// Matrix -Row =Col->
let rowsum=scores.map(row=>row.reduce((a,b) => a+b));
console.log(rowsum);