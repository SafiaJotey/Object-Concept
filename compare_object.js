const first={ a:4,b:9};
const second={ a:4,b:9};
const third=first;
//if(first==second)->not same because references are not same
if(first==third){ //same => references are same
    console.log("same");
}
else{
    console.log("not same");
}
//to stringify
if(JSON.stringify(first)===JSON.stringify(second)){
    console.log("same");
}
else{
    console.log("not same");
}

//when position also not same
const first2={ c:4,d:9};
const second2={ d:9,c:4};
if(JSON.stringify(first2)===JSON.stringify(second2)){
    console.log("same");
}
else{
    console.log("not same");
}//stringify also not working

function compareObject(obj1,obj2){
    if(Object.keys(obj1).length!=Object.keys(obj2).length){
        console.log("object not same");
    }
    for(prop in obj1){
        if(obj1[prop]!=obj2[prop]){
            return false;
        }
        return true;
    }
}
const check=compareObject(first2,second2);
console.log(check);
