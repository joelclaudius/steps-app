import { useEffect } from "react";

function Timer({ setMaxTime, dispatch }) {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  return <div className="timer">{setMaxTime}</div>;
}

export default Timer;
