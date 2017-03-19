import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from '../ui/App';
import createBrowserHistory from 'history/createBrowserHistory'

Meteor.startup(() => {
    const history = createBrowserHistory();
    ReactDOM.render(
        <Router history={history}>
            <App history={history}/>
        </Router>,
            document.querySelector('.render-target')
    );
});
