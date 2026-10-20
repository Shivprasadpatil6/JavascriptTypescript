let score=-1;

if(score>100 || score<0)
{
console.log("Invalid score");
}
else{
    if(score>90)
{
    console.log("Grade A-Excellent");
}
else if(score>80 && score <=90)
{
    console.log("grade B-Very Good");
}
else if(score>70 && score <=80)
{
  console.log("Grade-c-good");
}
else if(score>60 && score<=70)
{
    console.log("Grade d-averrage");
}
else if(score>50 && score <=60)
{
    console.log("Grade E -Needs IMprovement");
}
else{
    console.log("Grade F-Fail");
}
}

