import React from "react";
import Star from "./Star.js";

export default class Rating extends React.Component {
    render() {
        var stars = [];
        for (var i = 1; i <= 5; i++) {
            stars.push(<Star key={i} isRated={i <= this.props.stars} />);
        }

        return (
            <div className='star-rate'>{stars}</div>
        )
    }
}