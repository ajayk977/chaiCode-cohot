let x = 10;

let y = 20;

x = y;
console.log(y);

y = 30;

console.log(x);

const person = {
  name: "John",
  lastName: "Doe",
  age: "21",
  eyeColor: "blue",
};

const person2 = person;

person2.lastName = "Smith";

console.log(person.lastName);
console.log(person2.lastName);

// Using the new Keyword

const car = new Object();

car.make = "nisan";
car.color = "red";
car.price = "10L";

console.log(car.make);

// Using a Constructor Function

function Car(make, color, model) {
  (this.make = make), (this.color = color), (this.model = model);
}

const myCar = new Car("Toyota", "blue", 2020);
console.log(myCar);

function Pen(color, comp, type) {
  (this.colo = color), (this.comp = comp), (this.type = type);
}

const myPen = new Pen("black", "moto", "gel");
myPen.price = "30";

delete myPen.comp;
console.log(myPen);

// Using Object.create()

const carPrototype = {
  name: "maruti",
  isOn: false,
  drive: function () {
    console.log("Driving not start....");
  },
};

const myCar2 = Object.create(carPrototype);
myCar2.make = "Toyota";

myCar2.drive();

for (let key in myCar2) {
  console.log(`${key}: ${myCar2[key]}`);
}

// Object.keys()

const keys = Object.keys(myCar2);
console.log(keys);

// Object.values()

const values = Object.values(myCar);
console.log(values);

// Object.entries()

const entries = Object.entries(myCar);
console.log(entries);

// Object Prototypes

function Person2(name, age) {
  (this.name = name), (this.age = age);
}

Person2.prototype.greet = function () {
  console.log(`Namaste im ${this.name}`);
};

const ajay = new Person2("ajay", "23");

ajay.greet();


// Object.assign()
const target = { a: 1 };
const source = { b: 2 , c:3,d:4 };
Object.assign(target, source);

console.log(target)
console.log(source)

// Object.freeze()
const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 100; 

console.log(obj)

// Object.seal()
const obj1 = { prop: 42 };
Object.seal(obj1);
obj1.prop = 100; 
delete obj1.prop

console.log(obj1)

// JSON and Objects

const man = {
    name:"Ajay",
    age:"23",
    hello:function(){
        console.log(`hello bhaio im ${this.name}`)
    },

    manObj:{
        name:"viney",
        age:"23"
    }
}


const man2 = {
    ...man
}

console.log(man2)

delete man.hello

const manString = JSON.stringify(man)

// console.log(manString)

const jsonMan = JSON.parse(manString)

console.log(jsonMan)
jsonMan.greet = function(){
    console.log("hello")
}

jsonMan.name= "Vijay"

console.log(man)






