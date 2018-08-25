import React, { Component } from 'react';
import './App.css';
import Locations from'./components/locations.js';


class App extends Component {

  state ={
    locations: [
       {name: 'Place Dummy eins',
         info: 'info1',
         show: false 
        },
        {name: 'Place Dummy zwei',
         info: 'info2', 
         show: false
        },
        {name: 'Place Dummy drei',
         info: 'info3', 
         show: false
        },
        {name:'Place Dummy vier',
        info: 'info4',
        show: false
        }    
    ],
  }

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
