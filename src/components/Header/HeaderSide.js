import React from 'react';
import { Link } from 'react-router-dom';
import SearchButton from '../Button/SearchButton.js';
import { scrollToTop, showModal } from '../../static/js/utils.js';

export default class HeaderSide extends React.Component {
    render() {
        const menu = this.props.menu.map((item, index) => {
            const disabledLink = item.title == 'Tuyển tập' ? 'disabled-link' : '';
            const activeNav = item.title == this.props.currentTab ? 'active-nav' : '';

            return (
                <li key={index} className={item.submenu.length > 0 ? 'mega-menu' : ''}>
                    <Link
                        onClick={scrollToTop}
                        to={item.src + (item.title == 'Phim lẻ' || item.title == 'Phim bộ' ? '/all' : '')}
                        className={disabledLink + ' ' + activeNav}>
                        {item.title}
                    </Link>
                    {
                        item.submenu.length > 0 && // have submenu
                        <ul className={(item.title == 'Tuyển tập' ? 'one-column' : '')}>
                            {
                                item.submenu.map((subitem, index) =>
                                    <li key={index} >
                                        <Link to={item.src + '/' + subitem} onClick={scrollToTop}> {subitem} </Link>
                                    </li>
                                )
                            }
                        </ul>
                    }
                </li>
            )
        });

        if (this.props.side == 'left')
            return (
                <ul className={'menu-' + this.props.side}>
                    <li>
                        <Link to='/' onClick={scrollToTop}>
                            <img
                                src='http://mfilm.vn/data_files/company/201606/56aa00eb189dc01510840ea7/image/56aa00eb189dc01510840ea7-logo.jpg'
                                alt='Mfilm'
                                style={{ width: '53px' }} />
                        </Link>
                    </li>
                    {menu}
                </ul>
            )
        else
            return (
                <ul className={'menu-' + this.props.side}>
                    {menu}
                    <SearchButton onMobile={false} />
                    <li className='user-dropmenu'><a href='#' className='icon-menu icon-menu-user'><span className='pe-7s-user'></span></a>
                        <ul className='one-column'>
                            <li><a className='btn-login' onClick={showModal.bind(this, 'loginModal')}>Đăng nhập</a></li>
                        </ul>
                    </li>
                </ul>
            )
    }
}