import React from 'react';
import TodoCSS from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { handleTodo } from '../todoList/todoListSlice';

export const Todo = (props) => {
  const dispatch = useDispatch(handleTodo);

  const handleClick = (e) => {
    dispatch(handleTodo(props.taskId));
  };

  return (
    <div className={TodoCSS.todo} id={props.taskId}>
      <span>{props.content}</span>
      <input name="checkbox" type="checkbox" checked={props.isComplete} />
      <label for="checkbox" onClick={handleClick}></label>
    </div>
  );
};
