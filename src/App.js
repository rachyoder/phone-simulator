import React from 'react';
import './App.css';
import Clock from './components/Clock/Clock';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faStopwatch)

class App extends React.Component {
	render() {
		return (
			<div className="App container">
				<div className="row">
					<Clock timer={false}/>
				</div>
				<hr />
				<div className="row mx-auto">
					<Clock isTimer={true}/>
				</div>
			</div>
		);
	}
}

export default App;
