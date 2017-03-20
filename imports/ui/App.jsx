import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Header from './Header';
import LinkForm from './LinkForm';
import LinkList from './LinkList';
import Links from '../collections/Links';

class App extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let currentLocation = this.props.history.location;
        if(currentLocation.pathname !== "/") {
            let potentialRoute = currentLocation.pathname.replace("/", "");
            Meteor.call('links.getLink', potentialRoute,
                (err, link) => {
                    if(!err) {
                        Meteor.call('links.wasClicked', link.shortened, link.timesClicked);
                        //router switch current directory
                        if(link.original.includes("https")) {
                            window.location.replace(link.original);
                        }
                    }
                }
            );
        }
    }

    render () {
        return (
            <div>
                <Header />
                <LinkForm />
                <LinkList />
            </div>
        );
    };
}

export default App;