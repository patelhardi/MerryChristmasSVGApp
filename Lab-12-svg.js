//LAB 12 - SVG WINTER SCENE
window.onload = function() {
    document.getElementById("submit").onclick = tree;
    var c1 = document.getElementById("circ7");
    var c2 = document.getElementById("circ9");
    var c3 = document.getElementById("circ8");
    var c4 = document.getElementById("circ10");
    var l1 = document.getElementById("line1");
    var l2 = document.getElementById("line2");

    function tree(){
        var b1 = setTimeout(odd,0000);
        var b2 = setTimeout(even,1000);
    }
    function odd(){
        c1.style.opacity = 0.2;
        c2.style.opacity = 0.2;
        c3.style.opacity = 1;
        c4.style.opacity = 1;
        l1.style.transform = "rotateY(25deg)"; 
        l2.style.transform = "rotateY(30deg)";
        setTimeout(even,3000);
    }
    function even() {
        c1.style.opacity = 1;
        c2.style.opacity = 1;
        c3.style.opacity = 0.2;
        c4.style.opacity = 0.2;
        l1.style.transform = "rotateY(0deg)"; 
        l2.style.transform = "rotateY(0deg)";
        setTimeout(odd,2000);
    }
};