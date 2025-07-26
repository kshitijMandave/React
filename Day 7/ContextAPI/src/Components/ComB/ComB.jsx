import React from "react";
import ComC from "../ComC/ComC";

function ComB({ data }) {
  return (
    <div>
      <h1>ComB</h1>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.phone}</p>
      <p>{data.city}</p>

      <ComC data={data} />
    </div>
  );
}

export default ComB;
