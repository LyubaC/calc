const display = document.querySelector('.calc .display');

document.querySelectorAll('.calc .num, .calc .op')
    .forEach ( btn => btn.addEventListener('click', numOperClick));
    
function numOperClick(e) {
    display.value += e.target.innerText
}    

document.querySelector('.calc .eq')
    .addEventListener('click', function(){
        display.value = eval(display.value);
})
    

    