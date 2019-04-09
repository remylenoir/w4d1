//  ES5

// let Product = function(name, price) {
//   this.name = name;
//   this.price = price;
// };
// Product.prototype.nameAndPrice = function() {
//   console.log(
//     `The product's name is ${this.name} and the product's price is ${
//       this.price
//     }`
//   );
// };
// let Electronic = function(name, price, brand) {
//   Product.call(this, name, price);
//   this.brand = brand;
// };

// Electronic.prototype = Object.create(Product.prototype);
// Electronic.prototype.constructor = Electronic;

// const newElectronicProduct = new Electronic('speaker', 100, 'Sony');
// newElectronicProduct.nameAndPrice();

// ES6 Class

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  nameAndPrice() {
    console.log(`The product's name is ${this.name} and the product's price is ${this.price}`);
  }
}

class Electronic extends Product {
  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }
}

const newElectronicProduct = new Electronic("speaker", 100, "Sony");
// newElectronicProduct.nameAndPrice();

//  Arrow functions
const add = function(a, b) {
  return a + b;
};

// const add = (a, b) => {
//   return a + b;
// };

class Counter {
  constructor() {
    this.count = 1;
  }
  countUp() {
    console.log(this);
    // setTimeout(function() {
    //   console.log(this);
    //   console.log(this.count++);
    // }.bind(this), 1000);
    setTimeout(() => {
      console.log(this.count++);
    }, 1000);
  }
}

// let myCounter = new Counter();
// myCounter.countUp();

// Arrow functions don't rebind the value of this when used inside of another function

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = digits.filter(function(digit) {
  console.log(digit);
  return digit % 2 === 0;
});
console.log(evenNumbers);

const evenNumbers = digits.filter(digit => digit % 2 === 0);
