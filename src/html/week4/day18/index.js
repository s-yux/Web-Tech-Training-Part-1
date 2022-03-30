// let cars = {
//     carModel: ["Seltos", "Sonnet", "Carnival"],
//     carColor: ["White", "Red", "Blue"],
//     driveMode: ["Auto", "Manual"]
// }
//
// function order(callback) {
//     document.write(`User has selected ${cars.carModel[0]} with ${cars.driveMode[0]} of ${cars.carColor[0]}! <br>`);
//     callback()
// }
//
// function production() {
//     document.write("Order is received, car is under manufacture <br>")
// }
//
//
// order(production)


//Promise stuff

let cars = {
    carModel: ["Seltos", "Sonnet", "Carnival"],
    carColor: ["White", "Red", "Blue"],
    driveMode: ["Auto", "Manual"]
}

let isShowroomOpen = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isShowroomOpen) {
            setTimeout(() => {
                resolve(work());
            }, time)
        } else {
            reject(document.write("Sorry, showroom closed! <br>"))
        }
    });
}

order(1000, () => {
    document.write(`User has booked ${cars.carModel[0]}! <br>`)
}).then(() => {
    return order(1000, () => {
        document.write("Production has started<br>");
    })
}).then(() => {
    return order(1000, () => {
        document.write(`Customer has selected ${cars.driveMode[0]}! <br>`)
    })
}).then(() => {
    return order(1000, () => {
        document.write("The drive parts are assembled based on drive mode selected! <br>")
    })
}).catch(() => {
    document.write("Hence, the customer has left. <br>");
}).finally(() => {
    document.write("The showroom is locked. <br>")
});
