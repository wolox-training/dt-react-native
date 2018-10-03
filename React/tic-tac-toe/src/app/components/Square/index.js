import React, { Component } from "react";
import square from "./square.scss";

function Square(props) {
  return (
    <button className={square.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
