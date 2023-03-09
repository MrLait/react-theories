//Что бы создать обработчик на кнопку например onClick нужно передать ссылку на функцию и в самой функции изменить состояние
//Что бы создать управляемый input нужно добавить обработчик onChange, который принимает слушатель event. event принимает первым параметром 
// event у которого есть dom element - target и у которого есть value - значение которое в нем находится. Соответственно это значение можем помещать 
// в setValue. Это называется двухстороннее связывание. т.е связали состояние со значением в input 
// подобные компоненты называются управляемыми 

//Создание компонента 
//Компонент это функция которая возвращает jsx. Компоненты должны именоваться с большой буквы и их нужно экспортировать
//классовые компоненты это устаревший подход и лучше использовать функциональные компоненты и хуки

// useState предназначен для управления состояния.

import React, { useState } from 'react'
import PostItem from './components/PostItem';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'Javascript', body: 'Description' }} />
      <PostItem post={{ id: 2, title: 'Javascript', body: 'Description' }} />
      <PostItem post={{ id: 3, title: 'Javascript', body: 'Description' }} />
      <PostItem post={{ id: 4, title: 'Javascript', body: 'Description' }} />
    </div>
  );
}

export default App;
