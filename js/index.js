$(document).ready(function(){


$("i").hide();
$(".gameboard").hide();
$(".game").hide();
$(".rules").hide();

var scorep1 = 0;
var scorep2 = 0;

$(".play").click(function(e){
    e.preventDefault();
    $(".game").show();
    $(".gameboard").show();
    $(".rules").hide();
    $(".play").hide();
});

$(".instructions").click(function(){
    $(".rules").show();
});


$(".game").click(function game(e) {
    e.preventDefault();

    var p1 = Math.floor((Math.random() * 10) / 2) + 1;
    var p2 = Math.floor((Math.random() * 10) / 2) + 1;

    console.log(p1);
    console.log(p2);

    
    $("i").hide();

    if(p1 === 1) {
        $(".r1").show();
    } else if(p1 === 2) {
        $(".p1").show();
    } else if(p1 === 3) {
        $(".s1").show();
    } else if(p1 === 4) {
        $(".sp1").show();
    } else {
        $(".l1").show();
    }

    if(p2 === 1) {
        $(".r2").show();
    } else if(p2 === 2) {
        $(".p2").show();
    } else if(p2 === 3) {
        $(".s2").show();
    } else if(p2 === 4) {
        $(".sp2").show();
    } else {
        $(".l2").show();
    }

    // WINNER DECLARATION

    if(p1 === 1 && p2 === 3 || p1 === 1 && p2 === 5) {
        console.log("GANASTE WE!!!");
        scorep1++;
        return scorep1;
    } else if(p1 === 2 && p2 === 1 || p1 === 2 && p2 === 4) {
        console.log("Ganaste esta vez");
    } else if(p1 === 3 && p2 === 2 || p1 === 3 && p2 === 5) {
        console.log("Pobre lagartija!!!");
    } else if(p1 === 4 && p2 === 3 || p1 === 4 && p2 === 1) {
        console.log("Piedra polvo");
    } else if(p1 === 5 && p2 === 4 || p1 === 5 && p2 === 2) {
        console.log("papa comida");
    } 

    if(p2 === 1 && p1 === 3 || p2 === 1 && p1 === 5) {
        console.log("gana el 2");
    } else if(p2 === 2 && p1 === 1 || p2 === 2 && p1 === 4) {
        console.log("gana 222");
    } else if(p2 === 3 && p1 === 2 || p2 === 3 && p1 === 5) {
        console.log("gana 3333");
    } else if(p2 === 4 && p1 === 3 || p2 === 4 && p1 === 1) {
        console.log("gana 444");
    } else if(p2 === 5 && p1 === 4 || p2 === 5 && p1 === 2) {
        console.log("gana 555");
    } else if(p1 === p2) {
        console.log("DRAWWWW");
    }
});

$(".scorep1").append(scorep1);
$(".scorep2").append(scorep2);



});