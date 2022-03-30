// var str = "Web-Tech      is 100% fun to      learn. Enjoy the course 123: JS";
// document.write(str + "<br>");
//
// // // var pattern = /\w/g;     //only look for words in given string
// // // var pattern = /\W/g;     //only look for characters apart from words/alphabets
// //
// // // var pattern = /\d/g;    //only find numbers in the string
// // // var pattern = /\D/g;    //only find everything apart from digits in a string
// //
// // // var pattern = /\s/g;    //find whitespaces in a string
// // // var pattern = /\S/g;    //find everything apart from whitespaces in a string
// //
// // // var pattern = /\b/g;    //find matches that have beginning/end of the word
// // // var pattern = /\B/g;    //find matches that do not have begining/end of a word
// //
// // // var pattern = /\f/g;    //find form feed character
// // // var pattern = /\r/g;    //find carriage return character
// // // var pattern = /\v/g;    //find vertical tab character
// var pattern = /\t/g;    //find a tab character
//
// var result = str.match(pattern);
// document.write(result)


//REGEX: Quantifiers, using letter "n"

var str = "Web-Tech      is 100% fun to      learn.  weennnnnn Enjoy the course 123: JS";
document.write(str + "<br>");

// var pattern = /n+/g;        //matches 1 or more of preceding token "n"
// var pattern = /n*/g;        //matches 0 or more of preceding token
// var pattern = /n?/g;        //match as few characters as possible
// var pattern = /n{2}/g;      //sequence of x no of n's
// var pattern = /n{2,4}/g;    //x-start,y-end
// var pattern = /n{1, }/g;    //match x or more characters
var pattern = /JS$/g;       //word that ends with letter "n"

var result = str.match(pattern);
document.write(result)


