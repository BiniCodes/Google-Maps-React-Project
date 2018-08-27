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
							tabIndex='0'
							key={place.name}
							icon={place.icon}
							id={place.marker.lat}
							position={{ lat: place.marker.lat, lng: place.marker.lng }}
							onClick={() => props.showModal(place)}
						>
							<Modal info={props.info} show={place.show} place={ place } places={props.places} handleClose={props.hideModal} >
			             	</Modal>
						</Marker>
					)
				
				return(
				<div>
					<GoogleMap
						defaultCenter = {{ lat: 40.417201, lng: -3.703598 }}
						defaultZoom = { 15 }
					>
						{markers}
					</GoogleMap>					
				</div>
);
}
))



export default MyMap;