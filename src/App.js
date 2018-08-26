import React, { Component } from 'react';
import './App.css';
import Locations from'./components/locations.js';
import MapContainer from './components/MapContainer.js';
import defaulIcon from './defaultIcon.png'



class App extends Component {

  state ={
    locations: [
       {name: 'Place Dummy eins',
         info: 'info1',
         show: false,
         marker:{lat: 40.417192, lng: -3.703518},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        },
        {name: 'Place Dummy zwei',
         info: 'info2', 
         show: false,
         marker:{lat:40.418409, lng: -3.702847},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        },
        {name: 'Place Dummy drei',
         info: 'info3', 
         show: false,
         marker:{lat:40.416963, lng: -3.706892},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        },
        {name:'Place Dummy vier',
        info: 'info4',
        show: false,
         marker:{lat:40.416318, lng: -3.701581},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        }, 
        {name:'Place Dummy fünf',
        info: 'info5',
        show: false,
         marker:{lat:40.418115, lng: -3.702493},
         icon: {url:'http://www.google.com/mapfiles/marker.png'}  
        }     
    ],

    api:[]
  }

 componentDidMount() {
fetch('https://api.foursquare.com/v2/venues/explore?client_id=XRZY1VTWHC2AJXC14PLVLALKCV3LDBGJLJZGCSNE2HL0TRGS&client_secret=5DVLFSE0DENXZNVRYJ04ZVKIT0MEQVJ0YM3RP32QRV3DACYX&v=20180323&limit=1&ll=40.412631,-3.718276&query=coffee')
    .then(response =>
      response.json()
      )
    .then(data => console.log(data.response.groups[0].items[0].venue.name))
    .then((categories) => {
      this.setState({api: categories})
    })
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
        <div className='container'>
            <Locations places = {this.state.locations} changeMarker={this.changeMarker} defaultMarker={this.defaultMarker}/>
            <MapContainer places={this.state.locations} showModal={this.showModal} hideModal={this.hideModal}/>
      </div>
    </div>
    );
  }
}

export default App;
