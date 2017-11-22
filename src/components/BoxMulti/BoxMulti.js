import React from 'react';
import ReactDOM from 'react-dom';
import HotKeywords from './HotKeywords.js';
import TopView from './TopView.js';
import BoxNews from './BoxNews.js';

export default class BoxMulti extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <TopView />
                    <HotKeywords />
                    <BoxNews />
                </div>
            </div>
        )
    }
}


