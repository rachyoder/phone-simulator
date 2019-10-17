import React from 'react';
import Clock from './Clock/Clock';

class DisplayClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStandardTime: false};
        this.switchTime = this.switchTime.bind(this);
    }

    switchTime() {
        this.setState(state => ({
            isStandardTime: !state.isStandardTime
        }));
    }

    render() {
        return (
            <div>
                <Clock StandardTime={this.state.isStandardTime}/>
                <div className="custom-control custom-switch text-center">
                    <input type="checkbox" className="custom-control-input" id="toggleTime" onClick={this.switchTime} />
                    <label className="custom-control-label" htmlFor="toggleTime">{this.state.isStandardTime ? '12 Hour Time' : '24 Hour Time'}</label>
                </div>

            </div>
        );
    }
}

export default DisplayClock;