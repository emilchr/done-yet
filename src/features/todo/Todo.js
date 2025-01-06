import React from 'react';
import TodoCSS from './Todo.module.css';

export const Todo = () => {
  return (
    <div className={TodoCSS.todo}>
      <span>Todo COMPONENT</span>
      <input type="checkbox" />
      <label for="checkbox"></label>
    </div>
  );
};
