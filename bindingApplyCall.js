const student={
    name:"Safia",
    id:1786,
    money:5000,
    treat:function treatDey(expenses,tips){
       this.money=this.money-expenses-(expenses*.10)-tips;
       console.log(this);
    }
}

const student2={
    name:"Fatu",
    id:1710,
    money:5000
    
}
//binding->need to call 
const student2Treat=student.treat.bind(student2);
student2Treat(700,30);
//apply-> not need to call
 student.treat.apply(student2,[800,120]);
 //call-> not need to call
 student.treat.call(student2,800,120);
 const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend());
