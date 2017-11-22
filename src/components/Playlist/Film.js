import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating.js";
import HoverFilm from "./HoverFilm.js";
import { scrollToTop } from '../../static/js/utils.js';

export default class Film extends React.Component {
    render() {
        const { poster, nameVN, nameEn, rating, view } = this.props;
        return (
            <div className='content-film-item'>
                {/* <span className='label-item-q'> HD </span> */}
                {/* <span className='label-item-epx'> 16/16 </span> */}
                {/* <span className='label-item-new'> New </span> */}
                <Link onClick={scrollToTop} to={'/film/' + nameEn}>
                    <img className='img-responsive' src={'/images/' + poster + '.jpg'} alt={nameVN} />
                </Link>
                <h3>
                    <Link onClick={scrollToTop} to={'/film/' + nameEn}>
                        {nameVN} <small> {nameEn} </small>
                    </Link>
                </h3>
                <div className='content-film-left'> <Rating stars={rating} /> </div>
                <div className='content-film-right'> <span className='pe-7s-look'> </span> {view}  </div>
                <HoverFilm position={this.props.pos == 4 || this.props.pos == 5 ? 'right' : 'left'} {...this} />
            </div>
        )
    }
}

