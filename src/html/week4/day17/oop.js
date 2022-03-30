// class Vehicle {
//
//     constructor() {
//         let model, brand, year;
//     }
//
//     setModel(model) {
//         this.model = model;
//     }
//
//     getModel() {
//         return this.model;
//     }
//
//     setBrand(brand) {
//         this.brand = brand;
//     }
//
//     getBrand() {
//         return this.brand;
//     }
//
//     setYear(year) {
//         this.year = year;
//     }
//
//     getYear() {
//         return this.year;
//     }
//
//     displayCarInfo() {
//         return (this.model + " " + this.brand + " " + this.year);
//     }
// }
//
//
// let car = new Vehicle();
// document.write("Initial created car object: <br>" + car.displayCarInfo() + "<br>")
// document.write("<br>")
// car.setModel("520i")
// car.setBrand("BMW")
// car.setYear(2018)
// document.write("After assigning car variables via setters: <br>" + car.displayCarInfo() + "<br>")
// document.write("<br>")
//
// document.write("Calling getters one by one: <br>" + car.getModel() + " " + car.getBrand() + " " + car.getYear())
// document.write("<br>")


// class Car1 {
//     display() {
//         document.write("Hello you can drive a car" + "<br>");
//     }
// }
//
// class Audi extends Car1 {
//     display() {
//         document.write("Hello I can drive a Audi" + "<br>");
//     }
// }
//
// class BMW extends Car1 {
//     display() {
//         document.write("Hello I can drive a BMW" + "<br>");
//     }
// }
//
// c = new Car1();
// c.display();
// c = new Audi();
// c.display();
// c = new BMW();
// c.display();


function car(model, name, avg) {
    this.model = model;
    this.name = name;
    this.avg = avg;

    this.diff = 5;

    //Write function as let to keep this private
    let calculateAvg = function () {
        actualAvg = this.avg - this.diff;
        document.write("Actual avg is : " + actualAvg);
    }

    //Even though put inside public method, still won't access calculateAvg method
    this.displayInfo = function () {
        document.write(this.name + " " + this.model + " " + this.avg);
    }

    this.fun = function (){
        calculateAvg();
    }
}

car1 = new car("530", "BMW", 22)
car1.displayInfo();
document.write("<br>")
car1.fun();