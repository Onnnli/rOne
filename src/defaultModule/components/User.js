import React, { Component } from 'react'


export default class User extends Component{
    render() {
        return (
            <span>It`s user {this.props.name}</span>
        )
    }
}