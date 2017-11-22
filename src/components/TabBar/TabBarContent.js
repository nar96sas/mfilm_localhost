import React from 'react';
import ReactDOM from 'react-dom';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var that = this;
        return (
            <ul className='cd-tabs-content' style={{ height: 244 }}>
                {
                    this.props.header.map(function (t, index) {
                        if (that.props.type == "TopViews")
                            return <TopViewsContent 
                                        key={index} 
                                        films={that.props.contents} 
                                        selected={that.props.selected == index ? 'selected' : ''} />
                        else if (that.props.type == "News")
                            return <NewsContent 
                                        key={index} 
                                        news={that.props.contents} 
                                        selected={that.props.selected == index ? 'selected' : ''} />
                    })
                }
            </ul>
        )
    }
}

class TopViewsContent extends React.Component {
    render() {
        return (
            <li className={this.props.selected} >
                <div className='row'>
                    {
                        this.props.films.map(function (film, index) {
                            const { img, alt, title } = film;
                            return <div key={index} className='col-xs-4 col-md-4'>
                                <a> <img src={img} alt={alt} title={title} /> </a>
                            </div>
                        })
                    }
                </div>
            </li>
        )
    }
}

class NewsContent extends React.Component {
    render() {
        return (
            <li className={this.props.selected} >
                {
                    this.props.news.map(function (n, index) {
                        const { img, alt, title } = n;
                        return <div className='home-new-1' key={index}>
                            <a>
                                <img src={img} alt={alt} />
                                <h3> {title} </h3>
                            </a>
                        </div>
                    })
                }
                <a className='home-see-more'>
                    Xem tất cả <span className='pe-7s-angle-right'></span>
                </a>
            </li>
        )
    }
}