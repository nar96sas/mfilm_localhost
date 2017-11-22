import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop, showModal } from '../../static/js/utils.js';

export default class DrawerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplaySubmenu: false,
            isActive: false,
        }
    }

    submenu() {
        this.state.isDisplaySubmenu = !this.state.isDisplaySubmenu;
        this.state.isActive = !this.state.isActive;
        this.setState(this.state);
    }

    login() {
        $('.drawer').drawer('close');
        showModal('loginModal');
    }

    clean() {
        $('.drawer').drawer('close');
        scrollToTop();        
    }

    render() {
        const { submenu, border, title, src } = this.props;
        const dropdown = submenu.length > 0 ? 'drawer-rr dropdown-nav' : '';
        const liActive = this.state.isActive ? 'li-active' : '';
        const disabledLink = title == 'Tài khoản' ? 'disabled-link' : '';

        return (
            <li className={dropdown + ' ' + border + ' ' + liActive}>
                <Link
                    onClick={this.clean.bind(this)}
                    to={src + (title == 'Phim lẻ' || title == 'Phim bộ' ? '/all' : '')}
                    className={'drawer-menu-item ' + disabledLink}>
                    {title}
                </Link>
                {
                    submenu.length > 0 &&
                    <span
                        className={title == 'Tài khoản' ? 'pe-7s-user' : ('pe-7s-angle-' + (this.state.isDisplaySubmenu ? 'up' : 'down'))}
                        onClick={this.submenu.bind(this)}>
                    </span>
                }
                {
                    submenu.length > 0 && // have submenu
                    <ul className='a-show' style={{ display: this.state.isDisplaySubmenu ? 'block' : 'none' }}>
                        {
                            submenu.map((subitem, index) => {
                                return (
                                    subitem != 'Đăng nhập' ?
                                        <li key={index} >
                                            <Link to={src + '/' + subitem} onClick={this.clean.bind(this)}>
                                                <i className='fa fa-angle-right' aria-hidden='true'> </i>
                                                {subitem}
                                            </Link>
                                        </li>
                                        :
                                        <li key={index} >
                                            <a onClick={this.login.bind(this)}>
                                                <i className='fa fa-angle-right' aria-hidden='true'> </i>
                                                {subitem}
                                            </a>
                                        </li>
                                )
                            })
                        }
                    </ul>
                }
            </li>
        )
    }
}

