import React from 'react';
import './Clock.css';

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
            <div>
                <h1 className="text-center mt-4 mb-0" id="clock">
                    {this.state.date.toLocaleTimeString(
                        this.props.StandardTime ? 'it-IT' : 'en-US'
                    )}
                </h1>

                <h4 className="text-center text-muted" id="clock">{this.state.date.toLocaleDateString()}
                </h4>
            </div>
        );
    }
}

export default Clock;