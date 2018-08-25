import React, { Component } from 'react';

class Modal extends Component{

render(){
  const { show, handleClose } = this.props;  
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  let info;

    return (
      <div className={showHideClassName}>
        <div className='modal-main'>
          <p>
          {this.props.place.info}
          </p>
          <button
            onClick={() => this.props.handleClose(this.props.place)}
          >
            Close
          </button>
        </div>
      </div>
      )}
}

export default Modal;