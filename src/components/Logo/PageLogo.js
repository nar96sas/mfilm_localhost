import React from 'react';
import { Link } from 'react-router-dom';

export default class PageLogo extends React.Component {
    render() {
        return (
            <Link className='logo-m' to='/'>
                <img 
                    src='http://mfilm.vn/data_files/company/201711/56aa00eb189dc01510840ea7/image/56aa00eb189dc01510840ea7-logo_footer.png'
                    alt='Logo mobifone' />
            </Link>
        )
    }
}