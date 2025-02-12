import React, { useEffect, useState } from 'react';
/**
 *  Lifecycle merupakan komponen fungsional yang menggunakan useState untuk mengelola state dalam komponen 
 * 
 */
const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(188);

  useEffect(() => {
    console.log("Effect triggered with count: ", count);

    return () => {
      console.log("Cleanup for count:", count);
    };
  }, [count]);

  return (
    <div>
      <p>Counter value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <p>Counter for other value: {otherState}</p>
      <button onClick={() => setOtherState(otherState + 13)}>Increase Other State</button>
    </div>
  );
};

export default Lifecycle;