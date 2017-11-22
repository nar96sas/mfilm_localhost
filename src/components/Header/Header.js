import React from 'react';
import HeaderSide from './HeaderSide.js';
import PageLogo from '../Logo/PageLogo.js';

export default class Header extends React.Component {
    render() {
        const menu = [
            { title: 'Phim lẻ', src: '/listFilm/Phim lẻ', submenu: ['Phim chiếu rạp', 'Phim võ thuật', 'Phim viễn tưởng', 'Phim kinh dị', 'Phim hành động', 'Phim kiếm hiệp', 'Phim cách mạng', 'Phim hài', 'Phim hoạt hình', 'Phim kinh điển', 'Phim khoa học', 'Phim tâm lý'] },
            { title: 'Phim bộ', src: '/listFilm/Phim bộ', submenu: ['Phim việt nam', 'Phim thái lan', 'Phim Mỹ', 'Phim hàn quốc', 'Phim Trung quốc', 'Phim Hồng Kông'] },
            { title: 'Phim chiếu rạp', src: '/cinema', submenu: [] },
            { title: 'Tuyển tập', src: '/collection', submenu: ['Phim Danet', 'DMC Festival 2016', 'Mfilm Relax', 'TV Show'] },
            { title: 'Phim hoạt hình', src: '/cartoon', submenu: [] },
            { title: 'Phim miễn phí', src: '/free', submenu: [] },
            { title: 'Tin tức', src: '/', submenu: [] },
        ];
        const menuLeft = menu.slice(0, 4)
        const menuRight = menu.slice(4, menu.length);

        return (
            <div className='header-menu menu-noma'>
                <div className='container'>
                    <nav className='nav-menu-top'>
                        <HeaderSide menu={menuLeft} side='left' currentTab={this.props.currentTab} />
                        <PageLogo />
                        <HeaderSide menu={menuRight} side='right' currentTab={this.props.currentTab} />
                    </nav>
                </div>
            </div>
        )
    }
}

