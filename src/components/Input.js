import React from 'react';

class Input extends React.Component {


    render() {
        return (
            <div className="input-group">
                <input type={this.props.type} className="form-control" placeholder="" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="submit_input">Submit</button>
                </div>
            </div>
        );
    }
}

export default Input;