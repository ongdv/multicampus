import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Logger from './Logger';

import ListItem from './ListItem';

class List extends PureComponent {
    
    render() {
        let items = this.props.itemlist.map((item) => {
            return (<ListItem isLog="true" key={item.no} {...item} />)
        });
    
        return (
            <ul className="list-group">
                {items}
            </ul>
        )
    }
}

List.propTypes = {
    itemlist : PropTypes.arrayOf(PropTypes.object)
};

export default Logger(List);