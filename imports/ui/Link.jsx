import React, {Component} from 'react';

 const Link = ({linkCriteria}) => {
   const {original, shortened, timesClicked} = linkCriteria;

       return (
           <tr>
               <td>{original}</td>
               <td>{shortened}</td>
               <td>{timesClicked}</td>
               <hr></hr>
           </tr>
       );
};

 export default Link;