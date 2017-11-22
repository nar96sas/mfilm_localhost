import React from "react";
import ReactDOM from "react-dom";
import TitleFilm from '../FilmDetail/TitleFilm.js';
import ScoreFilm from '../FilmDetail/ScoreFilm.js';

export default class HoverFilm extends React.Component {
    render() {
        const { nameVN, nameEn, imdbScore, rating, view, nbComment, summary } = this.props.props;

        return (
            <div className={'a-hover-films ' + (this.props.position == 'right' ? 'a-hover-films-right' : '')}>
                <TitleFilm nameVN={nameVN} nameEn={nameEn} />
                <ScoreFilm imdbScore={imdbScore} rating={rating} />
                <ul className='ul-list-info'>
                    <p> {summary} </p>
                </ul>
                <div className='content-film-right film-detail-views'>
                    <div> <span className='pe-7s-look'> </span> {view} </div>
                    <div> <span className='pe-7s-comment'> </span> {nbComment} </div>
                </div>
            </div>
        )
    }
}