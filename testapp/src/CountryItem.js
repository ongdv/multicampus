import React, { Component } from 'react';
import styles from './styles'
class CountryItem extends Component {
    render() {
        return (
            <li key={this.props.no} style={styles.listItemStyle} className={ this.props.visited ? 'list-group-item active' : 'list-group-item'}>
                {this.props.country}
            </li>
        );
    }
}

export default CountryItem;