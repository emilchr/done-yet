import React from 'react';
import './App.css';
import logo from './doneyet-logo.svg';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt='Done Yet Logo' />
      </header>
      <div className="todo-list">
        <div className='todo-uncompleted'>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
          <div className='todo'><span>Todo 1</span><input type='checkbox' /><label for='checkbox'></label></div>
        </div>
        <div className='concealer'>
          <hr />
          <div className="todo-completed">
            <div className='todo'><span>Todo 4</span><input type='checkbox' checked /><label for='checkbox'></label></div>
            <div className='todo'><span>Todo 4</span><input type='checkbox' checked /><label for='checkbox'></label></div>
            <div className='todo'><span>Todo 4</span><input type='checkbox' checked /><label for='checkbox'></label></div>
          </div>
        </div>
      </div>
      <div className='user-input'>
        <input type='text' name='user-input'></input>
        <button className='add-button'></button>
      </div>
    </div>
  );
}

export default App;
