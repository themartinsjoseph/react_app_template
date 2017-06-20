import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Hello name={"Joe"} />,
	document.getElementById('root')
	);
registerServiceWorker();
