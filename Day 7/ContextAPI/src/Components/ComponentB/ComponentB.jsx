import React, { useContext } from "react";
import { AppState } from "../../App";
import ComponentC from "../ComponentC/ComponentC";

function ComponentB() {
  const appData = useContext(AppState);
  return (
    <div>
      <h2>ComponentB</h2>
      <p>{appData}</p>

      <ComponentC />
    </div>
  );
}

export default ComponentB;
