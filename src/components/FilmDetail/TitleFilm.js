import React from 'react';
import ReactDOM from "react-dom";

export default class TitleFilm extends React.Component{
    render(){
        return(
            <h1 className='title-film'> 
                {this.props.nameVN} 
                <small> {this.props.nameEn} </small> 
            </h1>
        )
    }
}