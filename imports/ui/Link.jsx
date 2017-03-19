import React, {Component} from 'react';

 const Link = ({linkProps}) => {
   const {original, shortened, timesClicked} = linkProps;

       return (
           <li className="link">
               <div className="col-xs-4 original">{ original }</div>
               <div className="col-xs-4 shortened">{ shortened }</div>
               <div className="col-xs-4 timesClicked">{ timesClicked }</div>
           </li>
       );
};

 export default Link;