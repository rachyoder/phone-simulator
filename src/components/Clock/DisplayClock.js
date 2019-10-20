import React from 'react';

class DisplayClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStandardTime: false,
            date: new Date()
        };
        this.switchTime = this.switchTime.bind(this);
    }

    switchTime() {
        this.setState(state => ({
            isStandardTime: !state.isStandardTime
        }));
    }

    render() {
        return (
            <div className="col-12 text-center mx-auto" id="clock">
                <h1 className="display-4">
                    {this.props.currentDate.toLocaleTimeString(
                        this.state.isStandardTime ? "it-IT" : "en-US"
                    )}
                </h1>
                <h4 className="text-muted">
                    {this.props.currentDate.toLocaleDateString()}
                </h4>
                <div className="custom-control custom-switch">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="toggleTime"
                        onClick={this.switchTime} />
                    <label
                        className="custom-control-label"
                        htmlFor="toggleTime">
                        {this.state.isStandardTime ? '12 Hour Time' : '24 Hour Time'}
                    </label>
                </div>
            </div>
        );
    }
}

export default DisplayClock;