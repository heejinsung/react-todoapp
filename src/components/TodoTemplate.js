import React from 'react';

function TodoTemplate({ children }) {
  return (
    <div>
      <div>오늘 할 일 (0)</div>
      <div>{children}</div>
    </div>
  );
}

export default TodoTemplate;
