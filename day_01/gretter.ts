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
//提供接口
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