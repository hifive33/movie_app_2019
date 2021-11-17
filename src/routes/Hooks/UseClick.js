import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    const cur = element.current;
    cur?.addEventListener('click', onClick);
    return () => cur?.removeEventListener('click', onClick);
  }, [onClick]);
  return element;
};

const UseClick = () => {
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);
  return (
    <div className="UseClick">
      <h1 ref={title}>Hi, UseClick!</h1>
    </div>
  );
};

export default UseClick;
