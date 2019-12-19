import React, { Component } from "react";

/**
 * @extends {Component<import("../../../types/Child.type").ChildProps, {}}>}
 */
class Child extends Component {
  render() {
    return (
      <div className="Child">
        This is Child
        <br />
        Props from Parent:{this.props.parentParam}
      </div>
    );
  }
}

// const Child = (props: ChildProps) => {
//   return (
//     <div className="Child">
//       This is Child
//       <br />
//       Props from Parent:{props.parentParam}
//     </div>
//   );
// };

export default Child;
