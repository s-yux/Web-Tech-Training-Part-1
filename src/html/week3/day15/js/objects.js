// //1st Way of creating object - object literal
// var car = {
//     brand : "BMW",
//     model: "530d",
//     color: "White",
//     year: 2017
// }

// //2nd Way of creating object - instance of
// var car = new Object();
// car.brand = "BMW";
// car.model = "430d";
// car.color = "White";
// car.year = 2017;


// //3rd Way of creating object - constructor
// function carConstructor(brand, model, color, year) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//     this.year = year;
// }
//
// var car = new carConstructor("BMW", "520", "Black", 2017)
//
// document.write(car.brand + "<br>")
// document.write(car.model + "<br>")
// document.write(car.color + "<br>")
// document.write(car.year + "<br>")


// // => arrow
//
// var a = (width,heigth) => width*heigth;
// document.write(a(4,5) + "<br>");
// document.write(a(6,10) + "<br>");


let x = 50;
document.write(x.toExponential() + "<br>")
let y = 20;
document.write(typeof y.toString() + "<br>")
let z = 2.36459;
document.write("to fixed: " + z.toFixed(4) + "<br>")
document.write("to precision: " + z.toPrecision(4) + "<br>")

let i = 2.364;
let j = true;
let k = false;
let l = "10";
document.write(Number(i) + "<br>")
document.write(Number(j) + "<br>")
document.write(Number(k) + "<br>")
document.write(Number(l) + "<br>")

let fail = "john"
document.write(Number(fail) + "<br>")


document.write(Number.MAX_VALUE + "<br>")
document.write(Number.MIN_VALUE + "<br>")

document.write(Number.isFinite(100/0) + "<br>")
document.write(Number.isFinite(-199) + "<br>")

document.write(Number.POSITIVE_INFINITY + "<br>")
document.write(Number.NEGATIVE_INFINITY + "<br>")






