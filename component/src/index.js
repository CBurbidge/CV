import React from 'react';
import ReactDOM from 'react-dom';
import CV from './index.nwb';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const RouterDiv = (
    <div>
        <Router>
            <div>
                <Route exact path="/" component={() => <CV divId={"cvDiv"} />} />
                <Route path="/print" component={() => <CV divId={"cvDiv"} print={true} /> } />
            </div>
        </Router>
        <div id="cvDiv" ></div>
    </div>
);


ReactDOM.render(RouterDiv, document.getElementById('root'));
registerServiceWorker();
