import React from "react";
import Slides from "./slideItem";
import * as scripts from "../scripts/slides";

class slidesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualSlide: 0,
      quoteArr: this.cleanList(this.props.quoteList),
    };
    this.navNext = this.navNext.bind(this);
    this.navPrev = this.navPrev.bind(this);
    this.goTo = this.goTo.bind(this);
  }
  cleanList(list) {
    let counter = 1;
    let newList = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].visible === true) {
        newList[counter - 1] = {
          id: counter,
          text: list[i].text,
          author: list[i].author,
          visible: list[i].visible,
        };
        counter++;
      }
    }

    return newList;
  }
  componentDidMount() {
    scripts.setSlides(this.state.actualSlide);
  }

  numberSlides() {
    let counter = 0;
    for (let i = 0; i < this.cleanList(this.props.quoteList).length; i++) {
      if (this.state.quoteArr[i].visible === true) {
        counter++;
      }
    }
    return counter;
  }
  navNext() {
    this.setState((prevState) => {
      if (
        prevState.actualSlide + 1 ===
        this.cleanList(this.props.quoteList).length
      ) {
        return { actualSlide: 0 };
      }
      return { actualSlide: prevState.actualSlide + 1 };
    });
  }

  navPrev() {
    this.setState((prevState) => {
      if (prevState.actualSlide === 0) {
        return { actualSlide: this.cleanList(this.props.quoteList).length - 1 };
      }
      return { actualSlide: prevState.actualSlide - 1 };
    });
  }

  goTo(index) {
    let a = this.state.actualSlide;
    let b = index - 1;
    var leftValue;
    var rightValue;
    if (a > b) {
      leftValue = b - a;
      rightValue = a - (b - this.state.quoteArr.length);
      if (leftValue > rightValue) {
        for (let i = 1; i <= leftValue; i++) {
          this.navNext();
        }
      } else {
        for (let i = 1; i <= rightValue; i++) {
          this.navPrev();
        }
      }
    } else {
      leftValue = b - (a - this.state.quoteArr.length);
      rightValue = a - b;
      if (leftValue > rightValue) {
        for (let i = 1; i <= leftValue; i++) {
          this.navNext();
        }
      } else {
        for (let i = 1; i <= rightValue; i++) {
          this.navPrev();
        }
      }
    }
  }
  componentDidUpdate() {
    scripts.setSlides(this.state.actualSlide);
    console.log(this.cleanList(this.props.quoteList));
  }
  render() {
    const quotes = this.cleanList(this.props.quoteList).map((item) => (
      <Slides
        key={item.id}
        id={item.id}
        text={item.text}
        author={item.author}
        len={this.cleanList(this.props.quoteList)}
        visible={item.visible}
      />
    ));
    const circles = this.cleanList(this.props.quoteList).map((item) => (
      <li
        className="nav__circle"
        key={item.id}
        onClick={(element) => this.goTo(item.id)}
      >
        <i className="fa fa-circle-o"></i>
      </li>
    ));
    const buttonPrev = (
      <div className="button--prev" onClick={this.navPrev}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
    );
    const buttonNext = (
      <div className="button--next" onClick={this.navNext}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    );
    return (
      <div className="slider__container">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div className="slide__group">{quotes}</div>
        <ul className="slide__navigation">{circles}</ul>
        <div className="slide__buttons">
          {buttonPrev}
          {buttonNext}
        </div>
      </div>
    );
  }
}

export default slidesContainer;
