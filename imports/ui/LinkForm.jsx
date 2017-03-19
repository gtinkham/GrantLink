import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Links from '../collections/Links';



export default class LinkForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let original = this.state.value;
        if((original.length > 0)) {
            Meteor.call('links.insert', original);
        }

        this.setState({value: ''});
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="formItem">
                    <label>
                        <p>
                            Shorten Link Here:
                        </p>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div className="formItem">
                    <input type="submit" value="Enter Link" />
                </div>
            </form>
        );
    }
}


