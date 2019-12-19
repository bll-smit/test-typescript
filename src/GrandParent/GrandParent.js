//@ts-check
import React from "react";
import Parent from "./Parent/Parent";

/**
 * @param {import("../types/GrandParent.type").GrandParentProps} props
 */
const GrandParent = props => {
  return (
    <div className="GrandParent">
      This is grand Parent {props.appParam}
      <br />
      <Parent grandPram={"grand param"} />
    </div>
  );
};

export default GrandParent;
