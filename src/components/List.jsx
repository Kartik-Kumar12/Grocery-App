//import required modules
import React, { useState } from "react";
import Additem from "./Additem";
import ListItem from "./ListItem";

//List component for displaying items and for adding new item in the list
function List() {
  //destructuring useState inbuilt component to a variable note and funtion setNote
  const [notes, setNotes] = useState([]);

 //function for adding a new list item
  function addNote(newNote) {
    setNotes(prevNotes => {
      //returns an array with addition of newNote(new item)
      return [...prevNotes, newNote];
    });
  }
  //function for deleting the selected item
  function deleteNote(id) {
    setNotes(prevNotes => {
      //returns an array which are not clicked or whose id is not being passed
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
