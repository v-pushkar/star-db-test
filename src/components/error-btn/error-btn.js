import React, { Component } from "react";

class ErrorBtn extends Component {
  state = {
    renderError: false
  };
  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return (
      <button onClick={() => this.setState({ renderError: true })}>
        Set Error
      </button>
    );
  }
}

export default ErrorBtn;
