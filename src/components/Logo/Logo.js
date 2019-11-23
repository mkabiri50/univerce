import React from 'react';
import univerceIcon from '../../assets/logos/Universe250.png';
import './Logo.scss';
const logo = (props) =>(
    <div className ='Logo'>
        <img src ={univerceIcon} alt = 'MyBurger' />
    </div>
)
export default logo