import React from "react";
import { ChildProps } from "../../../types/Child.type";

const Child = (props: ChildProps) => {
  return (
    <div className="Child">
      This is Child
      <br />
      Props from Parent:{props.parentParam}
    </div>
  );
};

export default Child;
