import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title">{props.topic} - Score: {props.score} | topScore: {props.total}</h1>;
}

export default Title;
