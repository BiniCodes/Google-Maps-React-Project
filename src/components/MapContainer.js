
import React, { Component } from 'react';
import MyMap from './Map.js';


class MapContainer extends Component{ 
	render() {
		return(
			<div role='application' className='containerMap'>
			{/*Display the MapContainer and set API key, size of the map*/}
				<MyMap
					info={this.props.info}
					showModal={this.props.showModal}
					hideModal={this.props.hideModal}
					places={this.props.places} 
					/*Add own API key here*/
					googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyDv_AT1NaiOVMyf6BWTV1Iy9euK70eYTPk'}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `750px`, width: `100%` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
       		</div>
			);
	}
}

export default MapContainer;