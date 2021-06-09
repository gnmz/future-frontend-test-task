import React, { Component } from "react";

export class Table extends Component {
  render() {
    const { data, selectingRow } = this.props;
    return (
      <div className='table-wrapper'>
      <table className="table" style={{cursor:'pointer'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id + item.phone} onClick={()=>{selectingRow(item)}}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Table;
