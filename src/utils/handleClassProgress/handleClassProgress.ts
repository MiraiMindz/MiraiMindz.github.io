function removeDups(arr: Array<any>) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

export function handleClassProg(courseName: string, addClass: number, classArr: Array<number>, setArr: Function) {
console.clear()
if (classArr != undefined) {
    if (localStorage.PylessClasses != null) {
    console.log(addClass)
    let locStg:Array<number> = localStorage.getItem(courseName)?.split(",").map(Number) as unknown as Array<number>;
    console.log('locStg: ', locStg)
    if (addClass == null || "") {
        addClass = 0
    }
    let localArr: Array<number> = locStg.concat([addClass as unknown as number])
    console.log('localArr: ', localArr)
    setArr(removeDups(localArr.sort((a, b) => a - b)))
    localStorage.setItem(courseName, classArr.toString())
    console.log(classArr)
    }
}
}
