import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Loc from './loc.js'
import Modal from './modal.js'


class Locations extends Component{

	state = {
		query:'',
	}

	updateQuery = (query) => {
		//Updating the query while typing in the input field
		this.setState({query})
	}

	/*handleClick(e) {
		alert('name was clicked');
		e.preventDefault();
	}*/

	render(){
	    const places = this.props.places;
	    const { query } = this.state

	    let showingPlaces;
	    if(query){
	    	const matchLocation = new RegExp(escapeRegExp(this.state.query), 'i')
			showingPlaces = places.filter(()=> matchLocation.test(places.name))			
		} else{
			showingPlaces = places
			console.log(places)
		}

		return(
          <div className='containerList'>
	            <div className='containerSearchField'>
	              <div className='titleOfApp'>
	                  <h1 >GoogleMapsProject</h1>
	              </div>

	              <div className='inputAndFilterArea'>
	                    <form>
	                      <input 
	                      type="text" 
	                      placeholder="Search Location"
	                      value={this.state.query}
	                      onChange={(e) => this.updateQuery(e.target.value)}
	                      />
	                      <button type="submit">SEARCH (ICON)</button>
	                    </form>
	              </div>  
	            </div>

	          <div className='search-location-results'>
		            <ol className='location-list'>
		            {
		                showingPlaces.map(place =>
		                    <li key={place.name} className='locationListItem'>
		                        <Modal show={place.show} place={ place } handleClose={this.props.hideModal} >
			                  </Modal>
			                  <a href='#' onClick={() => this.props.showModal(place)}>{place.name}</a>
		                    </li>
		                    )
		            }
		            </ol> 
	          </div>
	        </div>
		)
	}
}

export default Locations;