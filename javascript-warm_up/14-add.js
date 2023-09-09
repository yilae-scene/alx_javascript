// const cat = {
//     name: 'Bertie',
//     breed: 'Cymric',
//     color: 'white',
//     greeting: function () {
//         console.log('Meow!');
//     }
// }

// // Put your code here
// cat['catName'] = 'Bertie';
// cat.greeting();
// cat.color = 'black';
// cat['eyeColor'] = 'blue'
// console.log(cat.catName)
// console.log(cat.color)

// console.log(cat)

// const band = {
//     name: 'Cold Play',
//     Country: 'England',
//     genre: 'Rock',
//     members: 5,
//     formed: 1999,
//     Split: false,
//     albums: [["Hello World ", 2000], ["Hi World", 2001], ["Na World", 2002]],
//     bandInfo() {
//         console.log(`One of the beloved bands out there are called ${this.name}. This band is known for there ${this.genre} style of music. They have been active since ${this.formed}. There first album came out in ${this.albums[0][1]} and titled ${this.albums[0][0]}.`);
//     },
// }

// // Don't edit the code below here

// // let para1 = document.createElement('p');
// // para1.textContent = bandInfo;
// // section.appendChild(para1);

// band.bandInfo()
// console.log(band.albums)

function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function () {
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
}

const cat1 = new Cat('Bertie', 'Cymric', 'white')
const cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger')
console.log(cat1.name);
console.log(cat2.name);
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade

hello();
function hello() {
  console.log("hi");
}
console.log(walsh.teaches)

class Shape {
  name;
  sides;
  sideLength;
  
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;

  }
  calcPerimeter() {
    console.log(`${this.sides}` * `${this.sideLength}`)
  }
}
const square = new Shape("square", 4, 5)

square.calcPerimeter()


class Square extends Shape{

  constructor(sideLength) {
    super('square', 4)
    this.sideLength = sideLength; 
  }
  calcArea() {
    console.log(`${this.sideLength}` * `${this.sideLength}`);
  }
}

const squares = new Square(4)
squares.calcPerimeter()
squares.calcArea()
console.log(squares.sideLength)
console.log(squares)

class MyDate extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

let b = 1;

function myFunction(a) {
  console.log(a + b);
  b = a;
}

myFunction(3);
myFunction(4);
