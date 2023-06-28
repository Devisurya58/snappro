import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {

  const myStyle = {
    
    color: "yellow",
    fontSize: "20px",
    backgroundColor: "grey",
    padding: "10px",
  };
  return (
    <div>
      <center>
      <h1 style={myStyle}>SNAP SHOT</h1>
      
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
      </center>
    </div>
  );
};

export default Header;
