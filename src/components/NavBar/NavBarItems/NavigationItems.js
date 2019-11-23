import React from 'react';
import './NavBarItems.scss';
import NavigationItem from './NavBarItem/NavBarItem';


const navigationItems = () => (

    <ul className='NavigationItems' >
        <NavigationItem link='/lists' > Lists</NavigationItem>
        <NavigationItem link='/adduser' >  Add User </NavigationItem>
     
    </ul>





);
export default navigationItems;
