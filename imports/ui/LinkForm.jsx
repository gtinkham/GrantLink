import React, { Component } from 'react';
import Links from '../collections/Links';



export default class LinkForm extends Component {

    render() {
        return(
            <form className="new-task" onSubmit={console.log("GRant is awesome")} >
                <input type="text" ref="textInput" placeholder="Type to add new tasks"/>
            </form>
        );
    };



}


