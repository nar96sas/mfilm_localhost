import React from 'react';
import SubmitButton from '../Button/SubmitButton.js';

export default class CommentForm extends React.Component {
    render() {
        return (
            <div className='detail-film-comment'>
                <h3 className='title-bl'>Bình luận</h3>
                <div className='comment-area-block'></div>
                <div className='row form-bl'>
                    <form>
                        <div className='col-md-9'>
                            <textarea name='content' className='comment-text-area' placeholder='Viết nhận xét của bạn'></textarea>
                        </div>
                        <SubmitButton buttonClass='item-reg-btn-s submit_comment' txt='Nhận xét' />
                        <input type='hidden' id='objectTypeCode' name='objectTypeCode' value='films' />
                        <input type='hidden' id='id' name='id' value='' />
                        <input type='hidden' id='object_index' name='object_index' value='0' />
                    </form>
                </div>
            </div>
        )
    }
}