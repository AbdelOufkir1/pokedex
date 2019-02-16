import React from 'react'
import './modal.css'


const Modal = (props) => {
    const showHideClassName = props.showState ? "modal display-block" : "modal display-none";
  console.log('showState',props.showState)
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <button onClick={props.hideModal}>close</button>
        </section>
      </div>
    );
  };

export default Modal;