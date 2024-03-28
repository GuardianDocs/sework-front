import { StoryFn } from '@storybook/react';
import { ToastContainer } from './ToastContainer';
import { toast, Toast, ToastType, ToastProps } from './Toast';

export default {
  title: 'Design System/UI/Toast',
  component: Toast,
};

export const ToastExample: StoryFn<ToastProps> = ({ text }: ToastProps) => {
  const handleClick = (type: ToastType) => () => {
    toast[type](text);
  };

  return (
    <div>
      <button onClick={handleClick('success')}>SUCCESS TOAST</button>
      <br />
      <button onClick={handleClick('warning')}>WARNING TOAST</button>
      <br />
      <button onClick={handleClick('danger')}>DANGER TOAST</button>
      <br />
      <button onClick={handleClick('info')}>INFO TOAST</button>
      <ToastContainer />
    </div>
  );
};

ToastExample.args = {
  text: '이것은 글씨',
};
