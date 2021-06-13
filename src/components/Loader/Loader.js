import React, { Component } from 'react'
import './Loader.css'

export class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            
        )
    }
}

export default Loader
