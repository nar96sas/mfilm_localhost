import React from 'react';
import DrawerMenu from './DrawerMenu.js';

export default class Drawer extends React.Component {
    openDrawer(){
        $('.drawer').drawer('open');        
    }

    render() {
        return (
            <header className='a-headers' role='banner'>
                <button type='button' className='drawer-toggle drawer-hamburger'>
                    <span className='sr-only'> toggle navigation </span>
                    <span className='drawer-hamburger-icon' onClick={this.openDrawer.bind(this)}> </span>
                </button>
                <nav className='drawer-nav' role='navigation'>
                    <DrawerMenu />
                </nav>
            </header>
        )
    }
}

