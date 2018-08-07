const display = document.querySelector('.calc .display');
var res = false;

document.querySelectorAll('.calc .num, .calc .op')
    .forEach ( btn => btn.addEventListener('click', numOperClick));
    
function numOperClick(e) {
    if (res) {
        res = false;
        display.value = "";
    }
    display.value += e.target.innerText
}    

document.querySelector('.calc .eq')
    .addEventListener('click', function(){
        display.value = eval(display.value);
        res = true;
})

document.querySelector('.calc .clear')
    .addEventListener('click', function(){
        display.value = "";
    })
    

    