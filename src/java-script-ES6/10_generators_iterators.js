//По умолчанию у массивов и строк определен Символ итератор, и позволяет вызывать метод next, что бы получать их значения, но это
//можно делать при помощи цикла for of.
//Применяя символ итератор в качестве динамического ключа [Symbol.iterator](){} можно определить свою логику для использования синтаксиса цикла for of
// для своего объекта
//Generators объявляются при помощи *перед именем функции. Нужно пересмотреть
const array = [1, 2, 3, 4]
const src = "Hello"

console.log(array[Symbol.iterator])
console.log(src[Symbol.iterator])

const iter = array[Symbol.iterator]()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

for (const key of array) {
    console.log(key);
}

const country = {
    values: ['ru', 'kz', 'rb'],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                const value = this.values[i]
                i++
                return {
                    done: i > this.values.length,
                    value
                }
            }
        }
    }
}

for (const key of country) {
    console.log(key);
}

//Generator
function* gen(num = 4) {
    for (let i = 0; i < num; i++) {
        yield i
    }
}

const iterTwo = gen(3)
console.log(iterTwo.next());
console.log(iterTwo.next());
console.log(iterTwo.next());
console.log(iterTwo.next());

for (const key of gen(6)) {
    console.log(key);
}