import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
   
    
     <div>
     <Modal
     isOpen = {!!props.selectedOption}
     onRequestClose = {props.closeModal}
     contentLabel = "Selected Option"
     closeTimeoutMS = {200}
     className = 'modal'
     >
     <div>
        <h3 className = 'modat_title'>Selected Option</h3>
        {props.selectedOption && <p className = 'modal_body'>{props.selectedOption}</p>}
        <button className = 'button' onClick = {props.closeModal}>Get out of here!</button>
     </div>
     
     </Modal>
     </div>
 )


export default OptionModal;