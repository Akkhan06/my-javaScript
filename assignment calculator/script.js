function delate(){
    document.getElementById('tvDisplay').value = '';
}

function calculate(number){
    document.getElementById('tvDisplay').value += number;
}

function result(){
    let tvDisplay = document.getElementById('tvDisplay').value;
    let result2 = eval(tvDisplay);
    document.getElementById('tvDisplay').value = result2;
}