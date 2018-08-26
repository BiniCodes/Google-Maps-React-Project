//Map commponent

import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps";
import FirstMarker from './firstMarker.js';
import MapContainer from './MapContainer.js';
import Modal from './modal.js';
import defaulIcon from './../defaultIcon.png'


const MyMap = withScriptjs(withGoogleMap((props) => {

				const markers = props.places.map( place => 

						<Marker
							key={place.name}
							icon={place.icon}
							id={place.marker.lat}
							position={{ lat: place.marker.lat, lng: place.marker.lng }}
							onClick={() => props.showModal(place)}
							>
							<Modal show={place.show} place={ place } handleClose={props.hideModal} >
			             	</Modal>
						</Marker>
					)
				
				return(
				<div>
					<GoogleMap
						defaultCenter = {{ lat: 40.417201, lng: -3.703598 }}
						defaultZoom = { 18 }
					>
						<FirstMarker/>
						{markers}
					</GoogleMap>					
				</div>
);
}
))



export default MyMap;