import React, { useContext } from "react";
import ComponentB from "../ComponentB/ComponentB";
import { AppState } from "../../App";

function ComponentA() {
  const appData = useContext(AppState);
  return (
    <div>
      <h2>ComponentA</h2>
      <p>{appData}</p>

      <ComponentB />
    </div>
  );
}

export default ComponentA;
