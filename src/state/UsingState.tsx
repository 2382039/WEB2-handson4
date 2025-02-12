import React, { useState } from 'react';

// State is a built-in feature in React that allows a component to store and manage dynamic data.
// Unlike props, which are passed from parent to child and cannot be modified within the component,
// state is managed internally. When state changes, the component re-renders to reflect the updated data.

const UsingState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Counter value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
    </div>
  );
};

export default UsingState;