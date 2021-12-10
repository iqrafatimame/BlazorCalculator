let isEvaluated = false

function addElement(Value){
    const screen = document.getElementById('screen')
    if(isEvaluated){
        screen.value = ''
        isEvaluated = false
    }
    screen.value += Value  
}

function clearScreen(){
    const screen = document.getElementById('screen')
    screen.value = ''
}

function Evaluate(){
    const screen = document.getElementById('screen')
    console.log("flag: ", isEvaluated)
    
    try{
        if(!screen.value.length == 0){
            screen.value = eval(screen.value)
            isEvaluated = true
        }
    }
    catch{
        screen.value = 'Error!'
    }

}