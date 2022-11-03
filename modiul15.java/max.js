var bussness = 500;
let sorkar = 3300;
let modiSorkar = 40;

let total = Math.max(bussness, sorkar, modiSorkar);

console.log(total);

// othars way 

if(bussness > sorkar){

    if(bussness > modiSorkar){
        console.log("busness man is a bigest man");
    }else{
        console.log("modisorkar in a bigest man");
    }
}else{
    console.log("sorkar is a bigest man");
}
    

// bigest man by array 

let student = [20, 30, 25, 70, 60];

let element = [0];

for(let i = 0; i< student.length; i++){
    let maxValue = student[i];
    if(maxValue > element){
        element = maxValue;  
    }
}

console.log(element);