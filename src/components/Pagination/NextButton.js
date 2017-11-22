import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../static/js/utils.js';

export default class NextButton extends React.Component {
    render() {
        if (this.props.currentPage < this.props.limit)
            return (
                <li>
                    <Link 
                        to={this.props.url + (parseInt(this.props.currentPage) + 1)} 
                        onClick={scrollToTop} 
                        className='prev' aria-hidden='true'>
                        <i className='fa fa-angle-right'> </i>
                    </Link>
                </li>
            )
        else
            return (
                <li>
                    <span className='prev' aria-hidden='true'>
                        <i className='fa fa-angle-right'> </i>
                    </span>
                </li>
            )
    }
}