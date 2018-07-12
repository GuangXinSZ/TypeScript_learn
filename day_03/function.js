// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
console.log(addToZ(1, 2));
