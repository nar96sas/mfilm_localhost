import React from 'react';

export default class TextContent extends React.Component {
    render() {

        return (
            <div className='film-detail-text-content'>
                <h2> Nội dung phim </h2>
                <div className='content-film-texts'>
                    <p style={{ textAlign: 'justify' }}>
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}