import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../static/js/utils.js';
import DrawerItem from './DrawerItem.js';

export default class DrawerMenu extends React.Component {
    render() {
        const menu = [
            { title: 'Tài khoản', src: '/', submenu: ['Đăng nhập'] },
            { title: 'Tuyển tập', src: '/collection', submenu: ['Phim Danet', 'DMC Festival 2016', 'Mfilm Relax', 'TV Show'] },
            { title: 'Phim lẻ', src: '/listFilm/Phim lẻ', submenu: ['Phim chiếu rạp', 'Phim võ thuật', 'Phim viễn tưởng', 'Phim kinh dị', 'Phim hành động', 'Phim kiếm hiệp', 'Phim cách mạng', 'Phim hài', 'Phim hoạt hình', 'Phim kinh điển', 'Phim khoa học', 'Phim tâm lý'] },
            { title: 'Phim bộ', src: '/listFilm/Phim bộ', submenu: ['Phim việt nam', 'Phim thái lan', 'Phim Mỹ', 'Phim hàn quốc', 'Phim Trung quốc', 'Phim Hồng Kông'] },
            { title: 'Phim chiếu rạp', src: '/cinema', submenu: [] },
            { title: 'Phim hoạt hình', src: '/cartoon', submenu: [] },
            { title: 'Phim miễn phí', src: '/free', submenu: [] }
        ];

        const styles = {
            drawerMenu: {
                transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
                transitionDuration: '0ms',
                transfrom: 'translate(0px, 0px) translateZ(0px)'
            }
        }

        return (
            <ul className='drawer-menu' style={styles.drawerMenu}>
                <li>
                    <Link className='drawer-menu-item' to='/'>
                        <img
                            src='http://mfilm.vn/data_files/company/201606/56aa00eb189dc01510840ea7/image/56aa00eb189dc01510840ea7-logo.jpg'
                            style={{ width: '53px' }}
                            alt='logo' />
                    </Link>
                </li>
                {
                    menu.map((item, index) => {
                        const border = (index == 0 || index == menu.length - 1) ? 'menu-border' : '';

                        return (
                            <DrawerItem key={index} border={border} {...item} />
                        )
                    })
                }
            </ul>
        )
    }
}

