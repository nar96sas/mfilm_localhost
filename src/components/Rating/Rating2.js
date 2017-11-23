import React from 'react';
import ReactStars from 'react-stars';

export default class RatingHaveAction extends React.Component {
    ratingChanged(newRating) {
        console.log(newRating);
    }

    render() {
        return (
            <ReactStars
                className='star-rate'
                count={5}
                value={this.props.stars}
                onChange={this.ratingChanged.bind(this)}
                size={20}
                half={false}
                color2={'#ffd700'} />
        )
    }
}