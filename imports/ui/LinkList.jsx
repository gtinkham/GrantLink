import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/Links';
import Link from './Link';


class LinkList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("List will mount call server to get links");
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Original Link</th>
                        <th>Shortened Link</th>
                        <th>Number of Times Clicked</th>
                    </tr>
                    <tr>
                        <th>Grant</th>
                        <th>Is</th>
                        <th>Awesome</th>
                    </tr>
                    <tr>
                        <th>Grant</th>
                        <th>Is</th>
                        <th>Awesome</th>
                    </tr>
                    <tr>
                        <th>Grant</th>
                        <th>Is</th>
                        <th>Awesome</th>
                    </tr>
                    <tr>
                        <th>Grant</th>
                        <th>Is</th>
                        <th>Awesome</th>
                    </tr>
                    {/*{this.props.linkCriteria.map(link =>*/}
                        {/*<Link key={link.shortened} linkCriteria={link}/>*/}
                    {/*)}*/}
                </table>
            </div>
        );
    };


}
export default createContainer(() => {
    Meteor.subscribe('links');

    return {linkCriteria: Links.find({}).fetch()};
}, LinkList);