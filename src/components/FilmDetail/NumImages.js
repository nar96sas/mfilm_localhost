import React from 'react';

export default class NumImages extends React.Component {
    render() {
        return (
            <div className='icon-num-images'>
                <span className='pe-7s-camera'> </span>
                <span style={{color: '#999', fontSize: '14px'}} > {this.props.currentImage} </span>
                {'/ ' + this.props.nbImages}
            </div>
        )
    }
}