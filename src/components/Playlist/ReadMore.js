import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop, removeDiacritic } from '../../static/js/utils.js';

export default class ReadMore extends React.Component {
    render() {
        return (
            <div className='read-more-sec'>
                <Link onClick={scrollToTop} to={this.props.link}> Xem tất cả <span className='pe-7s-angle-right'> </span> </Link>
            </div>
        )
    }
}