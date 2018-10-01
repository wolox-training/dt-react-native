import React, { Component } from "react";
import square from "./square.scss";

class Square extends Component {
  render() {
    return <button className={square.square}> {this.props.value}</button>;
  }
}
export default Square;
