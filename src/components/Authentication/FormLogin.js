import React from 'react';

export default class FormLogin extends React.Component {
    render() {
        return (
            <form>
                <Input id='mobile' type='text' placeholder='Số điện thoại' icon='user' />
                <Input id='password' type='password' placeholder='Mật khẩu' icon='lock' />
                <button type='button' id='login_wifi' className='btnx modal-login'> Đăng nhập </button>
            </form>
        )
    }
}

class Input extends React.Component {
    render() {
        const { id, type, placeholder, icon } = this.props;
        
        return (
            <div className='txt-fld'>
                <input name={id} id={id} type={type} placeholder={placeholder} />
                <span className={'pe-7s-'+ icon + ' spanicon'}></span>
            </div>
        )
    }
}