import React from 'react';
import Filter from './Filter.js';

export default class FilterSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formActive: false
        }
    }

    showSearchOptions() {
        $('.collaps-form').hide();
        this.setState({ formActive: true });
    }

    render() {
        const series = ['-- Phân loại --', 'Phim lẻ', 'Phim bộ', 'Phim chiếu rạp'];
        const category = ['-- Thể loại --', 'Phim Chiếu Rạp', 'Phim hành động',
            'Phim hoạt hình', 'Phim võ thuật', 'Phim kiếm hiệp', 'Phim kinh điển', 'Phim viễn tưởng', 'Phim cách mạng',
            'Phim khoa học', 'Phim kinh dị', 'Phim hài', 'Phim tâm lý'];
        const country = ['-- Quốc gia --', 'Việt Nam', 'Thái Lan', 'Mỹ', 'Hàn Quốc', 'Trung Quốc', 'Hồng Kông'];
        const order = ['Mới nhất', 'Lượt xem'];
        const year = ['-- Năm --', 1917, 1939, 1944, 1945, 1950, 1952, 1954, 1959];
        for (var i = 1961; i <= 2017; i++) year.push(i);

        //init the default value of select component
        const lowerCaseSeries = series.map((s) => s.toLowerCase());
        const lowerCaseCategory = category.map((c) => c.toLowerCase());
        const lowerCaseCountry = country.map((c) => c.toLowerCase());
        const defaultSeries = lowerCaseSeries.indexOf(this.props.classify.toLowerCase());
        const defaultCategory = lowerCaseCategory.indexOf(this.props.type.toLowerCase());
        const defaultCountry = lowerCaseCountry.indexOf(this.props.type.toLowerCase().replace('phim ', ''));

        return (
            <div className='container'>
                <div className='div-filter-search'>
                    <form id='indexForm' method='get' className={this.state.formActive ? 'form-active' : ''}>
                        <div className='form-groups'>
                            <input type='text' name='keyword' className='in-text-search' placeholder='Từ khóa...' />
                        </div>
                        <input type='hidden' name='price' value='' />
                        <input type='hidden' name='provider_code' value='' />
                        <input type='hidden' name='packageDanet' value='' />
                        <Filter type='series' itemFilter={series} defaultValue={defaultSeries == -1 ? 0 : defaultSeries} />
                        <Filter type='category' itemFilter={category} defaultValue={defaultCategory == -1 ? 0 : defaultCategory} />
                        <Filter type='country' itemFilter={country} defaultValue={defaultCountry == -1 ? 0 : defaultCountry} />
                        <Filter type='year' itemFilter={year} defaultValue={0} />
                        <Filter type='order' itemFilter={order} defaultValue={0} />
                        <div className='form-groups btn-sub'>
                            <button type='submit' className='btn-duyet'> Duyệt </button>
                        </div>
                    </form>
                    <span className='collaps-form' onClick={this.showSearchOptions.bind(this)} >
                        Tìm kiếm nâng cao
                    </span>
                </div>
            </div>
        )
    }
}