import React, {Component} from 'react';

 const Link = ({linkProps}) => {
   const {original, shortened, timesClicked} = linkProps;

       return (
           <li className="link">
               <div className="col-md-4 ">{ original }</div>
               <div className="col-md-4 ">{ shortened }</div>
               <div className="col-md-4 ">{ timesClicked }</div>
           </li>
       );
};

 export default Link;