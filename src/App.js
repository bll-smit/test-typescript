//@ts-check
import React from "react";
import "./App.css";
import GrandParent from "./GrandParent/GrandParent";

const App = () => {
  return (
    <div className="App">
      <GrandParent appParam="props from app" />
    </div>
  );
};

export default App;
