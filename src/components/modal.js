import React, { Component } from 'react';

//With help from: https://codepen.io/alligatorio/pen/aYzMKL

class Modal extends Component{

render(){
	//set variables
  const { show, place } = this.props;  
  let info = this.props.info;
  /*Define variable showHideClassName to set different CSS styles to display and hide the modal 
  *Check the value of 'show' defined in the state locations array of each place
  */
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';


    return (
      <div className={showHideClassName}> 
		{/*Set showHideClassName as className to change CSS style for modal window*/}
        <div tabIndex='0' className='modal-main'>
          <div>
          <ol>
          {		
          	/*If data in info array of state in App.js*/
          	(info != null) ?
          	/*...map through info array and check if the id of place in info array is equal to the id of locations array*/
	          	info.map(i => {
	          		if(place.id === i.id){
	          			return(
		          		<li className='modalInfo' key={i.id}>
		          		{/*If id is the same: Display modal with info from fetched API data from foursquare.com*/}
			                {i.name + ' '}
			                {i.location.formattedAddress + ' '}
			                <p className='attribution'>
		             	  		<a href='https://developer.foursquare.com/docs/resources/categories'> Attribution to: Foursquare.com</a>
		             	 	</p>
		             	 </li>
	             	 );
	             	}
	          	}) : 
				/*If info array is empty, display error message to user*/
	          	alert('Oops, sorry. Something went wrong. Please refresh the page!')		
          }
    	  </ol>	
          </div>
      		{/*Display a Close button in modal window. Witch onClick() the hideModal() function from App.js gets called and the modal window closes */}
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