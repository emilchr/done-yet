import React, { useState } from 'react';
import TodoListCSS from './TodoList.module.css';
import { Todo } from '../todo/Todo';
import { addTodo } from './todoListSlice';
import { useDispatch, useSelector } from 'react-redux';

export const TodoList = () => {
  const [input, setInput] = useState('');

  const todos = useSelector((state) => state.todoList.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput('');
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
        <div className={TodoListCSS.show}>
          <hr />
          <div className={TodoListCSS.todoCompleted}>
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
