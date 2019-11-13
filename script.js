var modal = document.querySelector("#myModal");

var modalBtn = document.querySelector("#modalBtn");

modalBtn.onclick = function(){
    modal.style.display = "block"
    // modalBtn.style.display="none"
    // close.style.display = "block"
}

var closeBtn = document.querySelector("#close");

closeBtn.onclick = function(){
    modal.style.display ="none"
    // close.style.display ="none"
    // modalBtn.style.display ="block"
}

window.onclick = function(event){
     
    if(event.target == this.modal){
        this.modal.style.display = "none"
    }
}
