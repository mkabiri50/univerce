import React from 'react';
import  './Backdrop.scss';
const bachdrop = (props) => (
   props.show ? <div className = 'Backdrop' onClick = {props.clicked} > </div> : null
);
export default bachdrop;
