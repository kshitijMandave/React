import React, { useContext } from "react";
import { NameState } from "../../App";
function ComponentC() {
  const nameData = useContext(NameState);
  return (
    <div>
      <h2>ComponentC</h2>
      <p>{nameData.name}</p>
      <p>{nameData.age}</p>
    </div>
  );
}

export default ComponentC;
