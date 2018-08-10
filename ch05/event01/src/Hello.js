import React, { Component } from 'react';

class Hello extends Component {
    helloClick() {
        alert('Hello ' + this.props.name);
    }
    render() {
        return (
            <div>
                <button onClick={ this.helloClick.bind(this)}>OK</button>
            </div>
        );
    }
}

export default Hello;