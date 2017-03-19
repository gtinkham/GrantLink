import React, { Component } from 'react';
// import { createContainer } from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/Links';
import Link from './Link';


export default class LinkList extends Component{
    // constructor(props) {
    //     super(props);
    // }
    // componentWillMount() {
    //     console.log("List will mount call server to get links");
    // }
    render() {
        return (
            <div className="container-fluid">
               <div className="row linkHeader">
                   <div className="col-md-4 linkTitle linkColumn">Original Link</div>
                   <div className="col-md-4 linkTitle linkColumn">Shortened Link</div>
                   <div className="col-md-4 linkTitle linkColumn">Original Link</div>
               </div>
                <div className="row shortLinks">

                </div>
            </div>
        );
    };
}
// export default createContainer(() => {
//     Meteor.subscribe('links');
//
//     return {linkCriteria: Links.find({}).fetch()};
// }, LinkList);