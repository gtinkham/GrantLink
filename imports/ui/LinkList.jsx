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
        let linkCriteria = this.props.linkCriteria;
        return linkCriteria.map((link) => {
                let linkProps = {
                    shortened:link._id,
                    original:link.original,
                    timesClicked:link.timesClicked
                };
                    return (
                        <Link key={link._id}  linkProps={linkProps}/>
                    );
        });
    };

    handleClick() {
        console.log("this is a button");
    };

    render() {
        return (
        <ul className="shortLinks">
            <li className="linkHeader">
                <div className="col-xs-4">Original Link</div>
                <div className="col-xs-4">Shortened Link</div>
                <div className="col-xs-4">Times Clicked</div>
            </li>
            {this.renderLinks()}
            <button onClick={(e) => this.handleClick(e)}
                        className="btn btn-default refreshButton">
                Load More
            </button>
        </ul>
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