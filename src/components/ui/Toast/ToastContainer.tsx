import classNames from 'classnames';
import {
  cssTransition,
  ToastContainer as ToastContainerBase,
  ToastContainerProps as ToastContainerBaseProps,
} from 'react-toastify';
import 'animate.css/animate.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

const toastAnimate = cssTransition({
  enter: 'animate__animated animate__bounceIn',
  exit: 'animate__animated animate__bounceOut',
});

export type ToastContainerProps = {
  className?: string;
} & ToastContainerBaseProps;

export const ToastContainer = ({ className, ...props }: ToastContainerProps) => {
  return (
    <ToastContainerBase
      position="top-center"
      icon={false}
      hideProgressBar
      autoClose={3000}
      closeButton={true}
      pauseOnFocusLoss={false}
      closeOnClick={false}
      limit={4}
      transition={toastAnimate}
      className={() => classNames('fixed-top-center z-[10000] box-border w-[343px] p-4', className)}
      toastClassName={context => classNames('bg-gray-700 rounded-lg relative mb-2 cursor-pointer p-1 flex')}
      bodyClassName={() => 'my-auto mx-0 flex flex-1 items-center [&_div]:flex [&_div]:items-center'}
      enableMultiContainer
      containerId="root_container"
      {...props}
    />
  );
};
