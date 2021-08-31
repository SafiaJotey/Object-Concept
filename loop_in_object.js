const bottle={
    price:100,
    color:"yellow",
    isCleaned:true
    
}
// for object printing forin loop
for(prop in bottle){
    console.log(`${prop}:${bottle[prop]}`);
}
// from keys
const keys=Object.keys(bottle);
for(const prop of keys){
    console.log(prop,bottle[prop]);
}
//from entries
const pair=Object.entries(bottle);
for(const [key,value] of pair){
    console.log(key,value);
}