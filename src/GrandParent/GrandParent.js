import React from "react";
import Parent from "./Parent/Parent";
const GrandParent = () => {
  return (
    <div className="GrandParent">
      This is grand Parent
      <br />
      <Parent grandPram={"grand param"} />
    </div>
  );
};

export default GrandParent;
