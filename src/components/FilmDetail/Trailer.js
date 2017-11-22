import React from 'react';
import JwPlayer from '../VideoPlayer/JwPlayer.js';
import { closeModal } from '../../static/js/utils.js';

export default class Trailer extends React.Component {
    render() {
        const film = this.props;

        return (
            <div className='modal-content'>
                <Header />
                <Body {...film} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className='modal-header'>
                <button type='button' onClick={closeModal} className='close' aria-label='Close'>
                    <span aria-hidden='true'> x </span>
                </button>
                <h4 className='modal-title'> Trailer </h4>
            </div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className='modal-body'>
                <JwPlayer
                    id='trailer'
                    videos={this.props.trailers}
                    background={this.props.player_background_url}
                    title={this.props.nameVN}
                    canResume={true} />
                <div className='clear'> </div>
            </div>
        )
    }
}