interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

let cc: ColorfulCircle = { color: "red", radius: 42 };

console.log(cc,typeof cc);
