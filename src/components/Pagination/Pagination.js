import React from 'react';
import { Link } from 'react-router-dom';
import PrevButton from './PrevButton.js';
import NextButton from './NextButton.js';
import { scrollToTop } from '../../static/js/utils.js';

export default class Pagination extends React.Component {
    render() {
        var that = this;
        var totalPage = Math.ceil(this.props.totalItems / this.props.itemsPerPage);
        var pages = [];
        for (var i = 1; i <= totalPage; i++) pages.push(i);

        return (
            <ul className='page-num page-list'>
                <li> </li>
                {
                    this.props.currentPage > 1 &&
                    <li>
                        <Link to={this.props.url + '1'} rel='last' onClick={scrollToTop}>Trang đầu</Link>
                    </li>
                }

                <PrevButton currentPage={this.props.currentPage} url={this.props.url} />
                <li> </li>

                {
                    pages.map((page, index) => { return (
                            <li key={index} className={that.props.currentPage - 1 == index ? 'active-a-nav' : ''}>
                                <Link to={that.props.url + page} onClick={scrollToTop}> {page} </Link>
                            </li>
                        )
                    })
                }

                <NextButton currentPage={this.props.currentPage} limit={totalPage} url={this.props.url} />
                <li> </li>

                {
                    this.props.currentPage < totalPage &&
                    <li>
                        <Link to={this.props.url + totalPage} rel='last' onClick={scrollToTop}>Trang cuối</Link>
                    </li>
                }
            </ul>
        )
    }
}