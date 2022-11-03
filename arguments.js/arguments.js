function ar(){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;  
        
    }

    return sum;
}

var result =  ar(100, 12);

console.log(result);