import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <a style={{ cursor: 'pointer' }} onClick={this.props.onClick} className={'btn-func ' + this.props.color}  >
                <span className={this.props.type}>
                </span>
                {this.props.txt}
            </a>
        )
    }
}