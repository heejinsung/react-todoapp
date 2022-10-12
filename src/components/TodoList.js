import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelecetdTodo,
}) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelecetdTodo={onChangeSelecetdTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
