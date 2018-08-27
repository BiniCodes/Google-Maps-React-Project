import React, { Component } from 'react';
import './App.css';
import Locations from'./components/locations.js';
import MapContainer from './components/MapContainer.js';
import ErrorBoundary from './ErrorBoundary.js'


class App extends Component {
/* Set the state for:
* locations array, empty filteredLocations array, empty data array, empty query string
*/
  state ={
    locations: [
       {name: 'Palacio Real de Madrid',
          id:"4adcda37f964a5200e3c21e3",
         info: 'info1',
         show: false,
         marker:{lat: 40.41793972010854, lng: -3.714258670806885},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        },
        {name: 'Puerta del Sol',
         id:"4adcda37f964a5201f3c21e3",
         info: 'info2', 
         show: false,
         marker:{lat:40.41688502087941, lng: -3.7033783460577343},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        },
        {name: 'Plaza Mayor',
         id:"4adcda37f964a520193c21e3",
         info: 'info3', 
         show: false,
         marker:{lat:40.4155247623987, lng: -3.7074268999350646},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        },
        {name:'Plaza de Cibeles',
        id:"4adcda38f964a520703c21e3",
        info: 'info4',
        show: false,
         marker:{lat:40.41905909997501, lng: -3.6931171834789165},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        }, 
        {name:'Museo Nacional del Prado',
        id:"4adcda37f964a520fd3b21e3",
        info: 'info5',
        show: false,
         marker:{lat:40.41453060120874, lng: -3.692042136243466},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        }     
    ],

    filteredLocations:[] ,

    data:[],
    query:''
  }

//Call componentDidMount() function to perform code inside after the component did mount
 componentDidMount() {
    //Set the state of filteredLocations array equal to the locations array data when the component did mount
    this.setState({filteredLocations: this.state.locations})

    //Fetch the data from third party API when the component did mount
    //Api used: https://developer.foursquare.com/docs/api/venues/search
    fetch('https://api.foursquare.com/v2/venues/search?client_id=XRZY1VTWHC2AJXC14PLVLALKCV3LDBGJLJZGCSNE2HL0TRGS&client_secret=5DVLFSE0DENXZNVRYJ04ZVKIT0MEQVJ0YM3RP32QRV3DACYX&v=20180323&limit=5&ll=40.412631,-3.718276&categoryId=4d4b7104d754a06370d81259')
        //then convert the response to JSON
        .then(response =>
          response.json()
          )
        //Pass JSON data and set the state of data array equal to the json data from the request
        .then((data) => this.setState({data: data.response.venues}))
        //Catch error and console.log error, alert message to user
        .catch(error =>{
            // Code for handling errors
          console.log('Fetch did not work', error);
          alert('Sorry, something went wrong. Please refresh the page!')
          }
          )
  }
  //Update query function
  //Filter function made with the help of the following resource: https://stackoverflow.com/questions/41436253/how-to-filter-list-while-typing-with-input-field

  updateQuery = (query) => {
    //Updating the query while typing in the input field with setstate of query
    this.setState({query});
          //If there is a query...
          if(query){
            //...filter the locations array and check if the typed query is similar to one of the names of the given places. Filtered array is saved in const match
            const match = this.state.locations.filter(l => this.state.query === '' || l.name.toLowerCase().includes(this.state.query) || l.name.includes(this.state.query))
            //filteredLocations array is set equal to filtered locations array called match
            this.setState({filteredLocations : match})
        } else{
            //In case there is no query, set filteredLocations array equal to the locations array
            this.setState({filteredLocations: this.state.locations})
        }
  }

//Modal window functions
//Update state of modal windows made with the help of the following resource: https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle

//showModal function to display modal after action  
  showModal = (place) => {
    //locations variable
    const locations = this.state.locations;
    //sets the state of 'show' of the given place to true to open modal window
    place.show = true;
    //Update state of locations array to display modal window
    this.setState({ locations, });
  }
  
  hideModal = (place) => {
    const locations = this.state.locations;
    //sets the state of 'show' of the given place to false to close modal window
    place.show = false;
    //Update state of locations array to close modal window
    this.setState({ locations, });
  }

  /*Resources used for changing the marker: 
  *https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle
  https://stackoverflow.com/questions/49511040/how-to-change-google-maps-marker-icon-when-user-clicked-the-marker-icon*/

  /*chageMarker function to add effect to marker when list item was clicked
  Changes to array marker*/
  changeMarker = (place) => {
    //locations variable
    const locations = this.state.locations;
    //Set the icon of the given place to the url of the arrow picture for markers
    place.icon = {url:'http://maps.google.com/mapfiles/arrow.png'};
    //Update state of locations array to display new marker
    this.setState({ locations, });
  }
  
  defaultMarker = (place) => {
    //locations variable
    const locations = this.state.locations;
    //Set the icon of the given place to the url of the default marker picture for markers
    place.icon = {url:'http://www.google.com/mapfiles/marker.png'};
    //Update state of locations array to display default marker
    this.setState({ locations, });
  }


  render() {

    return (
      <div className="App">
        <div className='container'>
            {/*Display list of locations and filter input field with Locations component */}
            <ErrorBoundary>
            <Locations updateQuery={this.updateQuery}  places = {this.state.filteredLocations} changeMarker={this.changeMarker} defaultMarker={this.defaultMarker} showModal={this.showModal} hideModal={this.hideModal}/>
            </ErrorBoundary>

            {/*Display google map with markers with MapContainer component*/}
            <ErrorBoundary>
            <MapContainer info={this.state.data} tabIndex='-1'  places={this.state.filteredLocations} showModal={this.showModal} hideModal={this.hideModal}/>
            </ErrorBoundary>
      </div>
    </div>
    );
  }
}

export default App;
