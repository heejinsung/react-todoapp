import React from 'react';
import './TodoTemplate.css';

function TodoTemplate({ children, todoLength }) {
  return (
    <div className="TodoTemplate">
      <div className="title">오늘 할 일 ({todoLength})</div>
      <div>{children}</div>
    </div>
  );
}

export default TodoTemplate;
