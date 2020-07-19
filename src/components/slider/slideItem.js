import React from "react";

function slideItem(props) {
  var slide;
  if (props.visible === true) {
    slide = (
      <div className="carousel__slide">
        <div className="slide__quote">
          <h3>{props.text}</h3>
        </div>
        <div className="slide__author">
          <h4> - {props.author} - </h4>
        </div>
      </div>
    );
    return slide;
  }
  return null;
}

export default slideItem;
