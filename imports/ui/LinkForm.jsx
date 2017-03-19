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
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="formItem">
                                <h3>Shorten Link</h3>
                            </div>
                            <div className="formItem">
                                <label>
                                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                                </label>
                            </div>
                            <div className="formItem">
                                <input type="submit" value="Enter Link" />
                            </div>
                        </form>
                    </div>
                    <div className="col-xs-6 targetDiv">
                            <h3>This is the shortened link</h3>
                            <div id="shortenedTarget">
                                Please Enter URL to shorten
                            </div>
                    </div>
                </div>

            </div>

        );
    }
}


