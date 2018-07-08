//下载 typescript cnpm install -g typescript

//创建一个类
class Student {
    //定义一个字符串
    fullName: string;
    // constructor就类似数据初始化 类似php
    constructor( public firstName, public middleInitial, public lastName ) {
        //闭包使用this
        this.fullName = firstName + " " + middleInitial + " " + lastName
     }
}
//提供接口 其作用性就是为了规定类型
interface Person {
    firstName: string;
    lastName: string;
}
function gretter(person: Person){
    return "hello" + person.firstName + 'lastname' + person.lastName
}
// let user = { firstName: "liu",lastName: "xin" }

let user = new Student("Jane", "xin", "liu")

document.body.innerHTML = gretter(user)
//定义基本类型 以及其他的进制类似
let isDone: boolean = false;
let decLiteral: number = 123;
let names: string = "bob";
//使用字符号 (`) 或者 ${}
let nowname: string = `cheng'`;
let age: number = 12;
//成功
let sent: string = `hello welcome here ${nowname}`

//ts操作数组
let list: number[] = [1,2,3]
//第二种方法 Array<数据类型>
let listMain: Array<number> = [1,2,3];
// 规范函数的变量的规范
let x: [string,number] = ["Xin",123];// actions is ok
//let y: [String,number] = [123,'commit'];//error 
console.log(listMain)

//需要运行该文件的话  首先是再安装了 -g typescript 的条件之下  检测ts 是否安装成功  ts -v
//运行命令 ts gretter.ts
