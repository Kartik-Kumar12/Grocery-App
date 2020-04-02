
import React from "react";


//Datem component for finding current date
function Datem() {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  //converting to required format
  const today = date.toLocaleDateString("en-US", options);
  return (
    <div className="headBox">
      <h1>{today}</h1>
    </div>
  );
}

export default Datem;
