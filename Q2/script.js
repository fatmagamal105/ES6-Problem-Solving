export default class Shape {
    constructor() {
      if (this.constructor == Shape) throw `Shape is Abstract Class`;
    }
    toString() {
      return `Perimeter: ${this.clacPerimeter()}, Area: ${this.calcArea()}`;
    }
    calcArea() {
      return 0;
    }
    clacPerimeter() {
      return 0;
    }
  }


  //Rectangle
  
  export class Rectangle extends Shape {
    constructor(width = 0, height = 0) {
      super()
      this.width = width;
      this.height = height;
    }
    calcArea() {
      return this.width * this.height;
    }
    clacPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  

//squre  
  export  class Square extends Shape {
    constructor(width = 0) {
      super();
      this.width = width;
    }
    calcArea() {
      return this.width**2;
    }
    clacPerimeter() {
      return 4 * this.width;
    }
  }
  
//circle
  
  export  class circle extends Shape {
    constructor(radius = 0) {
      super();
      this.radius = radius;
    }
    calcArea() {
      return this.radius ** 2 * Math.PI;
    }
    clacPerimeter() {
      return this.radius * 2 * Math.PI;
    }
  }


