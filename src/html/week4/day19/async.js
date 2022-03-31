let cars = {
    carModel: ["Seltos", "Sonnet", "Carnival"],
    carColor: ["White", "Red", "Blue"],
    driveMode: ["Auto", "Manual"]
}

let isShowroomOpen = true;

// let chooose_drivemode = () => {
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//            resolve(document.write(`Which drive mode do you want to choose? <br> Customer has chosen ${cars.driveMode[0]} <br>`));
//        }, 10000)
//     });
// }
//
// async function orderCar() {
//     document.write("Customer has to order <br>");
//     document.write("Production has started <br>");
//     await chooose_drivemode();
//     document.write("Showroom is assembling car based on drivemode selected <br>");
//     document.write("Customer choose car color <br>");
//     document.write("Car ready for delivery <br>");
// }
//
// orderCar();
//
// document.write("****Some other customer has booked a car **** <br>");
// document.write("****Some other customer has requested car cleaning **** <br>");
// document.write("****Some other customer want car paint **** <br>");
// document.write("****Some other customer want car wash **** <br>");


//---------------------------------------------------------------------------------

// function task(ms) {
//     return new Promise((resolve, reject) => {
//         if (isShowroomOpen) {
//             setTimeout(resolve, ms)
//         } else {
//             reject(document.write("Showroom is closed, hence promise rejected <br>"))
//         }
//     });
// }
//
// async function orderCar() {
//     try {
//         await task(3000);
//         document.write(`Customer has chosen ${cars.carModel[1]} <br>`)
//         await task(4000);
//         document.write(`Customer has chosen ${cars.driveMode[1]} mode! <br>`)
//         await task(3000);
//         document.write("Order is received, production has started <br>")
//         await task(5000);
//         document.write("Car parts are assembled based on the drive mode and model. <br>")
//         await task(3000);
//         document.write(`Customer has chosen ${cars.carColor[1]} color <br>`)
//         await task(5000);
//         document.write("Car is ready for delivery. <br>")
//     } catch (err) {
//         document.write("Executing catch block, showroom is closed. <br>")
//     } finally {
//         document.write("Execute finally block,the showroom is locked.")
//     }
// }
//
// orderCar();

//---------------------------------------------------------------------------------

// let isNotTired = true;
//
// function faint(){
//     document.write("Fainting in progress... <br> ")
//     document.write("Fainted! <br>")
// }
//
// function workout(){
//     document.write("Working out in progress... <br>")
// }
//
// function sitUp(ms){
//     return new Promise((resolve, reject) =>{
//         if(isNotTired){
//             setTimeout(resolve(workout()), ms);
//         }else{
//             reject(faint);
//         }
//     });
// }
//
// async function lesson(){
//     try{
//         document.write("Session started <br>");
//         await sitUp(2000)
//         document.write("Session halted for cleaning<br>")
//         document.write("Cleaning completed, session resumed <br>")
//         //isNotTired = false;
//         await sitUp(1000)
//     }catch (err){
//         document.write("Session cancelled. <br>")
//     }finally {
//         document.write("Session completed. <br>")
//     }
// }
//
// lesson();

//---------------------------------------------------------------------------------

// function add (a,b){
//     var c = a+b;    //make sure variable not accessible via outside, must declare it!
//     return c;
// }
//
// function mul (a){
//     const z = 20;
//     return a*z;
// }
//
// var res = add(7,8);
// document.write("Val of res : " + res + "<br>");
// document.write("Val of c : " + c + "<br>");
//
// var res1 = mul(8);
// document.write("Val of res1 : " + res1 + "<br>");
// document.write("Val of z : " + z + "<br>");

//---------------------------------------------------------------------------------

//Closure in Javascript

// function outer(){
//     var n = 30;
//     function inner(){
//         return n;
//     }
//     return inner();
// }
//
// var res = outer();
// document.write(res + "<br>")

//---------------------------------------------------------------------------------

// var x = 10;
//
// function sum1(a) {
//     return function sum2(b) {
//         return function sum3(c) {
//             return function sum4(d) {
//                 return a + b + c + d + x;
//             }
//         }
//     }
// }
//
// x1 = sum1(10);
// x2 = x1(20);
// x3 = x2(30);
// x4 = x3(40);
// document.write(x1 + "<br>")
// document.write(x2 + "<br>")
// document.write(x3 + "<br>")
// document.write(x4 + "<br>")

//---------------------------------------------------------------------------------
