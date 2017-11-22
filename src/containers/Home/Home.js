import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../../components/Slider/Slider.js';
import FilmsContainer from '../../components/Playlist/Films.js';
import Banner from '../../components/Banner/AdBanner.js';
import BoxMulti from '../../components/BoxMulti/BoxMulti.js';
import Header from '../../components/Header/Header.js';
import HeaderMobile from '../../components/Header/HeaderMobile.js';
import Drawer from '../../components/Header/Drawer.js';
import ads from '../../data/advertisements.js';
import Login from '../../components/Authentication/Login.js';
import Modal from '../../components/Modal/Modal.js';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Drawer />
        <Header />
        <Modal id='signups' triggerId='loginModal' haveOverflow={true} label='Login'> <Login /> </Modal>
        <HeaderMobile />
        <section className='home-slider'> <Slider /> </section>
        <section className='section-content'> <FilmsContainer title="Phim lẻ mới nhất" /> </section>
        <section className='banner-ad'> <Banner classname='container' ad={ads[0]} /> </section>
        <section className='section-content'> <FilmsContainer title="Phim bộ mới nhất" /> </section>
        <section className='section-content'> <FilmsContainer title="Phim hot nhất" /> </section>
        <section className='section-content'> <FilmsContainer title="Phim đề cử" /> </section>
        <section className='section-content'> <FilmsContainer title="Phim Danet" /> </section>
        <section className='banner-ad'> <Banner classname='container' ad={ads[1]} /> </section>
        <section className='box-multi'> <BoxMulti /> </section>
      </div>
    )
  }
}
