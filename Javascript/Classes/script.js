//Classes

//ES5


// var PersonES5 = function(name,job,yearOfBirth){
//     this.name = name ; 
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
// }

// PersonES5.prototype.calculateAge = function(){
//     return 2018 - this.yearOfBirth;
// }

// var yigit = new PersonES5('yiğit','student',2010);

// console.log(yigit.calculateAge());
// console.log(yigit);

//ES6

// class PersonES6{
//     constructor(name,job,yearOfBirth){
//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth;
//     }

//     calculateAge(){
//         return 2018 - this.yearOfBirth;
//     }

//     static sayHi(){
//         console.log('Hello');
//     }

// }


// let emel = new PersonES6('emel','teacher',1989);
// console.log(emel.calculateAge());
// console.log(emel);

// PersonES6.sayHi();

// class Point{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }

//     static distance(a,b){
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;

//         return Math.hypot(dx,dy);
//     }
// }

// const d1 = new Point(10,10);
// const d2 = new Point(20,20);

// console.log(Point.distance(d1,d2));

//SUB CLASSES

//ES5

function PersonES5(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonES5.prototype.sayHi = function(){
    return `Hello I'm ${this.firstName} ${this.lastName}`
}

function CustomerES5(firstName,lastName,phone,username){
    PersonES5.call(this,firstName,lastName);
    this.phone = phone;
    this.username = username;
}

CustomerES5.prototype = Object.create(PersonES5.prototype);

var customer = new CustomerES5('sen','tura','12314','senatut');

console.log(customer.sayHi());


//ES6

class PersonES6{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi(){
        return `Hello I'm ${this.firstName} ${this.lastName}`;
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstName,lastName,phone,username){
        super(firstName,lastName)
        this.phone = phone;
        this.username = username;
    }

    static getTotal(){
        return 1000;
    }
}

let customer1 = new CustomerES6('volkan','yüksel','1234','volkanyyy');
console.log(customer1.sayHi());
console.log(CustomerES6.getTotal())