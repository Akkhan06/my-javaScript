function recursive(n){
    if(n ==0){
        return 1;
    }
    else{
        return n * recursive(n-1);
    }
}

let result = recursive(6);
console.log(result);
