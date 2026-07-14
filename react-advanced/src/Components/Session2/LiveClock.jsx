import React from "react";
import useCurrentTime from "./useCurrentTime";

function LiveClock() {
  const currentTime = useCurrentTime();

  return (
    <div>
      <h2>Live Clock</h2>
      <h3>{currentTime.toLocaleTimeString()}</h3>
    </div>
  );
}

export default LiveClock;
