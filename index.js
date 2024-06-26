var a= document.getElementById('display')


function display(input){
a.value =a.value+input
}

function clr(){
    a.value=""
}

function calculate(){
    a.value=eval(a.value);
}
function del(){
    a.value = a.value.substring(0, a.value.length - 1);
}