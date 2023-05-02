let age = Math.round(Math.random() * 80); //Random age assumiing person can be between 0~80 years old
//let age = 65; //Manual entry of age

console.log(`Person's age is ${age}`);
if(age<2)
{
    console.log("Person is a Baby!")
}
else if(age>=2 && age<4)
{
    console.log("Person is a Toddler!")
}
else if(age>=4 && age<13)
{
    console.log("Person is a Kid!")
}
else if(age>=13 && age<20)
{
    console.log("Person is a Teenager!")
}
else if(age>=20 && age<65)
{
    console.log("Person is an Adult!")
}
else
{
    console.log("Person is an Elder!")
}