import React from 'react';
import './App.css';
import DisplayClock from './components/DisplayClock';
import Input from './components/Input'

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
				<DisplayClock />

				<Input type={"number"} />
			</div>
		);
	}
}

export default App;
