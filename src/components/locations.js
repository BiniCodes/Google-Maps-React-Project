import React, { Component } from 'react';

class Locations extends Component{

	state = {
		query:''
	}

	updateQuery = (query) => {
		//Updating the query while typing in the input field
		this.setState({query})
	}

	render(){
	    const places = this.props.places;
	    const { query } = this.state

	    let showingPlaces;
	    if(query){
			showingPlaces = places.filter(()=> query.test(places.name))
		} else{
			showingPlaces = places;
			console.log(places);
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
		                    <li key={place.name} className='locationListItem'>{ place.name }</li>
		                    )
		            }
		            </ol> 
	          </div>
	        </div>
		)
	}
}

export default Locations;