import React from "react";

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date(), locale: 'bn-BD'}
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span>Hello <span>{this.props.children}</span> { date.toLocaleTimeString(locale)}</span>
        </h1>
        <button type="submit" onClick={this.handleClick}>Click here</button>
      </div>
    );
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick());
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      locale: 'en-US'
    });
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }
}

export default Clock;
