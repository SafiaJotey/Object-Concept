//using object literal

const person={ name:"Sakib Al Hasan", profession:"Cricketer"}

//constructor
const student= new Object();


//Object.create()
const human=Object.create(null);
console.log(human);
  //-Object.create() with inheritance
  const people=Object.create(person);
  console.log(people.name); 

//class
class teacher{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const teacher1=new teacher("SRK",57);
console.log(teacher1);

// function
function man(name){
    this.name=name;
}
const man1=new man("kader");
console.log(man1);