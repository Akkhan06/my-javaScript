function bigFacto(num){
    let i = 1;
    let facto = 1;
  while(i<=num){
    facto = facto*i;
    i++;
  }     
   return facto;
}

const ss = 6;

let all = bigFacto(ss); 


console.log(ss + " factorial is " + all);


