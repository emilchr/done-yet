import React from 'react';
import UserInputCSS from './UserInput.module.css';

export const UserInput = () => {
  return (
    <div className={UserInputCSS.userInput}>
      <input type="text" name="user-input"></input>
      <button className={UserInputCSS.addButton}></button>
    </div>
  );
};
