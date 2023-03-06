// export default позволяет экспортировать объект, класс, но лучше использовать именованное экспортирование
//export const COLOR или export function compute 

const privateVar = 42
export const COLOR = '#bababa'

export function compute(a, b) {
    return a + b
}

//export class

export default {
    log() {
        console.log(privateVar)
    }
}