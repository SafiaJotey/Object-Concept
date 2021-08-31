const bottle={
    price:100,
    color:"yellow",
    isCleaned:true
    
}
const keys=Object.keys(bottle);
console.log(keys);
const values=Object.values(bottle);
console.log(values);
const pair=Object.entries(bottle);
console.log(pair);

// delete bottle.isCleaned;
// console.log(bottle);

//Object.seal(bottle);//delete hobena but value change hobe
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price=500;
console.log(bottle);//delete hobena, value change o hobena
