import './App.css';
// import styled from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 하기',
      checked: true,
    },
    {
      id: 3,
      text: '투두리스트 만들기',
      checked: false,
    },
  ]);
  return (
    <TodoTemplate todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className="add-todo-button">
        <MdAddCircle />
      </div>
    </TodoTemplate>
  );
}

export default App;
