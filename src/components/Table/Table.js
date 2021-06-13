import React, { Component } from "react";
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";

import './Table.css'

export class Table extends Component {
  state = {
    sort: "asc",
    sortField: "id",
    data: this.props.sortData,
    
  };

  componentDidMount() {
    const sortHandler = this.props.sortHandler;
    if (this.state.sortField === "id") {
      let sortableData = this.state.data.sort((a, b) => a.id - b.id);
      sortHandler(sortableData);
    }
  }

  sortByNumber = (sortField, arr = this.state.data) => {
    if (this.state.sort === "asc") {
      let sortbleData = arr.sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return 1;
        } else {
          return -1;
        }
      });
      this.setState({ data: sortbleData, sort: "desc", sortField: sortField });
    }
    if (this.state.sort === "desc") {
      let sortbleData = arr.sort((a, b) => {
        if (a[sortField] > b[sortField]) {
          return 1;
        } else {
          return -1;
        }
      });
      this.setState({ data: sortbleData, sort: "asc", sortField: sortField });
    }
    const sortHandler = this.props.sortHandler;
    sortHandler(this.state.data);
  };

  sortByString = (sortField, arr = this.state.data) => {
    if (this.state.sort === "asc") {
      let sortbleData = arr.sort((a, b) => {
        if (a[sortField].toLowerCase() < b[sortField].toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
      this.setState({ data: sortbleData, sort: "desc", sortField: sortField });
    }
    if (this.state.sort === "desc") {
      let sortbleData = arr.sort((a, b) => {
        if (a[sortField].toLowerCase() > b[sortField].toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
      this.setState({ data: sortbleData, sort: "asc", sortField: sortField });
    }
    const sortHandler = this.props.sortHandler;
    sortHandler(this.state.data);
  };

  sortFieldHandler = (sortField) => {
    if (sortField === "id") {
      this.sortByNumber(sortField);
    } else {
      this.sortByString(sortField);
    }
  };

  render() {
    const { selectingRow, data } = this.props;
    const { sortField, sort } = this.state;
    return (
      <div className="table-wrapper">
        <table className="table">
          <TableHead
            sortField={sortField}
            sort={sort}
            sortFieldHandler={this.sortFieldHandler}
          />
          <TableBody data={data} selectingRow={selectingRow} />
        </table>
      </div>
    );
  }
}

export default Table;
