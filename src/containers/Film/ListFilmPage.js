import React from 'react';
import ReactDOM from 'react-dom';
import BoxMulti from '../../components/BoxMulti/BoxMulti.js';
import Breadcrum from '../../components/Breadcrum/Breadcrum.js';
import Banner from '../../components/Banner/AdBanner.js';
import FilterSearch from '../../components/FilterSearch/FilterSearch.js';
import FilmsContainer from '../../components/Playlist/FilmsNoneSlider.js';
import ads from '../../data/advertisements.js';
import Header from '../../components/Header/Header.js';
import HeaderMobile from '../../components/Header/HeaderMobile.js';
import Login from '../../components/Authentication/Login.js';
import Modal from '../../components/Modal/Modal.js';
import Drawer from '../../components/Header/Drawer.js';

export default class ListFilmPage extends React.Component {
    render() {
        const currentPage = this.props.match.params.page == null ? 1 : this.props.match.params.page;
        const classify = this.props.match.params.classify;
        const type = this.props.match.params.type;
        const title = type == 'all' ? classify : type;
        const currentUrl = '/listFilm/' + classify + '/' + type + '/';
        const path = type == 'all' ? ('Mfilm/' + classify) : ('Mfilm/' + classify + '/' + type);

        return (
            <div>
                <Drawer />
                <Header currentTab={classify}/>
                <Modal id='signups' triggerId='loginModal' haveOverflow={true} label='Login'> <Login /> </Modal>
                <HeaderMobile />
                <section className='breadcrum wap-no-slider'>
                    <Breadcrum
                        path={path}
                        pathData={['/', '/listFilm/' + classify + '/all']} />
                </section>
                <section className='form-filter-search'> <FilterSearch classify={classify} type={type} /> </section>
                <section className='banner-ad'> <Banner classname='container' ad={ads[4]} /> </section>
                <section className='section-content'>
                    <FilmsContainer
                        title={title}
                        currentPage={currentPage}
                        itemsPerPage={24}
                        havePagination={true}
                        currentUrl={currentUrl} />
                </section>
                <section className='box-multi'> <BoxMulti /> </section>
            </div>
        )
    }
}