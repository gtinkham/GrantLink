import React from 'react';

 const Link = ({linkProps}) => {
   const {url, randomLink, clicks} = linkProps;

       return (
           <tr className="row link">
               <td className="col-xs-4 original">{ url }</td>
               <td className="col-xs-4 shortened"><a href={ "localhost:3000/"+randomLink } > localhost:3000/{ randomLink } </a></td>
               <td className="col-xs-4 timesClicked">{ clicks }</td>
           </tr>
       );
};

 export default Link;