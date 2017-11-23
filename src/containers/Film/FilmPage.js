import React from 'react';
import ReactDOM from 'react-dom';
import films from '../../data/films.js';
import PageNotFound from '../NotFound/404.js';
import BoxMulti from '../../components/BoxMulti/BoxMulti.js';
import Breadcrum from '../../components/Breadcrum/Breadcrum.js';
import FilmDetail from '../../components/FilmDetail/FilmDetail.js';
import FilmsContainer from '../../components/Playlist/Films.js';
import Banner from '../../components/Banner/AdBanner.js';
import JwPlayer from '../../components/VideoPlayer/JwPlayer.js';
import ads from '../../data/advertisements.js'
import Header from '../../components/Header/Header.js';
import HeaderMobile from '../../components/Header/HeaderMobile.js';
import Trailer from '../../components/FilmDetail/Trailer.js';
import Login from '../../components/Authentication/Login.js';
import CheckLogin from '../../components/Authentication/CheckLogin.js';
import Modal from '../../components/Modal/Modal.js';
import Drawer from '../../components/Header/Drawer.js';
import CheckView from '../../components/VideoPlayer/CheckView.js';
import { getCookie, showModal } from '../../static/js/utils.js';

export default class FilmPage extends React.Component {
    componentDidUpdate() {
        const name = this.props.match.params.filmName;
        const film = films.filter((film) => film.nameEn == name)[0];
        if (getCookie('video_' + film.nameVN) > 0) showModal('checkViewModal');
    }

    render() {        
        const name = this.props.match.params.filmName;
        const film = films.filter((film) => film.nameEn == name)[0]; //return all the film that match the condition 
        if (!film)
            return <PageNotFound />

        return (
            <div>
                <Drawer />
                <Header />
                <Modal id='signups' triggerId='loginModal' haveOverflow={true} label='Login'> <Login /> </Modal>
                <HeaderMobile />
                <div className='overlay-tatden' style={{ display: 'none' }}></div>
                <section className='breadcrum wap-no-slider wrap-content-bread'>
                    <Breadcrum
                        path={'Mfilm/' + film.category_name + '/' + film.nameVN}
                        pathData={['/', '/listFilm/' + film.category_name + '/all']} />
                </section>
                <section className='section-content'>
                    <div className='container video-player'>
                        <JwPlayer
                            id='botr_F5K02Tmh_8nLlWRv4_div'
                            videos={film.videos}
                            background={film.player_background_url}
                            title={film.nameVN} 
                            canResume={true}/>
                    </div>
                </section>
                <section className='section-content film-detail-tens'> <FilmDetail {...film} /> </section>
                <section className='section-content'> <FilmsContainer title="Phim liên quan" /> </section>
                <section className='banner-ad'> <Banner classname='container' ad={ads[2]} /> </section>
                <section className='box-multi'> <BoxMulti /> </section>
                <Modal id='modal-trailer' triggerId='trailerFilmModal' haveOverflow={true} label='Trailer'> <Trailer {...film} /> </Modal>
                <Modal id='popup-check-view' triggerId='checkViewModal' haveOverflow={false} label='CheckView'>
                    <CheckView time={getCookie('video_' + film.nameVN)} />
                </Modal>
            </div>
        )
    }

    componentDidMount() {
        const name = this.props.match.params.filmName;
        const film = films.filter((film) => film.nameEn == name)[0];
        if (getCookie('video_' + film.nameVN) > 0) showModal('checkViewModal');
        $('.read-more-sec').empty(); // we dont need read more in this component
    }
}