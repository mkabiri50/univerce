
import React from 'react';
import './ToolBar.scss';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavBarItems from '../NavBarItems/NavigationItems';
const toolbar = (props) => (
    <header className='Toolbar'>
      <DrawerToggle clicked={props.drawerToggleclicked} />
        <div className ='My-Logo'> 
        <Logo />
        </div>
        <nav className='DesktopOnly'>
            <NavBarItems />
        </nav>
    </header>
);
export default toolbar;