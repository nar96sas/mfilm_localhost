import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Home from '../containers/Home/Home.js';
import FilmPage from '../containers/Film/FilmPage.js';
import ListFilmPage from '../containers/Film/ListFilmPage.js';
import CinemaPage from '../containers/Film/CinemaPage.js';
import CartoonPage from '../containers/Film/CartoonPage.js';
import FreePage from '../containers/Film/FreePage.js';
import CollectionPage from '../containers/Collection/CollectionPage.js';
import PageNotFound from '../containers/NotFound/404.js';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/collection/:type' component={CollectionPage} />
                <Route path='/listFilm/:classify/:type/:page' component={ListFilmPage} />
                <Route path='/listFilm/:classify/:type' component={ListFilmPage} />                
                <Route path='/film/:filmName' component={FilmPage} />
                <Route path='/cinema' component={CinemaPage} />
                <Route path='/cartoon' component={CartoonPage} />
                <Route path='/free' component={FreePage} />
                <Route path='*' component={PageNotFound} />
            </Switch>
        )
    }
}

