function finish() {   
    clearInterval(stopwatch); 
    if (levelActual < levels.lenght - 1){
        
        document.querySelector("#endGame").classList.add("visible");
    }else{
        document.querySelector("#levelUp").classList.add("visible");
    }     
}
