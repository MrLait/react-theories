//Так раньше создавали функции
// function sum(a, b){
//     return a + b
// }

//Преимущество стрелочной функции заключается в возможности сокращенного написания кода в одну строку, если нужно вернуть только одну строчку
//const sumV2 = (a, b) => a + b
//сокращенную форму записи удобно использовать если функция принимает другую функцию.
//стрелочная функция в отличии от обычной функции использует контекст где определена, в отличии от обычной функции, которой нужно переопределять контекст
// т.к она использует глобальный или window контекст

//Перепишем в стрелочную функцию
const sum = (a, b) => {
    return a + b
}
const sumV2 = (a, b) => a + b
setTimeout(()=> console.log(123), 500)

//context
function log (){
    console.log(this)
}

const arrowLog = () => console.log(this)

const person = {
    name: 'ad',
    age: 123,
    log: log,
    arrowLog: arrowLog,
    delayLog: function(){
        const self = this
        setTimeout(function(){
            console.log(self.name, self.age), 500
        })
    },
    delayLogArrow: function(){
        setTimeout(() => {
            console.log(this.name, this.age), 500
        })
    }
}

person.log()
person.arrowLog()
person.delayLog()
person.delayLogArrow()