import React from 'react';
import ReactDOM from "react-dom";
import TitleFilm from './TitleFilm.js';
import PriceFilm from './PriceFilm.js';
import ScoreFilm from './ScoreFilm.js';

export default class CoverInfo extends React.Component {
    render() {
        const { poster, nameVN, nameEn, price, rating, view, imdbScore,
                nbComment, release, duration, directors, starings, genres, uploadBy } = this.props;
        const listInfo = [
            {label: 'Phát hành:', info: release},
            {label: 'Thời lượng:', info: duration},
            {label: 'Đạo diễn:', info: directors.join()}, // array.join() => [a, b, c] => a,b,c
            {label: 'Diễn viên:', info: starings.join()},
            {label: 'Thể loại:', info: genres.join()},
            {label: 'Upload bởi:', info: uploadBy}
        ];

        return (
            <div className='row cover-info-short'>
                <div className='col-xs-3 col-sm-5 col-md-5 left-info-film'> 
                    <img className='img-responsive' src={'../images/' + poster + '.jpg'} alt={nameVN}/> 
                    <div className='socials-imgs'> </div>
                </div>
                <div className='col-xs-3 col-sm-7 col-md-7 right-info-film'> 
                    <TitleFilm nameVN={nameVN} nameEn={nameEn} />
                    <PriceFilm price={price} />
                    <ScoreFilm imdbScore={imdbScore} rating={rating} />
                    <div className='content-film-right film-detail-views'>
                        <div> <span className='pe-7s-look'> </span> {view} </div>
                        <div> <span className='pe-7s-comment'> </span> {nbComment} </div>
                    </div>
                    <ul className='ul-list-info'>
                        {
                            listInfo.map(function(item, index){
                                return(
                                    <li key={index} className={item.label == 'Thể loại:' ? 'tag-s-links' : ''}>
                                        <label>{item.label}</label>
                                        <span>{item.info}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

