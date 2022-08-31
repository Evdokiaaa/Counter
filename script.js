let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let display = document.getElementById('counter-display');
let reset = document.getElementById('reset');
let count = 0;

plus.addEventListener('click',function(){
    5+count++;
    updateDisplay();
    
});

minus.addEventListener('click',function(){
    count--
    updateDisplay();
});

reset.addEventListener('click',function(){
    count='0';
    updateDisplay();
});

function updateDisplay(){
    display.innerHTML=count;
};