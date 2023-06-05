/* eslint-disable react/prop-types */
import React from "react";

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">
          <span>Hello <span>{this.props.children}</span> {new Date().toLocaleTimeString(this.props.locale)}</span>
        </h1>
      </div>
    );
  }
}


export default Clock;
