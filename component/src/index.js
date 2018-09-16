import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CVWrapper from './index.nwb.wrapper';

const RouterDiv = (
    <div>
        <Router>
            <div>
                <Route exact path={`/`} component={CVWrapper} />
                <Route exact path={`/CV`} component={CVWrapper} />
            </div>
        </Router>
        <div id="cvDiv" ></div>
    </div>
);


ReactDOM.render(RouterDiv, document.getElementById('root'));
registerServiceWorker();
