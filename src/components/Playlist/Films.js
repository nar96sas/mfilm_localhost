import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Film from './Film.js';
import ReadMore from './ReadMore.js';
import films from '../../data/films.js';
import { customPlaylist } from '../../static/js/carousel.js';

export default class FilmsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            limitItems: 12
        }
    }

    render() {
        var filmsPlaylist = [];
        for (var i = 0; i < this.state.limitItems; i++)
            filmsPlaylist.push(films[i]);

        return (
            <div className='container'>
                <h2 className='h1-title'> <Link to={'/listFilm/' + this.props.title}> {this.props.title} </Link> </h2>
                <div className='content-film slider-dot'>
                    <div className='owl-carousel owl-theme slider-pp slider-pl'>
                        {
                            filmsPlaylist.map(function (film, index) {
                                return <Film key={index} pos={index} {...film} />
                            })
                        }
                    </div>
                </div>
                <ReadMore link={'/listFilm/' + this.props.title + '/all'} />
            </div>
        )
    }

    componentDidMount() {
        customPlaylist();

        var btnNextOrPrev = $('.owl-next, .owl-prev');
        btnNextOrPrev.click(function (e) {
            e.preventDefault();

            // change the position of hover, right at 4, 5nd item
            var itemSlide = $(this).parents('.slider-dot').find('.owl-stage-outer .active');
            itemSlide.each(function (index, value) {
                if (index == 4 || index == 5) {
                    $(this).find('.a-hover-films').addClass('a-hover-films-right');
                } else {
                    $(this).find('.a-hover-films').removeClass('a-hover-films-right');
                }
            })
        })
    }
}
