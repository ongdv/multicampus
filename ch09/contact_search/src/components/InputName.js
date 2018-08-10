import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputName extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <input id="name" type="text" className="form-control" name="name" 
                            placeholder="Type name and Enter! " value={this.props.name}
                            onChange={ (e) => {
                                this.props.changeName(e.target.value)
                            }}/>
                        <span className="btn btn-primary input-group-addon" onClick={this.props.searchContact}>검{'  '}색</span>
                    </div>
                </div>
            </div>
        );
    }
}

InputName.propTypes = {
    name: PropTypes.string.isRequired,
    searchContact: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired
};

export default InputName;