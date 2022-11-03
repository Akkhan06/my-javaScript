function primeRes(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return "is not prime number";
        }
    }
   return "is prime number";
}
let result = primeRes(80);
console.log(result);

