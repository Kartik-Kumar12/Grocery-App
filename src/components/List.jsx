import React, { useState } from "react";
import Additem from "./Additem";
import ListItem from "./ListItem";

function List() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="box">
      {notes.map((noteItem, index) => {
        return (
          <ListItem
            key={noteItem + " " + index}
            id={index}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Additem onAdd={addNote} />
    </div>
  );
}

export default List;
