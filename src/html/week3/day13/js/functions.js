document.write(add(10, 20), "<br>");

function add(x, y) {
    return x + y;
}

var a = 50;
var b = 100;

document.write(add(50, 100) + "<br>");

square(9)
square(12)

function square(x){
    var result = x*x;
    document.write(x*x+"<br>")
}

//Play with functions

document.write(eval(a) + "<br>")

var abc = [1,2,3];
document.write(abc.length + "<br>")

var test1 = "987"
document.write(typeof parseInt(test1) + "<br>")

var test2 = "23123.223"
document.write(typeof parseFloat(test2) + "<br>")


var str = escape("This is a text");
document.write("Encoded : " + escape(str) + "<br>")
document.write("Decoded : " + unescape(str) + "<br>")
