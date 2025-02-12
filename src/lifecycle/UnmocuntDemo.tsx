import React, { useEffect, useState } from 'react';

const ChildComponent = () => {
  useEffect(() => {
    console.log("✅ Child component is mounted");
    return () => {
      console.log("❌  Child component is unmounted");
    };
  }, []);

  return <p>Child component is mounted</p>;
};

const UnmountDemo = () => {
    const [show, setShow] = useState(true);
  return (
    <div>
     <button onClick={() => setShow(!show)}>{show ? "Unmount child component": "Mount child component"}</button> 
    {show && <ChildComponent />}
    </div>
  );
};

export default UnmountDemo;