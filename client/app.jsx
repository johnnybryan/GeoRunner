import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactStreetview from 'react-google-streetview';
import 'regenerator-runtime/runtime'
// import styles from './styles.css'


class App extends Component {
  constructor() {
    super ();
    this.state = {};
    this.resetMap = this.resetMap.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async componentDidMount() {
    //const headers = { 'Content-Type': 'application/json' }
    const response = await fetch('http://localhost:3000/locations/');
    const locations = await response.json();
    console.log(locations[0]);
    let newLocation = locations[Math.floor(Math.random()*(locations.length))];
    const newPosition = newLocation.coordinates;
    const newCountry = newLocation.country;
    
    // const locations = [
    //   [{ lat: 46.9171876, lng: 17.8951832 }, {country: 'hungary'}],
    //   [{ lat: 55.749445, lng: 37.624346 }, {country: 'russia'}],
    //   [{ lat: 15.663209, lng: -96.512044 }, {country: 'mexico'}],
    //   [{ lat: 42.131053, lng: 77.007336 }, {country: 'kyrgyzstan'}],
    //   [{ lat: 48.851774, lng: 2.349619 }, {country: 'france'}],
    //   [{ lat: 29.979069, lng: 31.132831 }, {country: 'egypt'}], 
    //   [{ lat: 40.71484, lng: -73.99805 }, {country: 'usa'}], 
    //   [{ lat: 47.804216, lng:  107.528345}, {country: 'mongolia'}],
    //   [{ lat: 35.391850, lng:  138.606416}, {country: 'japan'}],
    //   [{ lat: -1.377668, lng:  34.893306}, {country: 'kenya'}],
    // ];
    // let newLocation = locations[Math.floor(Math.random()*(locations.length))];
    // const newPosition = newLocation[0];
    // const newCountry = newLocation[1].country;
    let initialScore = 0;
    // console.log(newLocation[1].country);
    // // console.log(initialScore);
    this.setState({
      location: newLocation,
      country: newCountry,
      score: initialScore,
      point: 1,
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

  async resetMap() {
    const response = await fetch('http://localhost:3000/locations/');
    const locations = await response.json();
    console.log(locations[0]);
    let newLocation = locations[Math.floor(Math.random()*(locations.length))];
    const newPosition = newLocation.coordinates;
    const newCountry = newLocation.country;
    // console.log('map reset');
    // const locations = [
    //   [{ lat: 46.9171876, lng: 17.8951832 }, {country: 'hungary'}],
    //   [{ lat: 55.749445, lng: 37.624346 }, {country: 'russia'}],
    //   [{ lat: 15.663209, lng: -96.512044 }, {country: 'mexico'}],
    //   [{ lat: 42.131053, lng: 77.007336 }, {country: 'kyrgyzstan'}],
    //   [{ lat: 48.851774, lng: 2.349619 }, {country: 'france'}],
    //   [{ lat: 29.979069, lng: 31.132831 }, {country: 'egypt'}], 
    //   [{ lat: 40.71484, lng: -73.99805 }, {country: 'usa'}], 
    //   [{ lat: 47.804216, lng:  107.528345}, {country: 'mongolia'}],
    //   [{ lat: 35.391850, lng:  138.606416}, {country: 'japan'}],
    //   [{ lat: -1.377668, lng:  34.893306}, {country: 'kenya'}],
    // ];
    // let newLocation = locations[Math.floor(Math.random()*(locations.length))];
    // const newPosition = newLocation[0];
    // const newCountry = newLocation[1].country;
    // console.log(newLocation[1].country);
    // console.log(this.state.score)
    this.setState({
      location: newLocation,
      country: newCountry,
      score: this.score,
      point: 1,
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

  incrementScore() {
    this.setState({
      score: this.score + this.point
    });
  }

  handleButtonClick() {
    const input = window.prompt('where are you?');
    console.log('guess ' + input);
    console.log('country: ' + this.state.country);
    if (input.toLowerCase() === this.state.country) {
      // if (this.state.score === 10) {
      //   alert('you are the GEO-DUDE');
      //   this.resetMap();
      // }
      alert(`LET'S GO`);
      this.incrementScore();
      this.resetMap();
    } else {
      alert('Nope! Try again');
      this.resetMap();
    }
  }
  
  render () {
    const googleMapsApiKey = 'AIzaSyAG8pD29eYb7EnZNrNFinFbmMtJiqqnzKI';
    return (
      <div className='app'>
        <button className='button' style={buttonStyle} onClick={this.handleButtonClick}>I'm feeling lucky</button>
        <div className='map' style={{width: '100%', height: '100%', backgroundColor: '#eeeeee'}}>
        <ReactStreetview
          apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={this.state.streetView}
        />
        </div>
      </div>
     
    )
  }
}

const buttonStyle = {
  position: 'absolute',
  zIndex: '5',
  textAlign: 'center',
  top: '20px',
  left: '20px',
  width: '150px',
  height: '25px',
  color: 'rgb(209, 209, 18)',
  backgroundColor: 'rgb(36, 131, 185)',
  fontFamily: '\"Roboto\", \"sans-serif\"',
  fontSize: '14px',
  borderRadius: '10px'
}

ReactDOM.render(<App/>, document.getElementById('app'))
export default App;