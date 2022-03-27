// document.write(parseInt(3.2) + "<br>")
// document.write(parseInt(3.5) + "<br>")
// document.write(parseInt(3.8) + "<br>")
// document.write(parseInt("asdasdasd12345sdasdascadasd") + "<br>")
// document.write(parseInt("12345sdasdascadasd") + "<br>")
// document.write(parseInt(false) + "<br>")


// var arr = ["Red", "Blue", "Green"]
// for(var x of arr){
//     document.write(x + "<br>")
// }
//
// var a = 22;
// var b = 50;
// var arr1 = new Array(1,2,3,4,5,a,b,"abc")
// for(var i=0; i<arr1.length; i++){
//     document.write(arr1[i] + "<br>")
// }


// var arr = [];
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// arr.push(50);
//
// document.writeln(arr + "<br>")
//
// arr.pop();
// document.writeln(arr + "<br>")
//
// arr.pop();
// document.writeln(arr + "<br>")
//
// var names = ["Anne", "Duke", "Zach", "Mandy"];
// document.write(names + "<br>");
// names.sort();
// document.write(names + "<br>");
//
// var nums = [1,53,21,56,98,63,11];
// document.write(nums + "<br>");
// nums.sort();
// document.write(nums + "<br>");

var num = [1,108,55,709,88]
document.write("Wrong sorting: " + num.sort() + "<br>")
var after = num.sort((a, b) =>{
    return a-b;
})
document.write("Correct sorting: " + after)

// //splice method
// var arr = [1,2,3,4,5]
// var deleted = arr.splice(1,3, 99, 999, 999, 9999, 99999)
// document.write("Deleted Arr: " + deleted + "<br>")
// document.write("Remaining Arr: " + arr + "<br>")

// //slice method
// var arr1 = [1,2,3,4,5]
// var slicedArr = arr1.slice(2,5)
// var reverseSliceArr = arr1.slice(-4, 4)
// document.write("After slice: " + slicedArr + "<br>")
// document.write("After reverse slice: " + reverseSliceArr + "<br>")

// //Understanding forEach and callbacks
// var arr3 = [20, 40, 60, 80, 100];
// arr3.forEach((value, index, current) => {
//     document.write("Value: " + value + "<br>")
//     document.write("Index: "  + index + "<br>")
//     document.write("Array: " + current + "<br>")
//     document.write("<hr>")
// });
// var sum = 0;
// var arr = [1,2,3,4,5];
// arr.forEach(sumFunc);
// document.write("Sum is: " + sum + "<br>")
//
// function sumFunc(val,ind,arr){
//     sum=sum+val;
// }

// //Understanding map()
// var num = [1,2,3,4,5]
// var num2 = num.map(square)
// document.write(num2)
//
// function square(val, ind, arr){
//     return val*val;
// }

// //Filter()
// var num = [1,2,3,4,5,6,7,8,9,10]
// var newNum = num.filter((val, ind, arr) => {
//     return val%2 == 0;
// })
// document.write(newNum)

// //Reduce
// var num = [1,2,3,4,5,6,7,8,9,10]
// var total = num.reduce((prev, curr, index, ar) =>{
//     return prev+curr;
// })
// document.write(total)