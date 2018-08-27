//Map commponent
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Modal from './modal.js';

/*Display map*/
const MyMap = withScriptjs(withGoogleMap((props) => {
				/*Define const marker variable to save all displayed markers*/
				const markers = 
				/*If places (locations array in App.js state) is not empty...*/
		        (props.places != null) ?
		        /*...map through props.places array*/
				props.places.map( place => 
						/*Add marker for each place, using lat lng from locations array of state from App.js
						*showModal is called when the marker is clicked (onClick function) to display modal window
						* Used the following resource to display markers: https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad
						*/
						<Marker
							tabIndex='0'
							key={place.name}
							icon={place.icon}
							id={place.marker.lat}
							position={{ lat: place.marker.lat, lng: place.marker.lng }}
							onClick={() => props.showModal(place)}
						>
						{/*Modal info component: Opens when marker is clicked*/}
							<Modal info={props.info} show={place.show} place={ place } places={props.places} handleClose={props.hideModal} >
			             	</Modal>
						</Marker>
					) : 
					/*Alert error message if places (locations array in App.js state) is empty */
					alert('Oops, sorry. Something went wrong. Please refresh the page!')
				
				return(
				<div>
					{/*Display the Map with GoogleMap component, defining latlng for defaultCenter and defaultZoom */}
					<GoogleMap
						defaultCenter = {{ lat: 40.417201, lng: -3.703598 }}
						defaultZoom = { 15 }
					>
					{/*Insert markers variable to display markers on map */}
						{markers}
					</GoogleMap>					
				</div>
);
}
))



export default MyMap;