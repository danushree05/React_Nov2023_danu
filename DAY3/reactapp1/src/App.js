import './App.css';
//import StateProps from "./components/StateProps";
import {useState} from "react";
import Props from "./components/Props";
function App() {
  const [name,setName]=useState("danu");
  return (
    <div className="App">
      {/*<StateProps/>*/}
      <Props name={name}/>
    </div>
  );
}
export default App;
