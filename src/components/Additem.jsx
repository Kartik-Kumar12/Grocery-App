import React, { useState } from "react";

// Additem component for adding item in the list
function Additem(props) {
  //destructuring useState inbuilt component to a variable note and funtion setNote
  const [note, setNote] = useState({
    content: ""
  });
  //function to be called when there is change in input box
  function handleChange(event) {
    const { name, value } = event.target;
    //setting previous input value to the new one
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
//function to be called on  onSubmit event
  function submitNote(event) {
    props.onAdd(note);
    //setting input box value to empty for the new item
    setNote({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="item">
        <input
          type="text"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Add New Item"
          autoComplete="off"
          required
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default Additem;
