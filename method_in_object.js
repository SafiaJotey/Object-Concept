const student={
    name:"Safia",
    id:1786,
    money:5000,
    isReach: false,
    course_marks:[87,90,89,90],
    best_friend:{
        name:"fatema",
        job:"web developer"
    },
    exam:function(){
        console.log(this.name,"is approaching in exam ")
    },
    treat:function treatDey(expenses){
       this.money=this.money-expenses;
       return this.money;
    }
}
student.exam();
const remaining=student.treat(400);
const remaining1=student.treat(400);
console.log(remaining1);