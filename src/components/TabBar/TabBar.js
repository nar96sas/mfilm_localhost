import React from 'react';
import ReactDOM from 'react-dom';
import Content from './TabBarContent.js';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: 0
        }
    }

    selectTab(index) {
        this.setState({ select: index });
    }

    render() {
        var that = this;

        return (
            <div className='cd-tabs is-ended'>
                <nav>
                    <ul className='cd-tabs-navigation'>
                        {
                            this.props.header.map(function (t, index) {
                                return <li key={index} onClick={that.selectTab.bind(that, index)}>
                                    <a className={index == that.state.select ? 'selected' : ''} > {t.txt} </a>
                                </li>
                            })
                        }
                    </ul>
                </nav>
                <Content 
                    header={this.props.header} 
                    contents={this.props.contents} 
                    type={this.props.type} 
                    selected={this.state.select}/>
            </div>
        )
    }
}