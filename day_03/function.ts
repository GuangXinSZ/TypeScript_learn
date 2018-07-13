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
function adda(x: number, y: number): number {
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
let myAddc: (x: number, y:number) => number = function ( x: number, y: number ) {
    return x + y 
}
//第3遍
let myaddD: (x: number ,y:number) => number = function (x: number, y: number ) {
    return x + y 
} 

//ts 里面传递的参数必须是一致的 不能少 比如
function buildName( firstName: string, lastName: string ) {
    return firstName + lastName
}
// let result1 = buildName("Xin");Expected 2 arguments, but got 1
let result2 = buildName("liu","guang");
// console.log(result2) liuguang

//如果说想让你的函数变得可选是否 想打人 可选否加上 (?)

function buildNameA (firstName: string, lastName?: string ) {
    if( lastName ) {
        return firstName + lastName
    } else {
        return firstName
    }
} 
let result3 = buildNameA("Xin","love")
console.log(result3);//输出 result
//必须填的函数类型
function buildNameB (firstName: string, lastName = 'Shimt') {
    return firstName + lastName
}
function buildNameC (firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
let result4 = buildName("Bob", "Adams");
console.log(result4) 

//ts剩余的参数
function buildNameD (firstName: string, ...restOfName: string[]) {
    console.log(restOfName)
    return firstName + '添加' + restOfName.join(" ");
}
let emplyoyeeName = buildNameD("1","2","3");
console.log(emplyoyeeName);

