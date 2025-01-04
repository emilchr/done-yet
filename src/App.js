import React from 'react';
import './App.css';
import logo from './doneyet-logo.svg';
import { UserInput } from './features/userInput/UserInput';
import { TodoList } from './features/todoList/TodoList';
import { Toast } from './features/toast/Toast';
function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Done Yet Logo" />
        <Toast />
      </header>
      <TodoList />
      <UserInput />
    </div>
  );
}

export default App;
