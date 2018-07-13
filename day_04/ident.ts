//不使用泛型的情况下 
function indentity (arg: number): number {
    return arg;
}
console.log(indentity(1));
//使用泛型
function indentitya(arg: any): any {
    return arg;
}
console.log(indentitya("xin"));
//表示类型传什么类型返回什么类型 T 代表捕获用户传入的类型 接收什么 返回什么
function indentityb<T>(arg: T): T {
    return arg
}
console.log(indentityb(222));

//使用泛型变量
function loggingIdentity<T>(arg: T): T {
    //console.log(arg.length); T 函数并没有.length
    return arg
}
//整体实现
function loggingIdentitya<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}
let myIdentity: <T>(arg: T) => T = indentityb;
console.log(loggingIdentitya(["string"]));
//接口实现
interface GenericIndentyFn {
    <T>(arg:T): T;
}
function indentityc<T> (arg: T): T {
    return arg
}
//正确的选择
let myIndentFnSan: GenericIndentyFn = indentityc;
//泛型的指定方式 写在类上面
//定义一个类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
//虽然类是固定随便传参数  但是在new Object的时候就固定是<number>的函数类型
let myGenericNumber = new GenericNumber<number>()
let src = myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x,y) {
    return x + y
}
console.log(src)
console.log('====================================');
console.log(myGenericNumber.add(1,2));
console.log('====================================');
//泛型约束 暂时这边不做多的解析 暂时后期理解现在大致了解一下情况

