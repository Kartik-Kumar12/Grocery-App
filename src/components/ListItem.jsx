import React from "react";

//ListItem component for displaying list items
function ListItem(props) {
  //function to be called on  onlick event
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="item">
      <i className="fas fa-shopping-basket fa-1x" onClick={handleClick} />
      <p>{props.content}</p>
    </div>
  );
}

export default ListItem;
