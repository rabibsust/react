/* eslint-disable react/prop-types */
import React from "react";

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">
          <span>Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
        </h1>
      </div>
    );
  }
}


export default Clock;
