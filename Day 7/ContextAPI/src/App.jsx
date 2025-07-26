// import ComA from "./Components/ComA/ComA";
import { createContext, useState } from "react";
import Nav from "./Components/Nav/Nav";
import ComponentA from "./Components/ComponentA/ComponentA";

const AppState = createContext();
const NameState = createContext();

function App() {
  // const [data, setData] = useState({
  //   name: "Kshitij",
  //   age: 25,
  //   phone: 7038342551,
  //   city: "Nagpur",
  // });

  const [data, setData] = useState("Hello");
  const [name, setName] = useState({ name: "Kshitij", age: 25 });

  return (
    <>
      <AppState.Provider value={data}>
        <NameState value={name}>
          <Nav />
          {/* <ComA data={data} /> */}
          <ComponentA />
        </NameState>
      </AppState.Provider>
    </>
  );
}

export default App;

export { AppState, NameState };
