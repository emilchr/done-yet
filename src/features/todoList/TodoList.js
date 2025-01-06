import React from 'react';
import TodoListCSS from './TodoList.module.css';
import { Todo } from '../todo/Todo';

export const TodoList = () => {
  return (
    <div className={TodoListCSS.todoList}>
      <div className={TodoListCSS.todoUncompleted}>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
      <div className={TodoListCSS.show}>
        <hr />
        <div className={TodoListCSS.todoCompleted}>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </div>
  );
};
