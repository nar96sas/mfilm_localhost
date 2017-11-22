import React from 'react';

export default class CollectionLogo extends React.Component {
    render() {
        const{ id, src } = this.props;
        return (
            <div className='container'>
                <img src={'/images/'+src} alt={id} />
            </div>
        )
    }
}