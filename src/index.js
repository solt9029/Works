import React from 'react';
import ReactDOM from 'react-dom';
import Work from './components/Work/Work';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import editmaster from './images/editmaster.jpg';

ReactDOM.render(<Work image={editmaster} desc="太鼓の創作譜面を支援するWebアプリ。" date="2017-01" />, document.getElementById('root'));
registerServiceWorker();
