import React, { Component } from 'react';

class Locations extends Component{

	render(){
		//variable for places
	    const places = this.props.places;

		return(
          <div className='containerList'>
	            <div className='containerSearchField'>
	              <div className='titleOfApp'>
	                  <h1>GoogleMapsProject</h1>
	              </div>
	          {/*Input field to search for places, value is equal to empty query in state of App.js, updateQuery function gets called when an event occurs (user types in input field) and takes event.target.value as parameter*/}
	              <div className='inputAndFilterArea'>
	                    <form>
	                      <input 
	                      aria-label={'Search Location'}
	                      id="place name"
	                      type="text" 
	                      placeholder="Search Location"
	                      value={this.props.query}
	                      onChange={(e) => this.props.updateQuery(e.target.value)}
	                      />
	                    </form>
	              </div>  
	            </div>

	          <div className='search-location-results'>
		            <ol className='location-list'>
		            {
		            	/*If places is not null (array is not empty), map through the places array...  */
		            	(places != null) ?
		                places.map(place =>
		                	/*render list items displaying the names of points of interests defined in locations array in App.js (here:places)
		                	*changeMarker changes function changes default marker to array marker
							*onKeyDown function offers functionality to hit Enter when tabbing through the names in li items
		                	*onKeyUp and onMouseUp changes the marker back to default marker after 3500 ms
		                	*onKeyDown and onClick (with delas of 800ms) changes the marker to arrow marker
		                	*/

		                    <li key={place.name} className='locationListItem'>
			                  <a 
			                  href='#' 
			                  onKeyDown={(e) => (e.keyCode===13) ? this.props.changeMarker(place) : ''}
			                  onKeyUp={() => setTimeout(() => this.props.defaultMarker(place),3500)}
			                  onMouseDown={() => this.props.changeMarker(place)}
			                  onMouseUp={() => setTimeout(() => this.props.defaultMarker(place),3500)}
			                  onClick={() => setTimeout(() => this.props.showModal(place),800)}
			                  >
			                  {place.name}
			                  </a>
		                    </li>
		                    ) : 
		            	/*If places is null (array is empty) alert error message to user  */
							alert('Oops, sorry. Something went wrong. Please refresh the page!')
		            }
		            </ol> 
	          </div>
	        </div>
		)
	}
}

export default Locations;