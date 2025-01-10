import React from 'react';
import TodoCSS from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { handleTodo } from '../todoList/todoListSlice';
import { showToast } from '../toast/toastSlice';

export const Todo = (props) => {
  const dispatch = useDispatch(handleTodo);

  const handleClick = (e) => {
    dispatch(handleTodo(props.taskId));
    switch (props.isComplete) {
      case false:
        dispatch(showToast({ show: true, type: 'done' }));
        setTimeout(() => {
          dispatch(showToast({ show: false, type: 'done' }));
        }, 2000);
        break;

      case true:
        dispatch(showToast({ show: true, type: 'unDone' }));
        setTimeout(() => {
          dispatch(showToast({ show: false, type: 'unDone' }));
        }, 2000);
        break;

      default:
        break;
    }
  };

  return (
    <div className={TodoCSS.todo} id={props.taskId}>
      <span>{props.content}</span>
      <input name="checkbox" type="checkbox" checked={props.isComplete} />
      <label for="checkbox" onClick={handleClick}></label>
    </div>
  );
};
