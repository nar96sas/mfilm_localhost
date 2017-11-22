import React from 'react';
import { Link } from 'react-router-dom';

export default class Breadcrum extends React.Component {
    render() {
        var path = this.props.path.split('/');

        return (
            <div className='container'>
                {
                    path.map((p, index) => {
                        return (
                            <Link
                                key={index}
                                to={index >= this.props.pathData.length ? '#' : this.props.pathData[index]}
                                className={index == path.length - 1 ? 'bread-active' : ''} >
                                <i className={index == 0 ? 'fa fa-home' : 'fa fa-angle-right'} aria-hidden='true'> </i>
                                {path[index]}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
