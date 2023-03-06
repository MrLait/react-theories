// var - это более глобальная переменная
// let -это переменная, которая видна только внутри {} в котором она объявлена. Если объявлены две переменные let с одинаковыми именами,
// то в приоритете будет та которая находится внутри {}

// отличие var от let
// hosting: переменные let и const, не хостятся т.е к ним нельзя обращаться до того пока их не объявили, а к var можем.
// за исключением function. Можно объявить переменную после функции.

// Const 
// const это переменные значение которых нельзя изменить т.е нельзя изменить ссылку, но можно поменять или добавить новое 
// значение в созданный массив или объект
let letNum = 2
if (true) {
    var varNum = 42
    let letNum = 1
    console.log('letNum', letNum)
}
console.log(varNum)
console.log(letNum)

//Hosting
b = 20
console.log(b)
//let b = 10
var b = 14

function hosted() {
    age = 26
}

let age
hosted()
console.log(age)

const color = 123
//color = 1233
console.log(color)


