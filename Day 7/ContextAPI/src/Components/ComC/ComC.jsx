import React from "react";

function ComC({ data }) {
  return (
    <div>
      <h1>ComC</h1>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.phone}</p>
      <p>{data.city}</p>
    </div>
  );
}

export default ComC;
