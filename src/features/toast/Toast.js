import React from 'react';
import ToastCSS from './Toast.module.css';
import { useSelector } from 'react-redux';

export const Toast = () => {
  const showToast = useSelector((state) => state.toast.toastVisible);
  const toastType = useSelector((state) => state.toast.activeType);

  if (showToast) {
    return <div className={ToastCSS.toast}>{toastType}</div>;
  } else {
    return '';
  }
};
