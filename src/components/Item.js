import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <center>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
      </center>
    </div>
  );
};

export default Item;
