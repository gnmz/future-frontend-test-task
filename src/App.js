import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {

  }

  fetchSmallData = () => {
    let url = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({data: data}));
  };

  fetchBigData = () => {
    let url = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({data: data}))
  }

  render() {
  
    return <div className="app"></div>;
  }
}

export default App;
