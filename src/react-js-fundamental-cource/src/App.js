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
// неуправляемый\неконтролируемый компонент - почитать

//ReactDevTools расширение в хроме

//props это некоторые параметры которые может принимать компонент из вне, но обмен этими props-ами всегда идет сверху вниз т.е от родителя
// к дочернему компоненту, соответственно передача пропсов снизу вверх невозможна. Но из родительского компонента можно передать в дочерний callback
// функцию обратного вызова. Далее эта функция в дочернем компоненте вызывается и передает данные туда где эта функция была объявлена

//useMemo(callback, deps) - callback должен возвращать результат вычислений. Нужна для кэширования вычислений. Функция пересчитает данные только в том
// случае если одна из зависимостей изменит сове состояние. Если массив зависимостей пустой, то функция вызовется лишь единожды

//useEffect(callback, deps) - предназначен для жизненного цикла компонента. Работает примерно так же как и useMemo

//stopPropagation предотвращает вызов события - почитать 

//React Transition Group - пакет для анимации 
//npm i axios  - библиотека что бы делать запросы

//Жизненный цикл компонента mount, update и unmount https://youtu.be/GNrdg3PzpJQ?t=5921
import React, { useEffect, useMemo, useState } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import './styles/App.css'
import MyModal from './components/UI/myModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';
import { useFetching } from './components/hooks/useFetching';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })
  useEffect(() => {
    fetchPosts()
  }, [])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>Get posts</button>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
        <h1> An error occur ${postError}</h1>}
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
        : <PostList remove={removePost} postList={sortedAndSearchedPosts} title="title list" />
      }
    </div >
  );
}

export default App;
