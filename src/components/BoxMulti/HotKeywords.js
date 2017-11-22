import React from 'react';
import ReactDOM from 'react-dom';

class Tag extends React.Component {
    render() {
        return (
            <li>
                <a> {this.props.tagName} </a>
            </li>
        )
    }
}

export default class HotKeywords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [
                'La La Land',
                'Kong: Skull Island',
                'Song Thế Sủng Phi',
                'Wonder Woman',
                'The Boss Baby',
                'Logan',
                'Beauty and the Beast',
                'Sở kiều truyện',
                'Master of the Mask'
            ]
        }
    }

    render() {
        return (
            <div className='col-xs-12 col-sm-6 col-md-3'>
                <div className='tag-box'>
                    <h4 className='top-box-h4'> Từ khoá hot </h4>
                    <ul>
                        {
                            this.state.tags.map(function (tag, index) {
                                return <Tag key={index} tagName={tag} />
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}