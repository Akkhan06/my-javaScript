function display(number){
    document.getElementById('tvDisplay').value += number;
}

function delate(){
    document.getElementById('tvDisplay').value = '';
}

function random(){
    let setDisplay = Math.random()*10000;
    let roundNumber = Math.round(setDisplay);
    return roundNumber;
}

function usable(result){
 document.getElementById('randomDisplay').value = result;   
}

function machingSubmit(){
    const displayResult = document.getElementById('tvDisplay').value;
    const convartNumber = parseInt(displayResult);
    const pinMatched = document.getElementById('pinTrue');
    const pinDidnt = document.getElementById('pinFalse');
    const randomDis = document.getElementById('randomDisplay').value;
    const randomDisConvart = parseInt(randomDis);
    if(convartNumber == randomDisConvart){
        pinMatched.style.display = 'block';
        pinDidnt.style.display = 'none';  
    }else{
        pinDidnt.style.display = 'block';
        pinMatched.style.display = 'none';
    }
}