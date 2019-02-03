import React, { Component } from 'react'

export default class Vodka extends Component {
    render() {
        return (
            <div>
                <span>Vodka: {this.props.match.params.name}</span>
            </div>
        )
    }
}
