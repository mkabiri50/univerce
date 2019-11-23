import React from 'react';
import NavBarItemsR from '../NavBarItems/NavigationItems';

import './SideDrawer.scss';
import Bachdrop from './../../Ui/Backdrop/Backdrop';
const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }

    return (
        <React.Fragment>
            <Bachdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}
                onClick={props.closed}>
                <div className='Side-Logo'>
                 
                </div>
                <nav>
                    <NavBarItemsR />
                </nav>
            </div>
        </React.Fragment>

    )
}
export default sideDrawer;
