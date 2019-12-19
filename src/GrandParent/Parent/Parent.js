import React from "react";
import Child from "./Child/Child";

const Parent = props => {
  return (
    <div className="Parent">
      This is Parent
      <br />
      Props from grandPram:{props.grandPram}
      <Child parentParam="parent param" />
    </div>
  );
};

export default Parent;
