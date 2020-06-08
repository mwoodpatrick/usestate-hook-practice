import React, { useState } from "react";

function App() {
  function getTimeString() {
    const time = new Date().toLocaleTimeString();

    // console.log("got time: " + time + " after time");

    return time;
  }
  const [timeString, updateTimeString] = useState(getTimeString());
  function getTime() {
    updateTimeString(getTimeString());
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{timeString}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
