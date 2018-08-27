import React, { Component } from 'react';

//With help from: https://codepen.io/alligatorio/pen/aYzMKL

class Modal extends Component{

render(){
  const { show, place } = this.props;  
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  let info = this.props.info;

    return (
      <div className={showHideClassName}>
        <div tabIndex='0' className='modal-main'>
          <div>
          <ol>
          {		(info != null) ?
	          	info.map(i => {
	          		if(place.id === i.id){
	          			return(
	          		<li className='modalInfo' key={i.id}>
		                {i.name + ' '}
		                {i.location.formattedAddress + ' '}
	             	 </li>
	             	 );
	             	}
	          	}) : alert('Oops, sorry. Something went wrong. Please refresh the page!')		
          }
    	  </ol>	
          </div>
          <button
          	aria-label="Close"
          	className='button-modal'
          	tabIndex='0'
            onClick={() => this.props.handleClose(this.props.place)}
          >
            Close
          </button>
        </div>
      </div>
      )}
}

export default Modal;