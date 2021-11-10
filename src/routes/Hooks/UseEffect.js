import { useEffect, useState } from 'react';

const UseEffect = () => {
  const sayHello = () => console.log('Hello!!');
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  // [number]からnumberが切り替える場合のみuseEffectが動作
  // [number]がなしの場合は常に動作
  useEffect(sayHello, [number]);

  return (
    <div className="UseEffect">
      <h1>Hello, Use Effect!</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

export default UseEffect;
