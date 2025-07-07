import React from "react";

function CompA(props) {
  return (
    <>
      <h1>First App</h1>
      <h1>Name : {props.name}</h1> <h2>Age : {props.age}</h2>
    </>
  );
}

export default CompA;
