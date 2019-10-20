import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onDateChange(e.target.value);
    }

    render() {
        return (
            <div className="input-group">
                <input type={this.props.type} className="form-control" value={this.props.value} placeholder={this.props.placeholder} id="input_box" onChange={} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="submit_input">Submit</button>
                </div>
            </div>
        );
    }
}

export default Input;