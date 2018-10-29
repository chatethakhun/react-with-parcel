import React, { lazy } from "react";
// import Example from "./count";
// const Example = lazy(() => import("./count.js"));
export default class App extends React.Component {
  state = {
    count: 1
  };

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    // console.log(Example);
    return (
      <div>
        app component state count {this.state.count}{" "}
        <button onClick={this.increase}>+ 1</button>
        <button onClick={this.decrease}>- 1</button>
        {/* <Example /> */}
      </div>
    );
  }
}
