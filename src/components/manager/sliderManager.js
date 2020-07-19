import React from "react";
import Slides from "./sliderData";
class sliderManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteArr: this.props.quoteList,
    };
    this.randomF = this.randomF.bind(this);
  }
  randomF() {
    console.log(123);
  }
  componentDidMount() {}
  componentDidUpdate() {
    this.randomF();
  }

  render() {
    const quotes = this.props.quoteList.map((item) => (
      <Slides
        key={item.id}
        id={item.id}
        text={item.text}
        author={item.author}
        len={this.state.quoteArr.length}
        visible={item.visible}
        handler={this.props.handler}
        removeSlide={this.props.removeSlide}
      />
    ));
    return (
      <div className="manager__container">
        {quotes}
        <button className="button--add" onClick={this.props.addSlide}>
          Add Slide
        </button>
      </div>
    );
  }
}

export default sliderManager;
