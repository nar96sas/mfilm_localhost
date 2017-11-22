import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../../components/Slider/Slider.js';
import FilmsContainer from '../../components/Playlist/FilmsNoneSlider.js';
import Banner from '../../components/Banner/AdBanner.js';
import BoxMulti from '../../components/BoxMulti/BoxMulti.js';
import CollectionLogo from '../../components/Logo/CollectionLogo.js';
import Header from '../../components/Header/Header.js';
import HeaderMobile from '../../components/Header/HeaderMobile.js';
import Drawer from '../../components/Header/Drawer.js';
import PageNotFound from '../NotFound/404.js';
import Login from '../../components/Authentication/Login.js';
import ads from '../../data/advertisements.js';
import collections from '../../data/collection.js';
import Modal from '../../components/Modal/Modal.js';

export default class CollectionPage extends React.Component {
    render() {
        const type = this.props.match.params.type;
        const collection = collections.filter((collection) => collection.name == type)[0]; //return all the collection that match the condition 

        if (!collection)
            return <PageNotFound />

        return (
            <div>
                <Drawer />
                <Header currentTab='Tuyển tập'/>
                <Modal id='signups' triggerId='loginModal' haveOverflow={true} label='Login'> <Login /> </Modal>
                <HeaderMobile />
                {
                    collection.id != 'relax' &&
                    <section className='home-slider'> <Slider /> </section>
                }
                {
                    collection.id != 'relax' &&
                    <section className='section-content content-danet'> <CollectionLogo {...collection} /> </section>
                }
                <section className='section-content'>
                    <FilmsContainer
                        title={collection.sections[0]}
                        currentPage={1}
                        itemsPerPage={12}
                        havePagination={false}
                        currentUrl={'/listFilm/' + collection.name + '/' + collection.sections[0] + '/'} />
                </section>
                <section className='banner-ad'> <Banner classname='container' ad={ads[1]} /> </section>
                {
                    collection.sections.map((section, index) => {
                        if (index > 0)
                            return (
                                <section className='section-content' key={index}>
                                    <FilmsContainer
                                        title={section}
                                        currentPage={1}
                                        itemsPerPage={12}
                                        havePagination={false}
                                        currentUrl={'/listFilm/' + collection.name + '/' + section + '/'} />
                                </section>
                            )
                    })
                }
                <section className='box-multi'> <BoxMulti /> </section>
            </div>
        )
    }
}
