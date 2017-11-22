import React from 'react';
import PageLogo from '../Logo/PageLogo.js';
import SearchButton from '../Button/SearchButton.js';

export default class HeaderMobile extends React.Component {
    render() {
        return (
            <div className='header-menu menu-mobi menu-top-fix'>
                <nav className='nav-menu-top'>
                    <PageLogo />
                </nav>
                <SearchButton onMobile={true} />
            </div>
        )
    }
}

