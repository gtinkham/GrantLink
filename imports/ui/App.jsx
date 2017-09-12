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

    render () {
        return (
            <div>
                <Header />
                <LinkForm />
                <br/>
                <br/>
                <LinkList />
            </div>
        );
    };
}

export default App;