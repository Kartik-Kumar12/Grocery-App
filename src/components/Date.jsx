import React from "react";

function Datem() {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  const today = date.toLocaleDateString("en-US", options);
  return (
    <div className="headBox">
      <h1>{today}</h1>
    </div>
  );
}

export default Datem;
