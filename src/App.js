import React from "react";
import SlideContainer from "./components/slider/slidesContainer";
import SliderManager from "./components/manager/sliderManager";
import Header from "./components/header";
import "./App.css";
import quoteList from "./components/slider/quoteList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quoteArr: [],
      data: null,
    };
    this.handler = this.handler.bind(this);
    this.addSlide = this.addSlide.bind(this);
    this.removeSlide = this.removeSlide.bind(this);
  }
  handler(e) {
    let newList = [...this.state.quoteArr];
    let slide = newList[e.target.id - 1];
    console.log(e.target.id - 1);
    if (e.target.name === "visible") {
      slide.visible = e.target.checked;
    } else if (e.target.name === "text") {
      slide.text = e.target.value;
    } else if (e.target.name === "author") {
      slide.author = e.target.value;
    }

    newList[e.target.id - 1] = slide;
    this.setState({ quoteArr: newList });
  }

  addSlide() {
    let newList = [...this.state.quoteArr];
    newList.push({
      id: this.state.quoteArr.length + 1,
      text: "",
      author: "",
      visible: true,
    });
    this.setState({ quoteArr: newList });
  }

  removeSlide(index) {
    let copyList = [...this.state.quoteArr];
    let newList = copyList.splice(index - 1, 1);
    for (let i = 0; i < copyList.length; i++) {
      copyList[i].id = i + 1;
    }
    this.setState({ quoteArr: copyList });
  }
  async componentDidMount() {
    const url = "https://programming-quotes-api.herokuapp.com/quotes/page/2";
    const response = await fetch(url);
    const data = await response.json();
    var newList = [];
    for (let i = 0; i < 5; i++) {
      newList[i] = {
        id: i + 1,
        text: data[i].en,
        author: data[i].author,
        visible: true,
      };
    }
    this.setState({ quoteArr: newList });
  }
  render() {
    return (
      <div className="container">
        <Header />
        <SlideContainer quoteList={this.state.quoteArr} />
        <SliderManager
          quoteList={this.state.quoteArr}
          handler={this.handler}
          addSlide={this.addSlide}
          removeSlide={this.removeSlide}
        />
      </div>
    );
  }
}

export default App;
