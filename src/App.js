//@ts-check
import React from "react";
import "./App.css";
import GrandParent from "./GrandParent/GrandParent";
/**
 * https://medium.com/@martin_hotell/build-100-type-safe-react-apps-in-vanilla-javascript-bd29a8364078
 */
const App = () => {
  return (
    <div className="App">
      <GrandParent appParam="props from app" />
    </div>
  );
};

export default App;
