import React from 'react';
import ReactDOM from "react-dom";

export default class PriceFilm extends React.Component{
    render(){
        return(
            <span className='price-film'>
                Giá: <strong> {this.props.price} </strong>
            </span>
        )
    }
}