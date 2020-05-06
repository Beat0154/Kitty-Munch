var user = document.getElementById("user");
var bottom = document.getElementById("bottom");
var px = "px";
var perc = "%";
user.addEventListener("click", dropBrick);
user.addEventListener("touch", dropBrick);
function dropBrick(){
    var div = document.createElement("DIV");
    var x = parseInt((event.clientX-30)/window.innerWidth*100);
    var y = parseInt((event.clientY-15)/window.innerHeight*100);
    div.classList.add("brick");
    div.classList.add("animation");
    div.style.left = x + perc;
    div.style.top = 100 - y + perc;
    
    let root = document.documentElement;
    root.style.setProperty('--startingTop', y + perc);
    root.style.setProperty('--startingLeft', x + perc);
    var endingY = 100 - y + perc;
    var endingX = x + perc
    root.style.setProperty('--endingTop', endingY);
    root.style.setProperty('--endingLeft', endingX);
    document.body.appendChild(div);
}

var updateHeight = setInterval(function() {
        user.style.height = (window.innerHeight / 2 - 3) + px;
        bottom.style.height = (window.innerHeight / 2 - 3) + px;
}, 10);