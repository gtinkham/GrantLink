import React, { Component } from 'react';


const ShortenedLink = (props) => {
        const defaultShort = props.defaultShort;
        let label = "";
        if(props.defaultShort != undefined) {
                label = props.defaultShort;
        }

        return(
            <div>
                <div className="shortenedTarget" >
                    {label}
                </div>
            </div>
        );

};

export default ShortenedLink;