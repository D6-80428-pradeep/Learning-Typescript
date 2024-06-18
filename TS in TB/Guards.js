function calculateArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return 0.5 * shape.base * shape.height;
        default:
            // Exhaustiveness check
            var _exhaustiveCheck = shape;
            throw new Error("Unhandled shape kind: ".concat(_exhaustiveCheck));
    }
}
var myCircle = { kind: "circle", radius: 10 };
var myRectangle = { kind: "rectangle", width: 10, height: 5 };
var myTriangle = { kind: "triangle", base: 10, height: 5 };
console.log("Circle area: ".concat(calculateArea(myCircle)));
console.log("Rectangle area: ".concat(calculateArea(myRectangle)));
console.log("Triangle area: ".concat(calculateArea(myTriangle)));
