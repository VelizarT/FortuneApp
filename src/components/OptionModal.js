import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => {
    
    const customStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    
    return (

    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.onCloseModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal">
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.onCloseModal}>Okay</button>
    </Modal>
)};


export default OptionModal;