type Circle = {
    kind: "circle";
    radius: number;
};
type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
};
type Triangle = {
    kind: "triangle";
    base: number;
    height: number;
};
type Shape = Circle | Rectangle | Triangle;

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return 0.5 * shape.base * shape.height;
        default:
            // Exhaustiveness check
            const _exhaustiveCheck: never = shape;
            throw new Error(`Unhandled shape kind: ${_exhaustiveCheck}`);
    }
}
const myCircle: Circle = { kind: "circle", radius: 10 };
const myRectangle: Rectangle = { kind: "rectangle", width: 10, height: 5 };
const myTriangle: Triangle = { kind: "triangle", base: 10, height: 5 };
console.log(`Circle area: ${calculateArea(myCircle)}`);
console.log(`Rectangle area: ${calculateArea(myRectangle)}`);
console.log(`Triangle area: ${calculateArea(myTriangle)}`);
