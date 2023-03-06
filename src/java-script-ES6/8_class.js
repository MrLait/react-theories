//В классе можно создать поля, конструктор, метод
//Можно наследовать один класс от другого при помощи ключевого слова extends, при создании конструктора в наследнике он должен вызывать
//конструктор базового класса при помощи ключевого слова super(). Наследник получает все поля, методы базового класса.
//Методы базового класса можно переопределять, а чтобы обратиться к базовому функционалу нужно использовать ключевое слово и имя метода super.method()
//Можно создавать get и set. В них можно писать дополнительную валидацию в отличии от полей
//Можно создавать static методы при помощи ключевого слова static, что при обращении к методу не создавать экземпляр класса 


class Person {
    type = 'human'
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(this.name + ': Hello')
    }
}

const max = new Person('Max')
console.log(max)
max.greet()
console.log(max.type)

class Programmer extends Person {
    constructor(name, job) {
        super(name)
        this._job = job
    }

    greet() {
        super.greet()
        console.log('Rewritten')
    }
    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        this._job = job
    }

}

const frontend = new Programmer('Max', 'frontend')
console.log(frontend)
frontend.greet()
console.log(frontend.job)
frontend.job = 'asd'
console.log(frontend.job)