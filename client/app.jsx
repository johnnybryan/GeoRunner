import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactStreetview from 'react-google-streetview';
// import { ABSOLUTE } from 'relateurl';

class App extends Component {
  constructor() {
    super ();
    this.state = [{
      location: [{ lat: 46.9171876, lng: 17.8951832 }, 'hungary'],
      country: location[1],
      score: 1,
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
    this.incrementScore = this.incrementScore.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // componentDidMount() {
  //   fetch ('http://localhost:3000/coordinates')
  //     .then(res => res.json())
  //     .then(data => data[Math.floor(Math.random()*data.length)])
  //     .then(data => {
  //       this.setState({
  //         location: data,
  //         country: data[1],
  //         score: this.score,
  //         streetView: {
  //           position: data[0],
  //           pov: {
  //           heading: 100,
  //           pitch: 0
  //           },
  //           zoom: 1,
  //           showRoadLabels: false,
  //           addressControl: false,
  //           linksControl: false,
  //         }
  //       })
  //     })
  // }

  resetMap() {
    console.log('map reset');
    const locations = [
      [{ lat: 46.9171876, lng: 17.8951832 }, 'hungary'],
      [{ lat: 55.749445, lng: 37.624346 }, 'russia'],
      [{ lat: 15.663209, lng: -96.512044 }, 'mexico'],
      [{ lat: 42.131053, lng: 77.007336 }, 'kyrgyzstan'],
      [{ lat: 48.851774, lng: 2.349619 }, 'france'],
      [{ lat: 29.979069, lng: 31.132831 }, 'egypt'], 
      [{ lat: 40.71484, lng: -73.99805 }, 'usa'], 
      [{ lat: 47.804216, lng:  107.528345}, 'mongolia'],
      [{ lat: 35.391850, lng:  138.606416}, 'japan'],
      [{ lat: -1.377668, lng:  34.893306}, 'kenya'],
    ];
    let newLocation = locations[Math.floor(Math.random()*(locations.length))];
    console.log(newLocation[1]);
    console.log(this.state.score);
    const newPosition = newLocation[0];
    const newCountry = newLocation[1];
    this.setState({
      location: newLocation,
      country: newCountry,
      score: this.score,
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
    this.setState((state) => {
      return {
        score: state.score + 1
      }
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
      alert('CORRECTO. PUNTO PARA TI');
      this.incrementScore();
      this.resetMap();
    } else {
      alert('Ayayay try again');
      this.resetMap();
    }
  }
  
  render () {
    const googleMapsApiKey = 'AIzaSyAG8pD29eYb7EnZNrNFinFbmMtJiqqnzKI';
    return (
      <div className='app' style={{width: '100%', height: '100%', backgroundColor: '#eeeeee'}}>
        <button className='guess' onClick={this.handleButtonClick}>I'm feeling lucky</button>
        <button className='scorecard'>High Scores</button>
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