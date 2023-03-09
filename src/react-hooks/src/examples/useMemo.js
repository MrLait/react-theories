// позволяет кэшировать стейт функции, и соответственно если стейт не поменялся то закэшированная функция не будет вызываться
// так же позволяет кэшировать объекты т.к после рендеринга создаются новые ссылки на объект, когда меняется стейт, вызывается рендер 
// и создается новый объект, а useEffect следит за старым объектом видит что он изменился и вызывает функцию заново
import React, { useState, useMemo, useEffect } from 'react'

function complexCompute(num) {
    console.log('complexCompute');
    let i = 0
    while (i < 1000000000) { i++ }
    return num * 2
}



function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false);
    const style = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    const computed = useMemo(() => {
        return complexCompute(number);
    }, [number])

    useEffect(() => {
        console.log('Style changed')
    }, [style])

    return (
        <div>
            <h1 style={style}>Count property:{computed}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}> Add</button>
            <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}> Delete</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}> Change</button>
        </div>
    )
}

export default App;
