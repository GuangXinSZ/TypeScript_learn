//判断类型 满足一个条件即可
function printLabel(labellobj) {
    console.log(labellobj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//接口模式调试
function printLabels(LabelledObj) {
    console.log(LabelledObj.Label);
}
var Objs = { size: 10, Label: 'Xin' };
printLabels(Objs);
//连续的接口
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var p1 = { x: 11, y: 22 };
console.log(p1.x); //输出结果为11
//指定数组后不可被修改 ReadonlyArray<T>
var a = [1, 2, 3, 4, 5, 6, 7];
//使用readonlyArray
var ro = a;
ro[0] = 11;
