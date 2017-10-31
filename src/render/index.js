import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

document.body.style.backgroundImage = "url('/static/wild_oliva.png')";

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
