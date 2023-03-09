// Ограничения при использовании хуков
// Хуки имеют ряд ограничений при определении и использовании:
// Хуки вызываются только на верхнем уровне (top-level) компонента. Они НЕ вызываются внутри циклов, условных конструкций, внутри стандартных функций javascript.
// Хуки можно вызывать только из функциональных компонентов React, либо из других хуков. Но их нельзя вызывать из классов-компонентов.
// Функциональные компоненты можно определять как обычные функции:


//useState: предназначен для управления состоянием компонентов. Итак, хук useState определяет переменные состояния. Единственный аргумент хука определяет начальное 
// значение переменной состояния. А возвращает useState() массив из двух объектов. Первый объект представляет значение состояния, а второй объект представляет 
// функцию, которая обновляет это значение. Например, выше состояние определялось следующим образом: const [count, setCount] = React.useState(0);
// В данном случае для определения переменных применяется синтаксис декомпозиции или destructuring. Но также мы могли бы использовать и стандартный синтаксис 
// массивов для получения значений переменных:
// var countStateArray= React.useState(0);
// var count = countStateArray[0];
// var setCount = countStateArray[1];

//Best practice использовать callback функцию которая основана на отслеживании предыдущего состояния
//т.к useState является асинхронным и просто вызвать setCounter дважды нельзя т.к он выполнится один раз

//Если проинициализировать useState(initFunction) передав туда функцию, то эта функция будет вызываться дважды
//перед каждым рендерингом страницы, чтобы оптимизировать этот процесс нужно передать callback с этой функцией
//которая один раз вычислит начальное значение и не будет туда больше обращаться

//Если нужно использовать объекты то для сохранения состояния остальных полей
// нужно использовать функцию с сохранением в ...prev

import React, { useState } from 'react'

function computeInitialCounter() {
    console.log("calculation");
    return Math.trunc(Math.random() * 20)
}

function App() {
    // const [counter, setCounter] = useState(0)
    // const [counter, setCounter] = useState(computeInitialCounter())
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    })

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })

    function increment() {
        //setCounter(counter + 1)
        setCounter((prevCounter) => {
            return prevCounter + 1
        })

        setCounter(prev => prev + 1)
        setCounter(prev => prev + 1)
    }
    function decrement() {
        setCounter(counter - 1)
    }

    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: "New state"
            }
        })
    }
    return (
        <div>
            <h1>Counter: {counter} </h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Delete</button>
            <button onClick={updateTitle}>Change title</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div >
    )
}

export default App;
