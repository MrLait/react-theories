//Что бы создать обработчик на кнопку например onClick нужно передать ссылку на функцию и в самой функции изменить состояние
//Что бы создать управляемый input нужно добавить обработчик onChange, который принимает слушатель event. event принимает первым параметром 
// event у которого есть dom element - target и у которого есть value - значение которое в нем находится. Соответственно это значение можем помещать 
// в setValue. Это называется двухстороннее связывание. т.е связали состояние со значением в input 
// подобные компоненты называются управляемыми 

import React, { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('input text')

  function increment() {
    setLikes(likes + 1)
  }
  function decrement() {
    setLikes(likes - 1)
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={increment}> Increment</button>
      <button onClick={decrement} > Decrement</button>
    </div>
  );
}

export default App;
