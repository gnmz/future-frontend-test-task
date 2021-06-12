import React, { Component } from 'react'

export class TableBody extends Component {
    render() {
        const {data, selectingRow} = this.props
        return (
            <tbody>
            {data.map((item) => (
              <tr
                key={item.id + item.phone}
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
