// //Date methods
// let d = new Date();
//
// document.write("Current Time: " + d.getTime() + "<br>")
// document.write("Current Year: " + d.getFullYear() + "<br>")
// document.write("Current Month: " + d.getMonth() + "<br>")
// document.write("Current Date: " + d.getDate() + "<br>")
// document.write("Current Hours:" + d.getHours() + "<br>")
// document.write("Current Minutes: " + d.getMinutes() + "<br>")
// document.write("Current seconds: " + d.getSeconds() + "<br>")
// document.write("Current miliseconds: " + d.getMilliseconds() + "<br>")
// document.write("Current day: " + d.getDay() + "<br>")


// //String methods
// var str = "Hello Everyone, welcome to javascript sessions ";
// document.write(str);
// document.write("<br>");
//
// var str1 = new String("Hahahas");
//
// document.write(str.length + "<br>")
// document.write(str1.length + "<br>")
// document.write(str.charAt(6) + "<br>")
// document.write(str.concat(str1) + "<br>")
// document.write(str.italics() + "<br>")

// //Math methods
// document.write(Math.round(4.234) + "<br>");
// document.write(Math.ceil(4.234) + "<br>");
// document.write(Math.floor(4.234) + "<br>");
// document.write(Math.trunc(4.734) + "<br>");
// document.write(Math.sign(4.734) + "<br>");
// document.write(Math.sign(-4.734) + "<br>");
// document.write(Math.sign(0) + "<br>");
// document.write(Math.pow(5,2) + "<br>");
// document.write(Math.sqrt(9) + "<br>");
// document.write(Math.abs(-3.131231) + "<br>");
// document.write(Math.sin(90*Math.PI/180) + "<br>");
// document.write(Math.cos(180*Math.PI/180) + "<br>");
// document.write(Math.max(10,20,30,40,25,15) + "<br>");
// document.write(Math.min(10,20,30,40,25,15) + "<br>");

//Regex
var str = "Hello to everyone, \nWelcome to Javascript Session practise. \nLearn by PrActiSE. \nhello there.";
document.write("Current String: " + str + "<br>")

var pattern = /to/g;    //"g" means global match (find all matches)
var res = str.match(pattern);
document.write("G: " + res + "<br>")

var pattern = /practise/i;    //"i" means case-insensitive match
var res = str.match(pattern);
document.write("I: " + res + "<br>")

var sessions = /ello/m;     //"m" means multiline match
var res1 = str.match(sessions);
document.write("M: " + res1 + "<br>")