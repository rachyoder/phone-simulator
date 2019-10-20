import React from 'react';
import './Clock.css';
import DisplayClock from './DisplayClock';
import Timer from './Timer';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (

            this.props.isTimer ? (<Timer currentTime={this.state.date} />)
                : (<DisplayClock currentDate={this.state.date} />)

        );
    }
}

export default Clock;