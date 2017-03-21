import React, { Component } from 'react';


const ShortenedLink = (props) => {
        const defaultShort = props.defaultShort;
        let label = "";
        if(defaultShort != undefined) {
                label = "localhost:3000/" + defaultShort;
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