let invitees : string[] = ["Marie Curie", "Nikola Tesla", "Ibn Battuta", "Reinhold Messner", "Antoni Gaudi"];

for(let i in invitees)
{
    console.log(`Dear Mr/Mrs ${invitees[i]} \nI'm sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success.\n\nYour Admirer,\nHaseeb Aslam Butt\n\n`);
}

console.log(`I regret to inform that our honorable guest Mr/Mrs ${invitees[4]} can't make it to the dinner party due to his/her prior plan to visit the beautiful island of Santorini.\n`)

for(let i in invitees)
{
    if (invitees[i]==="Antoni Gaudi")
    {
        invitees[i] = "Zaha Hadid";
    }
}

for(let i in invitees)
{
    console.log(`Dear Mr/Mrs ${invitees[i]} \nI'm sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success.\n\nYour Admirer,\nHaseeb Aslam Butt\n\n`);
}

console.log("Hurray! We have found a bigger dinner table! More the merrier!\n")

invitees.unshift("Ibn Sina");
invitees.splice(invitees.length/2,0,"Nani Jan");
invitees = append(invitees,"Monica Bellucci");

for(let i in invitees)
{
    console.log(`Dear Mr/Mrs ${invitees[i]} \nI'm sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success.\n\nYour Admirer,\nHaseeb Aslam Butt\n\n`);
}




function append(arr:string[],newElement:string):string[]
{
    arr.push(newElement);
    return arr;
}

console.log("Error 404: Table not found! Crap Now I can invite only 2 people :(\n");

do
{
    console.log(`Dear Mr/Mrs ${invitees.pop()} \nI'm really sorry. You are no longer invited TA TA!\n`)
}while (invitees.length > 2);

for(let i in invitees)
{
    console.log(`Dear Mr/Mrs ${invitees[i]} \nParty will go on as scheduled!\n\n`);
}

invitees.pop();
invitees.pop();

console.log(invitees);