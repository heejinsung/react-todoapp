import './App.css';
// import styled from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';

let nextId = 4;
function App() {
  const [insertToggle, setInsertToggle] = useState(false);
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

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('할 일을 입력해주세요. ');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <TodoTemplate todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle} />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )}
    </TodoTemplate>
  );
}

export default App;
