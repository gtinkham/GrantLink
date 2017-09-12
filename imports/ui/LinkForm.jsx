import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ShortenedLink from './ShortenedLink';



export default class LinkForm extends Component {

    constructor(props) {
        super(props);

        this.state = {error :''};
    }

    handleSubmit(event) {
        event.preventDefault();
        Meteor.call('links.insert', this.refs.shortLink.value, (error) => {
            if(error) {
                this.setState({ error: " ENTER A VALID URL"});
            }
            else {
                this.setState({ error: ""});
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="text-danger">{ this.state.error }</div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="col-xs-6">
                            <div className="formItem">
                                <h3>Shorten Link</h3>
                            </div>
                            <div className="formItem">
                                <label>
                                    <input ref="shortLink" type="text" />
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


