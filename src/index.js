import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root'));

//code flow begins here, where Matrix component is rendered.

//The Matrix component is the only thing rendered, and is passed a values prop.
//If you run npm install && npm start, you should see this data - it is the symbol
//from Learn.co, pixelated! However, each "pixel" is actually a div. You can inspect
//each one in the browser to confirm!
