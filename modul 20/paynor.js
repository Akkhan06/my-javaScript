var submit =  document.getElementById('submit');

submit.addEventListener('click', function(){
    var mainMenu = document.getElementById('login')
    const next = document.getElementById('dashbord');
    mainMenu.style.display = "none";
    next.style.display = 'block'
})


const deposit1 = document.getElementById('deposit1');
deposit1.addEventListener('click', function(){
    const depositt = document.getElementById('depositt').value;
    const depoBal = parseFloat(depositt);
    addInfo("deposss", depoBal);
    document.getElementById('depositt').value = "";
    addBal('ball', depoBal);
})

function addBal(id, depoBal){
    const bal = document.getElementById(id).innerText;
     const fBal = parseFloat(bal);
     const tatalBal = depoBal + fBal;

     document.getElementById(id).innerText = tatalBal;
}


function addInfo(id, depoBal){
    const deposss = document.getElementById(id).innerText;
    const deposssNumber = parseFloat(deposss);
    const totalAmount = depoBal + deposssNumber;
    document.getElementById(id).innerText = totalAmount;
}


const widroo = document.getElementById('widroo');

widroo.addEventListener('click', function(){
    const withdraw1 = document.getElementById('withdraw').value;
    const numWithdraw = parseFloat(withdraw1);
    addInfo('wiii', numWithdraw);
    addBal("ball", -1*numWithdraw);
})

