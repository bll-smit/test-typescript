import React from "react";
import Child from "./Child/Child";
import { ParentProps } from "../../types/Parent.type";

const Parent = (props: ParentProps) => {
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
