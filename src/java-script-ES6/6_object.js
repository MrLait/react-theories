//В объектах можно объявлять функции без указания ключевого слова function: toString: function(){}, а просто toString (){}
//Можно создавать стрелочные функции, но они не работают с контекстом 
//Можно создавать динамические ключи в полях объекта при помощи квадратных скобок []
//Если ключ и значение совпадают, то можно писать только сам ключ например: job: job, => job
//Methods:
//Object.is(10, 20)) сравнивает объекты по значению
//Object.assign({}, first, second) модифицирует т.е соединяет объекты. Первый параметр можно занулить {}, и таким образом первый объект не модифицируется.
//Object.entries - возвращает объект в виде массива с ключ+ значение
//Object.keys - возвращает массив ключей
//Object.values - возвращает массив значение
const cityField = 'city'
const job = 'Frontend'
const person = {
    age: 26.,
    name: 'Irina',
    [cityField]: 'SPB',
    job,
    'country-live': 'Russia',
    print: () => 'Person',
    toString() {
        return Object
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
}

console.log(person.toString())
console.log(person.print)

//Methods
const first = { a: 1 }
const second = { b: 2 }

console.log(Object.is(10, 20))
console.log(Object.assign({}, first, second))
console.log(first)

const obj = Object.assign({}, first, second, { c: 3 })

console.log(obj)
console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))
