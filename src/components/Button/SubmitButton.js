import React from 'react';

export default class SubmitButton extends React.Component {
    render() {
        return (
            <div className='col-md-3'>
                <button type='submit' name='' value='' className={this.props.buttonClass}>{this.props.txt}</button>
            </div>
        )
    }
}