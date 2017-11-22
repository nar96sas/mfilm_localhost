import React from 'react';
import { removeDiacritic } from '../../static/js/utils.js'

export default class Tags extends React.Component {
    render() {
        const { nameVN, nameEn, directors, starings } = this.props;
        var tags = [nameVN, nameEn];
        tags = tags.concat(directors, starings);

        return (
            <div className='tags-details'>
                <div className='tags-tk'>TỪ KHOÁ:</div>
                <div className='tags-a'>
                    {
                        tags.map(function(tag, index){
                            return <a key={index}> {removeDiacritic(tag)} </a>
                        })
                    }
                </div>
            </div>
        )
    }
}