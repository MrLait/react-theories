//это класс который позволяет добавлять определенные ловушки на любые объекты такие как объекты функции и классы

const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Field ${prop} is undefined`
    },
    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log("Length should be more then 2 symbols" + value.length);
        }
    }
}

const form = {
    login: 'tester',
    password: '12345'
}

const formProxy = new Proxy(form, validator)

console.log(formProxy);
console.log(formProxy.login);
console.log(formProxy['username']);