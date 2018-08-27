import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class Locations extends Component{

	state = {
		query:'',
		showingPlaces: this.props.places

	}

	updateQuery = (query) => {
		//Updating the query while typing in the input field
		this.setState({query});
		console.log(query);

			    if(query){
			    	const matchLocation = new RegExp(escapeRegExp(this.state.query), 'i')
					this.state.showingPlaces = this.props.places.filter(()=> matchLocation.test(this.props.places.name))			
				} else{
					this.state.showingPlaces = this.props.places
					console.log(this.state.showingPlaces)
				}
	}


	render(){
	    const places = this.props.places;
	    const { query } = this.state



		return(
          <div className='containerList'>
	            <div className='containerSearchField'>
	              <div className='titleOfApp'>
	                  <h1 aria-label={'GoogleMapsProject'}>GoogleMapsProject</h1>
	              </div>

	              <div className='inputAndFilterArea'>
	                    <form>
	                      <input 
	                      id="place name"
	                      type="text" 
	                      placeholder="Search Location"
	                      value={this.state.query}
	                      onChange={(e) => this.updateQuery(e.target.value)}
	                      />
	                      <button aria-label="Submit" type="submit">SEARCH (ICON)</button>
	                    </form>
	              </div>  
	            </div>

	          <div className='search-location-results'>
		            <ol className='location-list'>
		            {
		                this.state.showingPlaces.map(place =>
		                    <li key={place.name} className='locationListItem'>
			                  <a 
			                  href='#' 
			                  onKeyDown={(e) => (e.keyCode===13) ? this.props.changeMarker(place) : ''}
			                  onKeyUp={() => setTimeout(() => this.props.defaultMarker(place),3500)}
			                  onMouseDown={() => setTimeout(() => this.props.changeMarker(place),500)}
			                  onMouseUp={() => setTimeout(() => this.props.defaultMarker(place),3500)}
			                  >
			                  {place.name}
			                  </a>
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