import React from 'react';
import FormLogin from './FormLogin.js';
import Signup from './Signup.js';
import { closeModal } from '../../static/js/utils.js';

export default class Login extends React.Component {
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
                <h4 className='modal-title'> Đăng nhập </h4>
            </div>
        )
    }
}

class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notify: '',
        }
    }

    getPassWifi(){
        if ($('#mobile').val() == '')
            this.setState({notify: 'Chưa nhập số điện thoại !'});
    }

    showSignup(){
        $('.a-tooltip').css({'display': 'block'});
    }

    render() {
        return (
            <div className='modal-body'>
                <p className='modal-text' style={{ textAlign: 'center' }}>
                    Vui lòng đăng nhập để sử dụng dịch vụ. Hệ thống sẽ tự động gửi mật khẩu tới điện thoại của bạn. Vui lòng kiểm tra và nhập lại mật khẩu
                </p>
                <FormLogin />
                <a href='#' className='btnx nhan-mk-sms' onClick={this.getPassWifi.bind(this)}> Nhận mật khẩu qua SMS </a>
                <p className='notify'> {this.state.notify} </p>
                <p className='p-tks'> Bạn chưa có tài khoản? Đăng ký <a href='#' onClick={this.showSignup.bind(this)} style={{ color: '#e97627' }}> tại đây</a></p>
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