import React, { Component } from 'react'
import SortableHeader from '../SortableHeader/SortableHeader'

export class TableHead extends Component {
    render() {
        const {sortFieldHandler,sortField, sort } = this.props;
        return (
            <thead>
                <tr>
              <SortableHeader
                sortFieldHandler={sortFieldHandler}
                title="ID"
                sortFieldName="id"
                sortField={sortField}
                sort={sort}
              />
              <SortableHeader
                sortFieldHandler={sortFieldHandler}
                title="First name"
                sortFieldName="firstName"
                sortField={sortField}
                sort={sort}
              />
              <SortableHeader
                sortFieldHandler={sortFieldHandler}
                title="Last name"
                sortFieldName="lastName"
                sortField={sortField}
                sort={sort}
              />
              <SortableHeader
                sortFieldHandler={sortFieldHandler}
                title="E-mail"
                sortFieldName="email"
                sortField={sortField}
                sort={sort}
              />
              <SortableHeader
                sortFieldHandler={sortFieldHandler}
                title="Phone"
                sortFieldName="phone"
                sortField={sortField}
                sort={sort}
              />
            </tr>
            </thead>
        )
    }
}

export default TableHead
