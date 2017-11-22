import React from "react";
import ReactDOM from "react-dom";

export default class Star extends React.Component {
    render() {
        return (
            <i className={this.props.isRated ? 'fa fa-star rated' : 'fa fa-star'} aria-hidden="true"></i>
        )
    }
}
