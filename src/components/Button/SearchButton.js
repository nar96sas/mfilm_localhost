import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchButton extends React.Component {
    displaySearchBar() {
        $('.a-top-search-form-f').show();
    }

    render() {
        const Custom = this.props.onMobile ? 'div' : 'li';

        return (
            <Custom className={'search-top-btn a-top-search-form ' + (this.props.onMobile ? 'top-colaps-search' : '')}>
                <a className='a-btn-search' onClick={this.displaySearchBar.bind(this)} >
                    Search
                </a>
                <form className='a-top-search-form-f' action='/Home/filter' style={{ display: 'none' }}>
                    <input type='search' id='keyword' name='keyword' placeholder='Nhập tên phim, diễn viên...' />
                    <button type='submit'>Search</button>
                </form>
                <ul 
                    style={{ display: 'none !important' }} 
                    id={'results' + (this.props.onMobile ? '_mobile' : '')} 
                    className={'ul-search-auto ul-search-auto-top' + (this.props.onMobile ? ' ul-search-auto-top-mobile' : '')}>
                </ul>
            </Custom>

        )
    }
}