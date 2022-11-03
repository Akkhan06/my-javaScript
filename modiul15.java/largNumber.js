let allNumber = [13, 1324, 14, 170, 34, 80];
let larg = allNumber[0];
let sum = 0;

for(let i = 0; i<=allNumber.length; i++){
    let element = allNumber[i];
    if(larg < element){
        larg = element;
    }
    sum = sum + element; 
}
console.log(larg);
console.log(sum);

