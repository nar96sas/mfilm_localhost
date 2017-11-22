import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../static/js/utils.js';

export default class PrevButton extends React.Component {
    render() {
        if (this.props.currentPage - 1 > 0)
            return (
                <li>
                    <Link to={this.props.url + (this.props.currentPage - 1)} onClick={scrollToTop} className='prev' aria-hidden='true'>
                        <i className='fa fa-angle-left'> </i>
                    </Link>
                </li>
            )
        else
            return (
                <li>
                    <span className='prev' aria-hidden='true'>
                        <i className='fa fa-angle-left'> </i>
                    </span>
                </li>
            )
    }
}