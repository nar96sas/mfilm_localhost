import React from 'react';
import films from '../../data/films.js';
import PageNotFound from '../NotFound/404.js';
import BoxMulti from '../../components/BoxMulti/BoxMulti.js';
import Breadcrum from '../../components/Breadcrum/Breadcrum.js';
import Banner from '../../components/Banner/AdBanner.js';
import Slider from '../../components/Slider/Slider.js';
import ads from '../../data/advertisements.js';
import FilmsContainer from '../../components/Playlist/FilmsNoneSlider.js';
import Header from '../../components/Header/Header.js';
import HeaderMobile from '../../components/Header/HeaderMobile.js';
import Drawer from '../../components/Header/Drawer.js';
import Login from '../../components/Authentication/Login.js';
import Modal from '../../components/Modal/Modal.js';

export default class FreePage extends React.Component {
    render() {
        const title = 'Phim miễn phí';        
        const type = 'Phim lẻ miễn phí';

        return (
            <div>
                <Drawer />
                <Header currentTab={title}/>
                <Modal id='signups' triggerId='loginModal' haveOverflow={true} label='Login'> <Login /> </Modal>
                <HeaderMobile />
                <section className='home-slider'> <Slider /> </section>
                <section className='section-content'>
                    <FilmsContainer
                        title={type}
                        currentPage={1}
                        itemsPerPage={12}
                        havePagination={false}
                        currentUrl={'/listFilm/'+ title + '/' + type + '/'}/> />
                </section>
                <section className='banner-ad'> <Banner classname='container' ad={ads[5]} /> </section>
                <section className='box-multi'> <BoxMulti /> </section>
            </div>
        )
    }
}