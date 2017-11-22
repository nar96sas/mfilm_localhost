import React from 'react';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    updateValue(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className='form-groups'>
                <select
                    name={this.props.type}
                    className={this.props.type == 'category' ? 'se-tl' : ''}
                    value={this.state.value == '' ? this.props.defaultValue : this.state.value}
                    onChange={this.updateValue.bind(this)}>
                    {
                        this.props.itemFilter.map((item, index) => <option key={index} value={index} > {item} </option>)
                    }
                </select>
            </div>
        )
    }
}