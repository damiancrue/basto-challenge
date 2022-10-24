import React from 'react';
import logo from '../img/logo2.png'
import Messages from './Messages';
import Menu from './Menu'

/*
The Header is built for aesthetic purposes this time but
it has been diagrammed in its internal components to be functional if necessary.
*/

export default function Header(){


return (
    <div className='header-main'>
        <div className='header-top'>
            <div className='header-brand'>
                <img className='logo' src={logo} alt='the logo isn`t avialable'/>
                <p className='brand'>Basto</p>
            </div>
            <div className='header-menu'>
                <Messages />
            </div>
        </div>
        <div className='header-menu'>
            <Menu/>
        </div>
    </div>
)

}
