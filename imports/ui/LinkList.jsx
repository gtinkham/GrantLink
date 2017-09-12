import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/Links';
import Link from './Link';


class LinkList extends Component{
    constructor(props) {
        super(props);
    }

    renderLinks() {
        const linkCriteria = this.props.linkCriteria;
        return linkCriteria.map((link) => {
            return (
                <Link key={link.randomLink}  linkProps={link}/>
            );
        });
    };

    render() {
        return (
        <table className="container">
            <thead className="shortLinks">
            <tr className="row">
                <th className="col-xs-4">Original Link</th>
                <th className="col-xs-4">Shortened Link</th>
                <th className="col-xs-4">Times Clicked</th>
            </tr>
            </thead>
            <tbody>
                {this.renderLinks()}
            </tbody>
        </table>

        );
    };
}

LinkList.propTypes = {
    linkCriteria: PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('links');
    return {linkCriteria: Links.find({}).fetch()};
}, LinkList);