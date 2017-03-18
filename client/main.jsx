import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../imports/ui/Header';
import LinkForm from '../imports/ui/LinkForm';

export const App = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <Header />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <LinkForm id="linkForm"/>
                </div>
            </div>


            {/*<LinkList />*/}
        </div>
    );
};


Meteor.startup( () => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});

