import React, { Component } from 'react';

//With help from: https://codepen.io/alligatorio/pen/aYzMKL

class Modal extends Component{

render(){
  const { show, handleClose , place } = this.props;  
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  let info = this.props.info;

    return (
      <div className={showHideClassName}>
        <div tabindex='0' className='modal-main'>
          <p>
          <ol>
          {		
	          	info.map(i => {
	          		if(place.id === i.id){
	          			return(
	          		<li className='modalInfo' key={i.id}>
		                {i.name + ' '}
		                {i.location.formattedAddress + ' '}
	             	 </li>
	             	 )
	             	} else{
	             		''
	             	}
	          	}) 			
          }
    	  </ol>	
          </p>
          <button
          	aria-label="Close"
          	className='button-modal'
          	tabindex='0'
            onClick={() => this.props.handleClose(this.props.place)}
          >
            Close
          </button>
        </div>
      </div>
      )}
}

export default Modal;