

var eyes = document.getElementsByClassName("ball");

document.onmousemove = function (){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
    for (var i=0; i<2; i++){
        eyes[i].style.left = x;
        eyes[i].style.top = y;
        eyes[i].style.transform = "translate(-" + x + ", -" + y+ ")";
    }
}

