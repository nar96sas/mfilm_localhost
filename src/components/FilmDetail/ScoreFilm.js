import React from 'react';
import RatingHaveAction from '../Rating/Rating2.js';
import Rating from '../Rating/Rating.js';

export default class ScoreFilm extends React.Component {
    render() {   
        const rating = this.props.haveAction ? 
                            <RatingHaveAction stars={this.props.rating} /> 
                            : <Rating stars={this.props.rating} />;       
        
        return (
            <div className='imdb-score'>
                <span className='imdb'> {this.props.imdbScore} </span>
                {rating}
            </div>
        )
    }
}