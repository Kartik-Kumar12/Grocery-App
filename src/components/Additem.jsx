import React, { useState } from "react";

function Additem(props) {
  const [note, setNote] = useState({
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
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
