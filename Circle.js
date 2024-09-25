class Circle {
    radius; color;

    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getColor() {
        return this.color;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

let basketball = new Circle(12, 'orange');
console.log(basketball.getRadius());
console.log(basketball.getColor());
console.log(basketball.getArea())