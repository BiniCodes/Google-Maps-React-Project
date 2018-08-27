import React, { Component } from 'react';

class Locations extends Component{

	render(){
	    const places = this.props.places;

		return(
          <div className='containerList'>
	            <div className='containerSearchField'>
	              <div className='titleOfApp'>
	                  <h1>GoogleMapsProject</h1>
	              </div>

	              <div className='inputAndFilterArea'>
	                    <form>
	                      <input 
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
		            	(places != null) ?
		                places.map(place =>
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
		                    ) : ''
		            }
		            </ol> 
	          </div>
	        </div>
		)
	}
}

export default Locations;