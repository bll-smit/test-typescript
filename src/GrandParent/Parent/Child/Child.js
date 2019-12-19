import React from "react";

const Child = props => {
  return (
    <div className="Child">
      This is Child
      <br />
      Props from Parent:{props.parentParam}
    </div>
  );
};

export default Child;
