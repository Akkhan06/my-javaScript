function any(n){
    let text = "";

    for(let i = 0; i<n.length; i++){

        let che = n[i];
        
        text = che + text;
    }

    return text;
}

let num = "hello afsar khan";

let text2 = any(num);

console.log(text2);