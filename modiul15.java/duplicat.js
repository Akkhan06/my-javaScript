let allNumber = [2,3,4,2,5,1,4,5];
let unick = [];

for(let i = 0; i<allNumber.length; i++){
    let element = allNumber[i];

    let nic = unick.indexOf(element);
    if (nic == -1){
        unick.push(element);
    }
}

console.log(unick);


