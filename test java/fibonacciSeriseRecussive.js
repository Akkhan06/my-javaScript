function fibonacci(n){
    if(n==0){
        return [0];
    }else if(n==1){
        return [0,1];
    }else{
        let fibo = fibonacci(n-1);
        let final = fibo[n-1] + fibo[n-2];
        fibo.push(final);
        return fibo;
    }
}

let result = fibonacci(15);

console.log(result);