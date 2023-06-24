import React from "react";

class Clock extends React.Component {
  
  state = {date: new Date(), locale: 'bn-BD'}
  
  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span>Hello <span>{this.props.children}</span> { date.toLocaleTimeString(locale)}</span>
        </h1>
        <button type="submit" onClick= {() => this.handleClick('en-US')}>Click here</button>
      </div>
    );
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick());
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick(locale) {
    this.setState({
      locale
    });
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }
}

export default Clock;
