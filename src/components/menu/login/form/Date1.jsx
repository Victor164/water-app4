import * as React from 'react';


class Date1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.date.toLocaleDateString()} / {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}
export default Date1;