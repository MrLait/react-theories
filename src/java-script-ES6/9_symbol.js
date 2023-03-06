// 7 тип данных js, который появился в es6 и нужен чтобы задавать какие-то уникальные ключи и по своей сути это какое-то уникальное значение.
//Если сравнить символы, то вернется false 
//Символы можно задавать в качестве динамического ключа, чтобы получить значение этого символа нужно использовать квадратные скобки[] например obj[symbol]
//Поля в качестве символов являются сокрытыми, например, при переборе циклом он не видит символы
//Символы нужны для задания определенных метаданных для объектов, функций либо классов
const symbol = Symbol('demo')
const other = Symbol('demo')

console.log(symbol)
console.log(other)

console.log(symbol == other)
console.log(symbol === other)

const obj = {
    name: 'Elena',
    [symbol]: 'meta'
}

console.log(obj)
console.log(obj[symbol])

for (let key in obj) {
    console.log(key)
}
