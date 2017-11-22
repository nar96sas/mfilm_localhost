import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Film from './Film.js';
import Pagination from '../Pagination/Pagination.js';
import films from '../../data/films.js';
import { scrollToTop } from '../../static/js/utils.js';
import PageNotFound from '../../containers/NotFound/404.js';
import ReadMore from './ReadMore.js';

export default class FilmsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsPerLine: 6,
        }
    }

    // when changing the page you need to add the class again
    componentDidUpdate() {
        $('.content-none-slider .content-film-item').addClass('col-xs-6 col-sm-3 col-md-2');
    }

    getFilmsInThisPage(currentPage) {
        let tmp = [];
        let startItem = (currentPage - 1) * this.props.itemsPerPage;
        let itemsRemaining = films.length - startItem;
        let endItem = itemsRemaining >= this.props.itemsPerPage ? (this.props.itemsPerPage * currentPage) : (startItem + itemsRemaining);

        for (var i = startItem; i < endItem; i++)
            tmp.push(films[i]);

        return tmp;
    }

    render() {
        const currentPage = this.props.currentPage;
        var filmsThisPage = this.getFilmsInThisPage(currentPage);

        if (filmsThisPage.length == 0)
            return <PageNotFound />

        return (
            <div className='container'>
                <h2 className='h1-title'> <a className='disabled-link'> {this.props.title} </a> </h2>
                <div className='row content-film content-none-slider'>
                    {
                        filmsThisPage.map((film, index) => {
                            return <Film
                                key={index}
                                pos={index % this.state.itemsPerLine}
                                {...film} />
                        })
                    }
                </div>
                {
                    this.props.havePagination ? (
                        <div className='page-nav'>
                            <Pagination
                                url={this.props.currentUrl}
                                itemsPerPage={this.props.itemsPerPage}
                                totalItems={films.length}
                                currentPage={currentPage} />
                        </div>
                    ) : (
                        <ReadMore link={this.props.currentUrl} />
                    )
                }

            </div>
        )
    }

    componentDidMount() {
        $('.content-none-slider .content-film-item').addClass('col-xs-6 col-sm-3 col-md-2');
    }
}
