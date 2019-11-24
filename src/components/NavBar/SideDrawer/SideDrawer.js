import React from 'react';
import NavigationItems from '../NavBarItems/NavigationItems'

import  './SideDrawer.scss';
import Bachdrop from '../Backdrop/Backdrop';
const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer','Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer','Open']
    }

    return (
        <React.Fragment>
            <Bachdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}
            onClick={props.closed}>
    
                <nav >
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>

    )
}
export default sideDrawer;
