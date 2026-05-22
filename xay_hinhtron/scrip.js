class Circle {
    constructor(radius) {
        this.radius = radius;
        this.color = "red";
    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

let circle1 = new Circle(2);
let radius1 = circle1.getRadius();
let area1 = circle1.getArea();
console.log("Radius: " + radius1 + "; Area: " + area1);

let circle2 = new Circle(5);
let radius2 = circle2.getRadius();
let area2 = circle2.getArea();
console.log("Radius: " + radius2 + "; Area: " + area2);