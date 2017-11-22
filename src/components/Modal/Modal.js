import React from 'react';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleOpenModal() {
        this.setState({ isOpen: true });
    }

    handleCloseModal() {
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <div>
                <button id={this.props.triggerId} onClick={this.handleOpenModal.bind(this)} style={{ display: 'none' }} > Trigger Modal </button>
                <ReactModal
                    isOpen={this.state.isOpen}
                    contentLabel={this.props.label}
                    onRequestClose={this.handleCloseModal.bind(this)}
                    className={'modal-dialog modal-lg ' + this.props.id}
                    overlayClassName={'modal fade in ' + (this.props.haveOverflow ? 'haveOverflow' : '')}
                >
                    {this.props.children}
                    <button className='closeModal' onClick={this.handleCloseModal.bind(this)} style={{ display: 'none' }}> Close Modal </button>
                </ReactModal>
            </div>
        )
    }
}