import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("set interval executed:")
      setSecond((preSeconds) => preSeconds + 1);
    }, 1000);

    return () => {
      console.log("time to stop:");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Second: {second}</h1>
    </div>
  );
}
export default TimerComponent;
