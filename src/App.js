import React, { Component } from 'react';
import './App.css';
import Locations from'./components/locations.js';


class App extends Component {

  state ={
    locations: [
       {name: 'Place Dummy eins',
         info: 'info1',
         show: false,
         marker:{lat: 40.417192, lng: -3.703518}  
        },
        {name: 'Place Dummy zwei',
         info: 'info2', 
         show: false,
         marker:{lat:40.418409, lng: -3.702847}
        },
        {name: 'Place Dummy drei',
         info: 'info3', 
         show: false,
         marker:{lat:40.416963, lng: -3.706892}
        },
        {name:'Place Dummy vier',
        info: 'info4',
        show: false,
         marker:{lat:40.416318, lng: -3.701581}
        }, 
        {name:'Place Dummy fünf',
        info: 'info5',
        show: false,
         marker:{lat:40.418115, lng: -3.702493}
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



  render() {

    return (
      <div className="App">
        <div className='container'>
            <Locations places = {this.state.locations} showModal={this.showModal} hideModal={this.hideModal}/>
        <div className='containerMap'>
          <div className='mapContainer'>
            <div className='map'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
