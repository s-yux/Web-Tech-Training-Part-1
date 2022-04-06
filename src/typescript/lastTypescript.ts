// export {}
//
// interface Person {
//     name: string;
//     country?: string;
// }
//
// function disp(person: Person) {
//     console.log(`${person.name}, ${person.country}`);
// }
//
// let p = {
//     name: "Akhil",
//    // country: "India"
// }
//
// disp(p);

// -----------------------------------------------------------

class Trainee {
    traineeName: string;
    private age?: number;
    protected isCertified?: boolean;

    constructor(name: string) {
        this.traineeName = name;
    }

    display(){
        console.log(`Hello ${this.traineeName}`);
    }
}

class jrTrainee extends Trainee{
    constructor(jrName:string) {
        super(jrName);
    }

    receiveKT(){
        console.log("KT in progress!!")
    }
}

let t = new Trainee("Akhil");
console.log(t.traineeName);
// console.log(t.age);
// console.log(t.isCertified);
t.display()

let jrt = new jrTrainee("remo");
console.log(jrt.traineeName);
jrt.display();
jrt.receiveKT();