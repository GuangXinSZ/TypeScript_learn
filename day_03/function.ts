// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { 
    return x + y; 
};
let z = 100;

function addToZ(x, y) {
    return x + y + z;
}
console.log(addToZ(1,2))
//函数的测试方式
function add(x: number, y: number): number {
    return x + y
}
//命名函数
let myAdda = function (x: number, y:number): number {
    return x + y
}
//书写完整函数类型
let myAddb: (x: number, y: number) => number = function ( x: number, y: number ) {
    return x + y
}
