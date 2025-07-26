import React from "react";
import ComB from "../ComB/ComB";

function ComA({ data }) {
  return (
    <div>
      <h1>ComA</h1>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.phone}</p>
      <p>{data.city}</p>

      <ComB data={data} />
    </div>
  );
}

export default ComA;
