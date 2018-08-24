import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='containerList'>

            <div className='containerSearchField'>

              <div className='titleOfApp'>
                  <h1 >GoogleMapsProject</h1>
              </div>

              <div className='inputAndFilterArea'>
                    <form>
                      <input type="text" placeholder="SearchLocation"
                      />
                      <button type="submit">SEARCH (ICON)</button>
                    </form>
              </div>  
            </div>

          <div className='search-location-results'>
            <ol className='location-list'>
              <li className='locationListItem'>Place DUMMY</li>
              <li className='locationListItem'>Place DUMMY</li>
              <li className='locationListItem'>Place DUMMY</li>
              <li className='locationListItem'>Place DUMMY</li>
              <li className='locationListItem'>Place DUMMY</li>
            </ol>
            
          </div>
          
        </div>
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
