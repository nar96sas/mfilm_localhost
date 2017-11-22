import React from 'react';
import ReactDOM from 'react-dom';
import TabBar from '../TabBar/TabBar.js';

export default class TopView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: [
                { data: 'ngay', txt: 'Ngày' },
                { data: 'tuan', txt: 'Tuần' },
                { data: 'thang', txt: 'Tháng' }
            ],
            films: [
                { img: 'http://mfilm.vn/data_files/film/201612/cho-em-den-ngay-mai/image/cho-em-den-ngay-mai-poster-vi.jpg?w=70&h=100', alt: 'Chờ Em Đến Ngày Mai', title: 'Chờ Em Đến Ngày Mài' },
                { img: 'http://mfilm.vn/data_files/film/201612/cho-em-den-ngay-mai/image/cho-em-den-ngay-mai-poster-vi.jpg?w=70&h=100', alt: 'Chờ Em Đến Ngày Mai', title: 'Chờ Em Đến Ngày Mài' },
                { img: 'http://mfilm.vn/data_files/film/201612/cho-em-den-ngay-mai/image/cho-em-den-ngay-mai-poster-vi.jpg?w=70&h=100', alt: 'Chờ Em Đến Ngày Mai', title: 'Chờ Em Đến Ngày Mài' },
                { img: 'http://mfilm.vn/data_files/film/201612/cho-em-den-ngay-mai/image/cho-em-den-ngay-mai-poster-vi.jpg?w=70&h=100', alt: 'Chờ Em Đến Ngày Mai', title: 'Chờ Em Đến Ngày Mài' },
                { img: 'http://mfilm.vn/data_files/film/201612/cho-em-den-ngay-mai/image/cho-em-den-ngay-mai-poster-vi.jpg?w=70&h=100', alt: 'Chờ Em Đến Ngày Mai', title: 'Chờ Em Đến Ngày Mài' }
            ]
        }
    }

    render() {
        if (this.state.films.length < 6) this.state.films.push({ img: '../../images/them.jpg', alt: 'Xem thêm', title: '' });
        var that = this;

        return (
            <div className='col-xs-12 col-sm-6 col-md-3'>
                <div className='top-box'>
                    <h4 className='top-box-h4'>
                        <span> phim </span>
                        <div>
                            <small> xem </small>
                            <small> nhiều </small>
                        </div>
                        <span> nhất </span>
                    </h4>
                    <TabBar 
                        header={this.state.time} 
                        contents={this.state.films} 
                        type="TopViews" />
                </div>
            </div>
        )
    }
}