//判断类型 满足一个条件即可
function printLabel(labellobj: { label: string }) {
    console.log(labellobj.label)
}

let myObj = { size: 10, label: "Size 10 Object" }

printLabel(myObj)

//接下来咋们使用interface接口模式
interface LabellValue {
    Label: String
}
//接口模式调试
function printLabels (LabelledObj: LabellValue) {
    console.log(LabelledObj.Label);
}
let Objs = { size: 10,Label: 'Xin' }
printLabels(Objs)

//可选的属性接口
interface SquareConfig {
    color?: string;
    width?: number;
}
//连续的接口
function createSquare(config: SquareConfig):{color: string; area: number} {
    let newSquare = { color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  let mySquare = createSquare({color: "black"});
  console.log(mySquare)

  //只读属性 readonly
  interface Point {
      readonly x: number;
      readonly y: number;
  }
  let p1: Point = { x: 11, y:22 };

  console.log(p1.x)//输出结果为11

  //指定数组后不可被修改 ReadonlyArray<T>
  let a: number[] = [1,2,3,4,5,6,7]
  //使用readonlyArray  只能读取不能修改 也不能添加push 
  let ro: ReadonlyArray<number> = a;
//   ro[0] = 11 错误