var color;
(function (color) {
    color[color["blue"] = 0] = "blue";
    color[color["black"] = 1] = "black";
    color[color["white"] = 2] = "white";
})(color || (color = {}));
var hehe = color.white;
console.log(hehe);
