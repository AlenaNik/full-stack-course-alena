import React from 'react';

const Statistic = (props) => {
       return (
           <table>
               <tbody>
               <tr>
               <td> {props.statistic} {props.text}</td>
               </tr>
               </tbody>
           </table>
       )
}

export default Statistic;
