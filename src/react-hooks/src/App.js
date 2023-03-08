// useCallback решает ту же проблему что и useMemo, но возвращает не результат функции а саму функцию, в [] указываем от чего зависим
// Нужен что бы функция не изменялась при новом рендере, а кэшировалась

import React, { useCallback, useState } from 'react'
import ItemsList from './itemsList';

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromApi = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
  }, [count])

  return (
    <div>
      <h1 style={styles}>Count property:{count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}> Add</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}> Change</button>

      <ItemsList getItems={generateItemsFromApi} />
    </div>
  )
}


export default App;
