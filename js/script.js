function changeBG(color){
    document.body.style.background = color;
    let txt = document.getElementsByClassName("text");
    if(color === "#000000"){
        for(let elm of txt){
            elm.style.color = "white"
        }
    }else{
        for(let elm of txt){
            elm.style.color = "black"
        }
    }
}