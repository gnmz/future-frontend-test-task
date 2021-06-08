import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import "./App.css";
import Table from "./components/Table";

export class App extends Component {
  state = {
    data: [],
    pageSize: 50,
    currentPage: 0
  };

  componentDidMount() {
    
  }

  fetchSmallData = () => {
    let url = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  };

  fetchBigData = () => {
    let url = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  };

  render() {
    const { data, pageSize } = this.state;
    return (
      <div className="app">
        <Table data={data} />
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={data.length / pageSize}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
        />
      </div>
    );
  }
}

export default App;
