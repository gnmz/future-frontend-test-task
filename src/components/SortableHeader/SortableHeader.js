import React, { Component } from 'react'

import './SortableHeader.css'

export class SortableHeader extends Component {
    render() {
        const { sortFieldHandler, title, sortField, sort, sortFieldName} = this.props;
        return (
            <th onClick={()=>{sortFieldHandler(sortFieldName)}} >
                {title}{' '}
                {sortFieldName === sortField ? sort === 'asc'? <span>▲</span> : <span>▼</span> : null}
            </th>
        )
    }
}

export default SortableHeader
