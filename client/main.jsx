import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../imports/ui/Header';
import LinkForm from '../imports/ui/LinkForm';
import LinkList from '../imports/ui/LinkList';

export const App = () => {

    return (
        <div>
            <Header />
            <LinkForm />
            <LinkList />
        </div>

    );
};


Meteor.startup( () => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});

