//useState - 
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
