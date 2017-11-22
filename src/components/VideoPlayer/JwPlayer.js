import React from 'react';
import { setCookie, getCookie } from '../../static/js/utils.js';

export default class JwPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: 'video_'
        }
    }

    rememberPosition(videoId) {
        if (jwplayer().getState() == 'complete') { // if the video finish, remove cookie
            setCookie(videoId, 0, -1);
        } else {
            setCookie(videoId, Math.round(jwplayer().getPosition()), 7);
            setTimeout(this.rememberPosition.bind(this), 5000);
        }
    }

    setupPlayer(videoId) {
        var player = jwplayer(this.props.id);
        player.setup({
            aspectratio: '16:9',
            width: '100%',
            image: this.props.background,
            title: this.props.title,
            sources: this.props.videos,
            // autostart: true,
            skin: {
                'name': 'custom'
            }
        });

        player.on('play', (event) => {
            if (this.props.canResume)
                setTimeout(this.rememberPosition(videoId), 5000);
        });

        player.on('complete', (event) => {
            if (this.props.canResume)
                setCookie(videoId, 0, -1); // if the video finish, remove cookie
        });
    }

    // run after render at the first time
    componentDidUpdate() {
        this.setupPlayer(this.state.videoId + this.props.title);
    }

    render() {
        return (
            <div>
                <div
                    id={this.props.id}
                    style={{ width: '100%', height: '270px' }}
                    className='jwplayer' >

                </div>
                <div className='clear'> </div>
            </div>
        )
    }

    componentDidMount() {
        this.setupPlayer(this.state.videoId + this.props.title);
    }
}