import React from 'react';

export default class Item extends React.Component {
    render() {
      return (
        <div className='item'>
          <a>
            <img src={'/images/' + this.props.children + '.jpg'} />
          </a>
        </div>
      )
    }
  }