import React from 'react';
import Input from '../Input';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userTime: new Date('December 31, 2019'),
        }
    }

    convertTime() {
        this.timeDiff = (this.state.userTime.getTime() - this.props.currentTime.getTime());

        this.days = Math.floor(this.timeDiff / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(this.timeDiff / (1000 * 60 * 60) % 24);
        this.minutes = Math.floor(this.timeDiff / (1000 * 60) % 60);
        this.seconds = Math.floor((this.timeDiff / 1000) % 60);

        return (
            ((this.days < 10) ? ("0" + this.days) : (this.days)) + ":" +
            ((this.hours < 10) ? ("0" + this.hours) : (this.hours)) + ":" +
            ((this.minutes < 10) ? ("0" + this.minutes) : (this.minutes)) + ":" +
            ((this.seconds < 10) ? ("0" + this.seconds) : (this.seconds))
        );
    }

    setUserTime() {
        this.setState({})
    }

    render() {

        return (
            <div className="col-12 text-center" id="clock">
                <h2 className="mb-3">Countdown Timer</h2>
                <Input
                    type="datetime-local"
                    value="2020-01-01T00:00" />
                     
                <h3 className="my-3">{this.convertTime()}</h3>
            </div>
        );
    }
}

export default Timer;