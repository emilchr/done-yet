import React from 'react';
import TodoCSS from './Todo.module.css';
import { useSelector } from 'react-redux';

// const isComplete = useSelector((state) => state.todoList.todo.isComplete);

export const Todo = (props) => {
  const handleClick = (e) => {};

  return (
    <div className={TodoCSS.todo} id={props.taskId}>
      <span>{props.content}</span>
      <input name="checkbox" type="checkbox" checked={props.isComplete} />
      <label for="checkbox" onClick={handleClick}></label>
    </div>
  );
};
