import React from 'react';
import ReactDOM from 'react-dom';
import TabBar from '../TabBar/TabBar.js';

export default class BoxNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { data: 'event', txt: 'Tin mới', isSelected: 'selected' },
                { data: 'review', txt: 'Review', isSelected: '' },
                { data: 'star', txt: 'Nhân vật', isSelected: '' }
            ],
            news: [
                { img: 'http://mfilm.vn/data_files/news/201710/fast-furious-9-bi-tri-hoan-den-2020-do-bat-hoa-giua-the-rock-va-vin-diesel/image/fast-furious-9-bi-tri-hoan-den-2020-do-bat-hoa-giua-the-rock-va-vin-diesel-logo.jpg?w=90&h=55', title: '"Fast & Furious 9" bị trì...', alt: '20 bí mật thú vị về tác phẩm hoạt hình "Loving Vincent" mà bạn không thể không biết' },
                { img: 'http://mfilm.vn/data_files/news/201710/fast-furious-9-bi-tri-hoan-den-2020-do-bat-hoa-giua-the-rock-va-vin-diesel/image/fast-furious-9-bi-tri-hoan-den-2020-do-bat-hoa-giua-the-rock-va-vin-diesel-logo.jpg?w=90&h=55', title: '"Fast & Furious 9" bị trì...', alt: '20 bí mật thú vị về tác phẩm hoạt hình "Loving Vincent" mà bạn không thể không biết' },
                { img: 'http://mfilm.vn/data_files/news/201710/fast-furious-9-bi-tri-hoan-den-2020-do-bat-hoa-giua-the-rock-va-vin-diesel/image/fast-furious-9-bi-tri-hoan-den-2020-do-bat-hoa-giua-the-rock-va-vin-diesel-logo.jpg?w=90&h=55', title: '"Fast & Furious 9" bị trì...', alt: '20 bí mật thú vị về tác phẩm hoạt hình "Loving Vincent" mà bạn không thể không biết' }
            ]
        }
    }

    render() {
        var that = this;
        return (
            <div className='col-xs-12 col-sm-6 col-md-3'>
                <div className='tt-box'>
                    <TabBar
                        header={this.state.categories}
                        contents={this.state.news}
                        type="News" />
                </div>
                <div className='clear'></div>
            </div>
        )
    }
}