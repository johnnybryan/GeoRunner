import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactStreetview from 'react-google-streetview';
// import { ABSOLUTE } from 'relateurl';

class App extends Component {
  constructor() {
    super ();
    this.state = [{
      location: [{ lat: 46.9171876, lng: 17.8951832 }, 'unknown'],
      country: location[1],
      streetView: {
        position: location[0],
        pov: {
          heading: 100,
          pitch: 0
        },
        zoom: 1,
        showRoadLabels: false,
        addressControl: false,
        linksControl: false,
      }
    }];
    this.resetMap = this.resetMap.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // componentDidMount() {
  //   this.resetMap();
  // }

  resetMap() {
    console.log('map reset');
    const locations = [
      [{ lat: 40.723102, lng: -73.944107 }, 'brooklyn'],
      [{ lat: 54.787284, lng: 32.063848 }, 'russia'],
      [{ lat: 15.663209, lng: -96.512044 }, 'mexico'],
      [{ lat: 42.155043, lng: 76.734303 }, 'kyrgyzstan'],
      [{ lat: 9.148677, lng: -75.776268 }, 'peru'],
      [{ lat: 2.677230, lng: 37.247880 }, 'kenya'], 
    ];
    let newLocation = locations[Math.floor(Math.random()*(locations.length))];
    console.log(newLocation[1]);
    const newPosition = newLocation[0];
    const newCountry = newLocation[1];
    this.setState({
      location: newLocation,
      country: newCountry,
      streetView: {
        position: newPosition,
        pov: {
          heading: 100,
          pitch: 0
        },
        zoom: 1,
        showRoadLabels: false,
        addressControl: false,
        linksControl: false,
      }
    })
  }

  handleButtonClick() {
    console.log('button clicked')
    const input = window.prompt('take a guess');
    console.log('guess ' + input);
    console.log('country: ' + this.state.country);
    if (input.toLowerCase() === this.state.country) {
      alert('you are the geodude');
      this.resetMap();
    } else {
      alert('guess again my friend');
      this.resetMap();
    }
  }
  
  render () {
    const googleMapsApiKey = 'AIzaSyAG8pD29eYb7EnZNrNFinFbmMtJiqqnzKI';
    return (
      <div className='app' style={{width: '100%', height: '100%', backgroundColor: '#eeeeee'}}>
        <button className='button' onClick={this.handleButtonClick}>Click me</button>
        <ReactStreetview
          apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={this.state.streetView}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
export default App;