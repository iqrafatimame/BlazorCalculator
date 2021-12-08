
function addElement(Value){
    const screen = document.getElementById('screen')
    screen.value += Value;
}

function clearScreen(){
    const screen = document.getElementById('screen')
    screen.value = '';
}

function Evaluate(){
    const screen = document.getElementById('screen')
    try{
        if(!screen.value.length == 0){
            screen.value = eval(screen.value)
        }
    }
    catch{
        screen.value = 'Error!'
    }
}