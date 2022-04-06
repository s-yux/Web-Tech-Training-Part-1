export {}

// let var1 = "welcome to typescript sessions";
// console.log(var1);
//
// let a: number = 213;
// let b: boolean = false;
// let c: string = "asda";
//
// console.log(a);
// console.log(b);
// console.log(c);
//
// let d: null = null;
// let e: undefined = undefined;
//
// console.log(d)
// console.log(e)
//
// let arr1: number[] = [1, 2, 3, 4, 5, 6];
// let arr2: Array<number> = [1, 2, 3, 4];
//
// console.log(arr1)
// console.log(arr2)
//
// let emp1: [number, string] = [1, "Akhil"]
// let emp2: [string, number, string, number] = ["Rudresh", 2, "Java", 81929232]
//
// console.log(emp1)
// console.log(emp2)
//
// enum Color {Red = 5, Green, BLue, White};
// let colorChoice: Color = Color.White;
// console.log("Color choice: ", colorChoice);
//
// let xyz: any = "Asksd";
// console.log(xyz)
// xyz = 20;
// console.log(xyz)
// xyz = true
// console.log(xyz)
//
// let abc: unknown = 10;
//
// (abc as string).toUpperCase();

// ----------------------------------------------------------

// function add(num1: number, num2 : number = 99) {
//     return num1 + num2;
// }
//
// console.log(add(100, 90))

// ----------------------------------------------------------

function display(x:any){
    console.log(`${x.name}, ${x.country}`)
}

let p = {
    name : "Akhil",
    country : "India"
}

display(p)





