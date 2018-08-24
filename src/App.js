import React, { Component } from 'react';
import './App.css';
import Locations from'./components/locations.js';


class App extends Component {

  state ={
    locations: [
      {name: 'Place Dummy1'},
      {name:'Place Dummy2'},
      {name:'Place Dummy3'},
      {name:'Place Dummy4'},
      {name:'Place Dummy5'},     
    ]
  }

  render() {

    return (
      <div className="App">
        <div className='container'>
            <Locations places = {this.state.locations}/>
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
