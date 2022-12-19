import React from "react";

const MarkedItem = ({ item, onClick }) => {
  function handleClick() {
    onClick(item);
  }
  return <button onClick={handleClick}>{item.title}</button>;
};

export default MarkedItem;
