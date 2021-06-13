import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import "./App.css";
import ActionModeSelector from "./components/ActionModeSelector";
import AddRow from "./components/AddRow";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import TableSearch from "./components/TableSearch";
import ViewRowCard from "./components/ViewRowCard";

export class App extends Component {
  state = {
    data: [],
    isClicked: false,
    isLoading: true,
    pageSize: 50,
    currentPage: 0,
    selectedRow: null,
    searchbleData: [],
    loadingError: "",
    searchError: ''
  };

  componentDidMount() {}

  fetchSmallData = () => {
    this.checkAction();

    let url = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

    let r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onload = () => {
      if (r.readyState !== 4 || r.status !== 200) {
        this.setState({
          isLoading: false,
          isClicked: false,
          loadingError: "Невозможно получить данные с сервера",
        });
      } else {
        let result = JSON.parse(r.response);
        this.setState({ isLoading: false, data: result });
      }
    };
    r.send();
  };

  fetchBigData = () => {
    this.checkAction();

    let url = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

    let r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onload = () => {
      if (r.readyState !== 4 || r.status !== 200) {
        this.setState({
          isLoading: false,
          isClicked: false,
          loadingError: "Невозможно получить данные с сервера",
        });
      } else {
        let result = JSON.parse(r.response);
        this.setState({ isLoading: false, data: result });
      }
    };
    r.send();
  };

  checkAction = () => {
    if (this.state.data) {
      this.setState({ isLoading: true });
    }
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
    }
  };

  selectingRow = (item) => {
    this.setState({ selectedRow: item });
  };

  onSearch = (item) => {
    const { data } = this.state;
    if (item === "") {
      this.setState({ searchbleData: [], searchError: '' });
    } else {
      const searchbleData = data.filter((user) => {
        return (
          user["firstName"].toLowerCase().includes(item.toLowerCase()) ||
          user["lastName"].toLowerCase().includes(item.toLowerCase()) ||
          user["email"].toLowerCase().includes(item.toLowerCase()) ||
          user["phone"].toLowerCase().includes(item.toLowerCase())
        );
      });
      if(searchbleData.length === 0){
        this.setState({searchbleData: searchbleData, searchError: 'Пользователя с такими данными нет'})
        
      }else
      {
        this.setState({ searchbleData: searchbleData, searchError: '' });
      }
      
    }
  };

  addNewRow = (item) => {
    const data = this.state.data;
    data.unshift(item);
    this.setState({ data: data });
  };

  handlePageClick = (item) => {
    this.setState({ currentPage: item });
  };

  pageChangeHandler = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  sortHandler = (data) => {
    this.setState({ data: data });
  };

  render() {
    const {
      data,
      pageSize,
      isLoading,
      selectedRow,
      searchbleData,
      currentPage,
      loadingError,
    } = this.state;

    let tableData =
      searchbleData.length <= 0
        ? data.slice(pageSize * currentPage, pageSize * currentPage + pageSize)
        : searchbleData;

    return (
      <div className="app">
        <ActionModeSelector
          fetchSmallData={this.fetchSmallData}
          fetchBigData={this.fetchBigData}
        />
        {isLoading ? (
          this.state.isClicked ? (
            <Loader />
          ) : null
        ) : loadingError ? (
          <div style={{ textAlign: "center" }}>{loadingError}</div>
        ) : (
          <>
            <TableSearch onSearch={this.onSearch} searchError={this.state.searchError} />
            <AddRow
              addNewRow={this.addNewRow}
              isAddNewArrow={this.state.isAddNewArrow}
            />
            <Table
              data={tableData}
              selectingRow={this.selectingRow}
              sortData={data}
              sortHandler={this.sortHandler}
            />
            {data.length < pageSize ? null : (
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={data.length / pageSize}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.pageChangeHandler}
                forcePage={currentPage}
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
              />
            )}

            {selectedRow ? <ViewRowCard selectedRow={selectedRow} /> : null}
          </>
        )}
      </div>
    );
  }
}

export default App;
