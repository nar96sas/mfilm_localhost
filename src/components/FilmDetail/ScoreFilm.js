import React from "react";
import Rating from "../Rating/Rating.js";
import ReactDOM from "react-dom";

export default class ScoreFilm extends React.Component {
    render() {        
        return (
            <div className='imdb-score'>
                <span> {this.props.imdbScore} </span>
                <Rating stars={this.props.rating} />
            </div>
        )
    }
}