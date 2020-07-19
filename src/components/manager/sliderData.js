import React from "react";

function sliderData(props) {
  return (
    <div className="slide__data">
      <div className="data__quote">
        <textarea
          type="textarea"
          name="text"
          value={props.text}
          id={props.id}
          onChange={(e) => props.handler(e)}
        ></textarea>
      </div>
      <div className="data__properties">
        <div className="data__author">
          <input
            type="text"
            name="author"
            value={props.author}
            id={props.id}
            onChange={(e) => props.handler(e)}
          ></input>
        </div>
        <div className="data__visible">
          <input
            type="checkbox"
            name="visible"
            checked={props.visible}
            id={props.id}
            onChange={(e) => props.handler(e)}
          ></input>
          <h5>Visible?</h5>
        </div>
        <a
          className="button--remove"
          id={props.id}
          onClick={() => props.removeSlide(props.id)}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default sliderData;
