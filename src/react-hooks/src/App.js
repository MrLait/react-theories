//useEffect - служит для отслеживания изменения состояния параметра, на который он подписался и выполнить какую-то логику в ответ на это изменение. 
// В качестве параметра в useEffect() передается функция. При вызове хука useEffect по сути определяется "эффект", который затем применяется в приложении. 
// Когда именно применяется? По умолчанию React применяет эффект после каждого рендеринга, в том числе при первом рендеринге приложения. Причем поскольку 
// подобные эффекты определены внутри компонента, они имеют доступ к объекту props и к состоянию компонента.

// чтобы указать, что эффект применяется только при изменении переменной name, передадим ее в качестве необязательного параметра в функцию [name]:
// Если мы хотим, чтобы эффект вызывался только один раз при самом первом рендеринге, то в качестве параметра передаются пустые квадратные скобки - [].
// Можно эмулировать life cycle hook, чтобы определить момент, когда компонент готов к работе, а так же очищать ресурсы т.е осуществлять подписку/отписку

import React, { useState, useEffect } from 'react'

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })
  // useEffect(() => {
  //   console.log('render');
  // })

  // useEffect(() => {
  //   console.log('Type changed : ', { type });
  // }, [type])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('Clean type');
    }
  }, [type])

  const mousemoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount');
    // подписка
    window.addEventListener('mousemove', mousemoveHandler)
    // отписка
    return () => {
      window.removeEventListener('mousemove', mousemoveHandler)
    }
  }, [])

  return (
    <div>
      <h1>Resource: {type}</h1>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div >
  )
}

export default App;
