/* eslint-disable react/prop-types */
import React from "react";

class Clock extends React.Component {

  state = {date: new Date()}

  render() {
    return (
      <div>
        <h1 className="heading">
          <span>Hello <span>{this.props.children}</span> { this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1>
      </div>
    );
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick());
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }
}


export default Clock;
