import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test"
  };

  componentDidMount() {
    console.log("Component did mount");
  }

  // componentWillMount() {
  //     console.log("Component will mount");
  // }

  // componentDidUpdate() {
  //     console.log("Component did update");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //     console.log('Component will receive props');
  // }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
