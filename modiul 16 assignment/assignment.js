// feetToMile
function feetToMile(n){
    let feet = n * 0.000189394;
    feet = feet.toFixed(1);
    return feet;  
}
let number = 15000;
let result = feetToMile(number);
console.log(number + " foot" + " = "+ result+ " Mile");


// function tinyFriend(n){
function tinyFriend(n){
    let allFriend = n[0];
    for(let i =0; i < n.length; i++){
        let element = n[i];
        if(allFriend.length===element.length){
            allFriend = element;
        }
    }
    return allFriend;
}
    let allf = tinyFriend(["afsar", "k", "akrama", "ra"]);
    console.log(allf);



// woodCalculator
function woodCalculator(n1,n2,n3){
    let num1 = n1*1;
    let num2 = n2*3;
    let num3 = n3*5;
    let allResult = num1 + num2 + num3;
    return allResult;
}

let allarr = woodCalculator(3, 4, 5)
console.log(allarr);


// brickCalculator
function brickCalculator(n){   
    let eit;
    let total;
    if (n<=10){
        eit = n*15;
    }else if(n<=20){
        eit = 150 + (n-10)*12;
    }else{
        eit = 120 + 150 + (n-20)*10;
    }
    total = eit * 1000;
    return total; 
}

let totalTOla = 23;
let brik = brickCalculator(totalTOla);
console.log(totalTOla + " tolar jonno "+brik+ " eit dorkar");




