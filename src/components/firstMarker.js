//Marker component

import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

class FirstMarker extends Component{

	render(){
		return(
			<Marker
			position={{ lat:40.412631, lng: -3.718276 }}
			>
			</Marker>
		);
	}
}

export default FirstMarker;