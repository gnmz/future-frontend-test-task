import React, { Component } from 'react'

import './TableBody.css'

export class TableBody extends Component {
    render() {
        const {data, selectingRow} = this.props
        return (
            <tbody>
            {data.map((item) => (
              <tr
              className="acitve-table-item"
                key={item.id + Math.random()}
                onClick={() => {
                  selectingRow(item);
                }}
              >
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        )
    }
}

export default TableBody
