import React, { Component } from 'react'

export class Tip extends Component {
    render() {
        const { tipTitle } = this.props;
        return (
            <p>
                Неверный формат. {tipTitle}
            </p>
        )
    }
}

export default Tip;