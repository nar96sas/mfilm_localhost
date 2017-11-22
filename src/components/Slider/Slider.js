import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item.js';
import { customSlider } from '../../static/js/carousel.js';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'blade-runner-2049-slide-vi',
        'geostorm-slide-vi',
        'loi-tien-sinh-bat-gap-tinh-yeu-slide-vi',
        'ngay-mai-mai-cuoi-slide-vi',
        'nothing-gold-can-stay-slide-vi',
        'real-slide-vi',
        'the-kings-woman-slide-vi',
        'thor-3-ragnarok-slide-vi',
        'three-lives-three-worlds-ten-miles-of-peach-blossoms-slide-vi'
      ]
    }
  }

  render() {
    return (
      <div className='slider-home-banner owl-carousel owl-theme'>
        {this.state.items.map((item, index) => <Item key={index} >{item}</Item>)}
      </div>
    )
  }
  
  componentDidMount() {
    customSlider();
  }
}


