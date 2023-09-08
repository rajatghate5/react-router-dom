import React from "react";

export default class CharacterLimitOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dis: false };
  }

  handle = (e) => {
    var a = e.target.value;
    if (a.length > 300) {
      this.setState({ dis: true });
    }
  };

  render() {
    return (
      <div id="container" className="df-col">
        <h2>Character Limit is 300</h2>
        <div className="card">
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter a Message"
            onInput={(e) => this.handle(e)}
            disabled={this.state.dis}
          ></textarea>
        </div>
      </div>
    );
  }
}
