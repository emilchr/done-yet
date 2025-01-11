import React, { useState } from 'react';
import TodoListCSS from './TodoList.module.css';
import { Todo } from '../todo/Todo';
import { addTodo, toggleCompleted } from './todoListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../toast/toastSlice';

export const TodoList = () => {
  const [input, setInput] = useState('');

  const todos = useSelector((state) => state.todoList.todos);
  const showCompleted = useSelector((state) => state.todoList.showCompleted);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    dispatch(showToast({ show: true, type: 'add' }));
    setTimeout(() => {
      dispatch(showToast({ show: false, type: 'add' }));
    }, 2000);
    setInput('');
  };

  const toggleDoneList = (e) => {
    showCompleted
      ? dispatch(toggleCompleted(false))
      : dispatch(toggleCompleted(true));
  };
  return (
    <>
      <div className={TodoListCSS.todoList}>
        <div className={TodoListCSS.todoUncompleted}>
          {todos.map(
            (todo) =>
              !todo.isComplete && (
                <Todo
                  taskId={todo.taskId}
                  content={todo.content}
                  isComplete={todo.isComplete}
                />
              )
          )}
        </div>
        <div
          className={
            showCompleted
              ? TodoListCSS.show
              : TodoListCSS.show + ' ' + TodoListCSS.hide
          }
        >
          <hr onClick={toggleDoneList} />
          <div
            className={
              showCompleted
                ? TodoListCSS.todoCompleted
                : TodoListCSS.todoCompleted + ' ' + TodoListCSS.conceal
            }
          >
            {todos.map(
              (todo) =>
                todo.isComplete && (
                  <Todo
                    taskId={todo.taskId}
                    content={todo.content}
                    isComplete={todo.isComplete}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <form className={TodoListCSS.userInput} onSubmit={handleAddTodo}>
        <input
          type="text"
          name="user-input"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit" className={TodoListCSS.addButton}></button>
      </form>
    </>
  );
};
