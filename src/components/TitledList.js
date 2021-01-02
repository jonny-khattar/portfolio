import React, { Component } from 'react'

export class TitledList extends Component {

    render() {
        const property = this.props.property;
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul>
                    {this.props.list.map(item => {
                        return (
                            <li>{item[property]}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}