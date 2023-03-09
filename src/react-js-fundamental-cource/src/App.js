//Что бы создать обработчик на кнопку например onClick нужно передать ссылку на функцию и в самой функции изменить состояние
//Что бы создать управляемый input нужно добавить обработчик onChange, который принимает слушатель event. event принимает первым параметром 
// event у которого есть dom element - target и у которого есть value - значение которое в нем находится. Соответственно это значение можем помещать 
// в setValue. Это называется двухстороннее связывание. т.е связали состояние со значением в input 
// подобные компоненты называются управляемыми 

//Создание компонента 
//Компонент это функция которая возвращает jsx. Компоненты должны именоваться с большой буквы и их нужно экспортировать
//классовые компоненты это устаревший подход и лучше использовать функциональные компоненты и хуки

// useState предназначен для управления состояния.
// useRef - позволяет получать напрямую доступ к ДОМ элементу, например что бы получить какое-то поле это второй способ
// создания управляемого компонента, но так делать нежелательно
//props.children - почитать
//e.preventDefault() предотвращает обновление страницы при нажатии на кнопку

import React, { useState, useRef } from 'react'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' }
  ])
  const [title, setTitle] = useState('')
  const bodyInputRef = useRef()
  const addNewPost = (e) => {
    e.preventDefault()
    console.log(bodyInputRef.current);
  }
  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text'
          placeholder='post name' />
        <input ref={bodyInputRef} type='text' />
        {/* <MyInput
          ref={bodyInputRef}
          type='text'
          placeholder='post description'
        /> */}
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList postList={posts} title="title list" />
    </div >
  );
}

export default App;
