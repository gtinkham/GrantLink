import React, { Component } from 'react';


const ShortenedLink = (props) => {
        const defaultShort = props.defaultShort;


        return(
            <div>
                <h3>This is the shortened link</h3>
                <div className="shortenedTarget" value={defaultShort}>
                </div>
            </div>
        );

};

export default ShortenedLink;