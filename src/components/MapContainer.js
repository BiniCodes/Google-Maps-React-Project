
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MyMap from './Map.js';
import App from './../App.js';


class MapContainer extends Component{ 
	render() {
		return(
			<div className='containerMap'>
				<MyMap
					showModal={this.props.showModal}
					hideModal={this.props.hideModal}
					places={this.props.places} 
					googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyDv_AT1NaiOVMyf6BWTV1Iy9euK70eYTPk'}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `750px`, width: `80%` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
       			{ console.log( this.props.places ) }
       		</div>
			);
	}
}

export default MapContainer;