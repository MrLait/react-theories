//useRef - позволяет сохранить состояние между рендерингом компонентов и соответственно не вызывает сам рендер
//Если нам нужно перерисовывать страницу, то нужно использовать хук useState
// Так же позволяет получать ссылку на дом элементы
//Позволяет получать значение предыдущего состояния
import React, { useState, useEffect, useRef } from 'react'

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')
  useEffect(() => {
    renderCount.current++;
    // console.log(inputRef.current.value);
  })
  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()
  return (
    <div>
      <h1>Number of render: {renderCount.current} </h1>
      <h2>Prev value: {prevValue.current} </h2>

      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className='btn btn-success' onClick={focus}>focus</button>
    </div>
  )
}

export default App;
