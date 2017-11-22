import React from 'react';
import FormLogin from './FormLogin.js';
import Signup from './Signup.js';
import { closeModal, showModal } from '../../static/js/utils.js';

export default class CheckLogin extends React.Component {
    render() {
        return (
            <div className='modal-content'>
                <Header />
                <Body />
                <Footer />
                <Signup />
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
                <h4 className='modal-title'> Thông báo </h4>
            </div>
        )
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notify: '',
        }
    }

    render() {
        return (
            <div className='modal-body'>
                {this.state.notify}
                <input className='btn-my' type='button' value='OK' />
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className='modal-footer'>

            </div>
        )
    }
}