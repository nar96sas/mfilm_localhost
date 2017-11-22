import React from 'react';
import { toMinute, closeModal, scrollToTop } from '../../static/js/utils.js';

export default class CheckView extends React.Component {
    resume() {
        jwplayer().seek(this.props.time);
        jwplayer().pause();
        closeModal();
        scrollToTop();
    }

    close() {
        closeModal();
        scrollToTop();        
    }

    render() {
        return (
            <div className='box-view'>
                <span className='title_popup'> Chọn xem phim </span>
                <ContinueWatching atTime={this.props.time} />
                <div className='row_btn_popup'>
                    <a className='btn-view-play play_resume' onClick={this.resume.bind(this)}> Xem tiếp </a>
                    <a className='btn-view-play close_popup' onClick={this.close.bind(this)}> Đóng </a>
                </div>
            </div>
        )
    }
}

class ContinueWatching extends React.Component {
    render() {
        return (
            <div className='row_popup'>
                <span>
                    Hệ thống ghi nhận bạn đã dừng xem ở phút thứ
                            <b> {toMinute(this.props.atTime)} </b>
                    , bạn có muốn xem tiếp không ?
                        </span>
            </div>
        )
    }
}