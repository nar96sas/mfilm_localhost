import React from 'react';
import CoverInfo from './CoverInfo.js';
import TextContent from './TextContent.js';
import Tags from './Tags.js';
import Screenshots from './Screenshots.js';
import ads from '../../data/advertisements.js';
import Banner from '../Banner/AdBanner.js';
import CommentForm from './CommentForm.js';
import Button from '../Button/Button.js';
import { turnOffTheLight, showModal } from '../../static/js/utils.js';

export default class FilmDetail extends React.Component {
    
    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-md-6 film-detail-content-left'>
                        <div className='button-function'>
                            <Button type='pe-7s-play' onClick={showModal.bind(this, 'trailerFilmModal')} color='blue' txt='Xem trailer' />
                            {/* <Button type='pe-7s-play' color='blue' txt='Xem Phim' /> */}
                            <Button type='pe-7s-ribbon' color='green bookmark' txt='Yêu thích' />
                            <Button type='pe-7s-light' onClick={turnOffTheLight} color='orange' txt='Tắt đèn' />
                        </div>
                        <CoverInfo {...this.props} />
                        <TextContent description={this.props.description} />
                        <Tags
                            nameVN={this.props.nameVN}
                            nameEn={this.props.nameEn}
                            directors={this.props.directors}
                            starings={this.props.starings} />
                    </div>
                    <div className='col-xs-12 col-md-6 film-detail-content-right'>
                        <Banner ad={ads[3]} classname='banner-film-detail' />
                        <Screenshots images={this.props.screenshots} />
                        <div className="clear"></div>
                        <CommentForm />
                    </div>
                </div>
            </div>
        )
    }
}