import React, { Component } from 'react';
import './App.css';
import Locations from'./components/locations.js';
import MapContainer from './components/MapContainer.js';
import defaulIcon from './defaultIcon.png'



class App extends Component {

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

    data:[]
  }

 componentDidMount() {
fetch('https://api.foursquare.com/v2/venues/search?client_id=XRZY1VTWHC2AJXC14PLVLALKCV3LDBGJLJZGCSNE2HL0TRGS&client_secret=5DVLFSE0DENXZNVRYJ04ZVKIT0MEQVJ0YM3RP32QRV3DACYX&v=20180323&limit=5&ll=40.412631,-3.718276&categoryId=4d4b7104d754a06370d81259')
    .then(response =>
      response.json()
      )
    .then((data) => this.setState({data: data.response.venues}))
    .catch(error =>
      console.log('Fetch did not work', error)
        // Code for handling errors
    )
  }

//https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle
  showModal = (place) => {
    const locations = this.state.locations;
    place.show = true;

    this.setState({ locations, });
  }
  
  hideModal = (place) => {
    const locations = this.state.locations;
    place.show = false;

    this.setState({ locations, });
  }

  //https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle
  //https://stackoverflow.com/questions/49511040/how-to-change-google-maps-marker-icon-when-user-clicked-the-marker-icon
  changeMarker = (place) => {
    console.log(place.icon);
    const locations = this.state.locations;
    place.icon = {url:'http://maps.google.com/mapfiles/arrow.png'};

    this.setState({ locations, });
  }
  
  defaultMarker = (place) => {
    const locations = this.state.locations;
    place.icon = {url:'http://www.google.com/mapfiles/marker.png'};

    this.setState({ locations, });
  }


  render() {

    return (
      <div className="App">
        <div tabIndex='-1' className='container'>
            <Locations places = {this.state.locations} changeMarker={this.changeMarker} defaultMarker={this.defaultMarker}/>
            <MapContainer info={this.state.data} tabIndex='-1' aria-role={'application'} places={this.state.locations} showModal={this.showModal} hideModal={this.hideModal}/>
      </div>
    </div>
    );
  }
}

export default App;
