// // Object Oriented Programming
// // ProtoTyping Example

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   Person.prototype.greet = function() {
//     console.log("Good morning, " + this.name + ", of age " + this.age);
//   };
  
//   let pperson1 = new Person("sneha1", 20);
//   let person2 = new Person("sneha2", 21);
  
//   pperson1.greet(); 
//   person2.greet(); 
  

// class newClass {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     greet(){
//         console.log("Heelo " + this.name + " of age " + this.age)
//     }
// }

// let person1 = new newClass("sneha" , 20)

// person1.greet()


// // Class Inheritance - extends keyword

// class Animals {
//     constructor(name){
//         this.name = name
//     }
//     playing(){
//         console.log(`${this.name} is playing`)
//     }
// }


// class Monkey extends Animals{
//     eating(){
//         console.log("Monkey is eating")
//     }
// }

// let donkey = new Monkey("donkey")
// donkey.playing()


// // super keyword example

// class Animals{
//     constructor(name){
//         this.name = name
//     }
//     greet(){
//         console.log("Say Hello " + this.name)
//     }
// }

// class Monkey extends Animals{
//     constructor(name,breed){
//         super(name)
//         this.breed = breed
//     }
//     breadType(){
//         super.greet()
//         console.log("I'm " + this.name + " of the breed type " + this.breed)
//     }
// }

// let exmp1 = new Monkey("Dog", "Mysuru")
// exmp1.breadType()


// // Example of static keyword 

// class MuliplyNum {
//     static multiply(a,b){
//         return a * b
//     }
// }

// let num1 = MuliplyNum.multiply(4,5)
// console.log(num1)


// // Example for getters and setters

// class human{
//     constructors(name, age){
//         this.name = name
//         this.age = age
//     }

//     get name(){
//         return this._name
//     }
//     set name(newName){
//         this._name = newName
//     }

//     get age(){
//         return this._age
//     }
//     set age(newAge){
//         if(age>0){
//             this._age = newAge
//         }else{
//             console.log("Age cannot be negative")
//         }
//     }
// }

// let human1 = new human("sneha", 20)

// console.log(human1.name)
// console.log(humna1.age)

// console.log(human1 instanceof human)



// // Practice set -10

// // Question number - 01
class ComplexNumber {
    constructor(imaginary, real) {
      this._imaginary = imaginary;
      this._real = real;
    }
  
    get real() {
      return this._real;
    }
  
    set real(newReal) {
      this._real = newReal;
    }
  
    get imaginary() {
      return this._imaginary;
    }
  
    set imaginary(newImaginary) {
      this._imaginary = newImaginary;
    }
  
    result() {
      console.log(`${this._real} + ${this._imaginary}i`);
    }
  }
  let set1 = new ComplexNumber(2, 3);
  set1.result(); 
  

//   Question number - 02
class addComplexNumbers extends ComplexNumber {
    constructor(real, imaginary) {
      super(real, imaginary);
    }
  
    add(otherComplexNumber) {
      const realSum = this._real + otherComplexNumber.real;
      const imaginarySum = this._imaginary + otherComplexNumber.imaginary;
      return new addComplexNumbers(realSum, imaginarySum);
    }
  }


  
  const complex1 = new addComplexNumbers(2, 3);
  const complex2 = new addComplexNumbers(1, 4);
  
  const sum = complex1.add(complex2);
  sum.result();


//   Question number - 03
class HUMAN {
    constructor(name){
        this.name = name
    }
    eatHuman(){
console.log(`${this.name} is eating`)
    }
}

class Student extends HUMAN{
constructor(name){
    super(name)
}
    eatHuman(){
        console.log(`${this.name} is not eating` )
    }
}
  
let stu1 = new Student("sneha")
console.log(stu1.eatHuman())

// Question number - 04
console.log(Student instanceof HUMAN)
