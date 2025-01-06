import React from 'react';
import ToastCSS from './Toast.module.css';

export const Toast = () => {
  return <div className={ToastCSS.toast}>Task created!</div>;
};
