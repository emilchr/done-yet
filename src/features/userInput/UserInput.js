import React from 'react';
import './UserInput.module.css';

export const UserInput = () => {
  return (
    <div className="user-input">
      <input type="text" name="user-input"></input>
      <button className="add-button"></button>
    </div>
  );
};
