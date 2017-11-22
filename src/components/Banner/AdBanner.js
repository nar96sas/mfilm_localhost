import React from 'react';
import ReactDOM from 'react-dom';

export default class Banner extends React.Component {
    render() {
        const { img, src, alt } = this.props.ad;
               
        return (
            <div className={this.props.classname}>
                <a target='_blank' href={src}>
                    <img src={img} alt={alt} width='100%' />
                </a>
            </div>
        )
    }
}
