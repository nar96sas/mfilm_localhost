import React from 'react';
import NumImages from './NumImages.js';

export default class Screenshots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScreen: 1
        }
    }

    componentWillReceiveProps(){
        this.setState({currentScreen: 1});
    }

    render() {
        var that = this;
        
        return (
            <div className='images-films'>
                <p className='p-title-film'> Hình ảnh </p>
                <NumImages
                    currentImage={this.state.currentScreen}
                    nbImages={this.props.images.length} />
                <div id='slider-images-film'>
                    {
                        this.props.images.map(function (img, index) {
                            return <div key={index} className={'screen ' + (that.state.currentScreen-1 == index ? 'active' : '')}>
                                <img src={img} className='img-responsive' />
                            </div>
                        })
                    }
                    <div className='owl-nav'>
                        <div className='owl-prev'>prev</div>
                        <div className='owl-next'>next</div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        var that = this;
        if (this.props.images.length > 0) {
            $('#slider-images-film .owl-nav .owl-next').click(function () {
                that.setState({
                    currentScreen: that.state.currentScreen == that.props.images.length ? 1 : that.state.currentScreen + 1
                });
                
            });

            $('#slider-images-film .owl-nav .owl-prev').click(function () {
                that.setState({
                    currentScreen: that.state.currentScreen == 1 ? that.props.images.length : that.state.currentScreen - 1
                })
            });
        }
    }
}