import React from 'react';
import ReactDOM from 'react-dom';
import CV from './index_umd';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div id={"cvDiv"}><CV divId={"cvDiv"} /></div>, document.getElementById('root'));
registerServiceWorker();
