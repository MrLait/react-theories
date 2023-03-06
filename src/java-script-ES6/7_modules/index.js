//Способы импортирования: указываем ключевое слово import, импортируемые сущности либо *, что бы импортировать все, as именуем и from путь к модулю
import * as Module from './module'
import {COLOR, compute} from './module'

console.log( compute(1,2))
Module.default.log()