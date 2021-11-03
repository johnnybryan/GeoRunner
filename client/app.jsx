import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactStreetview from 'react-google-streetview';
import { ABSOLUTE } from 'relateurl';

class App extends Component {
  render () {

    const googleMapsApiKey = 'AIzaSyAG8pD29eYb7EnZNrNFinFbmMtJiqqnzKI';
    const streetViewPanoramaOptions = {
      position: { lat: 46.9171876, lng: 17.8951832 },
      pov: {
        heading: 100,
        pitch: 0
      },
      zoom: 1,
      showRoadLabels: false,
      addressControl: false,
      linksControl: false,
    }
    return (
      <div classname="app" style={{width: '100%', height: '100%', backgroundColor: '#eeeeee'}}>
        <ReactStreetview
          apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
        
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
export default App;