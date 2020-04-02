import React from "react";

function ListItem(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="item">
      <i className="fas fa-shopping-basket fa-2x" onClick={handleClick} />
      <p>{props.content}</p>
    </div>
  );
}

export default ListItem;
