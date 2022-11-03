function loopYar(loop){

    if(loop % 4 ==0 && loop % 100!=0 || loop % 400 ==0){
        console.log("loop year");
    }
    else{
        console.log("it's not loop year");
    }
}

loopYar(2020);