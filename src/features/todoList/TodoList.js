import React from 'react';
import './TodoList.module.css';
import { Todo } from '../todo/Todo';

export const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="todo-uncompleted">
        <Todo />
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div className="todo">
          <span>Todo 1</span>
          <input type="checkbox" />
          <label for="checkbox"></label>
        </div>
      </div>
      <div className="show">
        <hr />
        <div className="todo-completed">
          <Todo />
          <div className="todo">
            <span>Todo 4</span>
            <input type="checkbox" checked />
            <label for="checkbox"></label>
          </div>
          <div className="todo">
            <span>Todo Test</span>
            <input type="checkbox" checked />
            <label for="checkbox"></label>
          </div>
          <div className="todo">
            <span>Todo Test</span>
            <input type="checkbox" checked />
            <label for="checkbox"></label>
          </div>
          <div className="todo">
            <span>Todo Test</span>
            <input type="checkbox" checked />
            <label for="checkbox"></label>
          </div>
          <div className="todo">
            <span>Todo with too much text for it's own good. Lorem ipsum.</span>
            <input type="checkbox" checked />
            <label for="checkbox"></label>
          </div>
        </div>
      </div>
    </div>
  );
};
