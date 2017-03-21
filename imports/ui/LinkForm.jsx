import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Links from '../collections/Links';
import ShortenedLink from './ShortenedLink';



export default class LinkForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value, defaultShort: event.target.defaultShort});
    }

    handleSubmit(event) {
        event.preventDefault();
        let original = this.state.value;
        if((original.length > 0)) {
            Meteor.call('links.insert', original,
                (err, linkId) => {
                    this.setState({defaultShort:linkId});
                }
            );

        }

        this.setState({value: ''});
    }

    setShortUrl(linkId) {
        this.setState({value: linkId});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="col-xs-6">
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
                        </div>
                        <div className="col-xs-6 targetDiv">
                            <div>
                                <h3>This is the shortened link</h3>
                                <ShortenedLink defaultShort={this.state.defaultShort}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


