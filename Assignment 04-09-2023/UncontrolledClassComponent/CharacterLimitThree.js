import React from "react";

export default class CharacterLimitThree extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
  }

  check = (e) => {
    if (this.text.current.value.length > 300) {
      this.text.current.disabled = true;
    }
    e.preventDefault();
  };
  render() {
    return (
      <div id="container" className="df-col">
        <h2>Character Limit is 300</h2>
        <div className="card df-col">
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter a Message"
            ref={this.text}
            onInput={this.check}
          ></textarea>
        </div>
      </div>
    );
  }
}
