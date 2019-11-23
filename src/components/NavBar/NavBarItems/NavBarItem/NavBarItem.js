import React  from 'react';
import './NavBarItem.scss';
import {NavLink} from 'react-router-dom';
const navigationItem =(props) =>(
   <li className='NavigationItem'> 
       <NavLink 
        to ={props.link} 
        exact
        activeClassName= 'active'>
      {props.children }</NavLink>
   </li>
);
export default navigationItem;  