const express = require('express');
const app = express();
// const path = require('path');

const PORT = 3000;

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

const locationString = '[{"coordinates":{"lat":46.9171876,"lng":17.8951832},"country":"hungary"},{"coordinates":{"lat":55.749445,"lng":37.624346},"country":"russia"},{"coordinates":{"lat":15.663209,"lng":-96.512044},"country":"mexico"},{"coordinates":{"lat":42.131053,"lng":77.007336},"country":"kyrgyzstan"},{"coordinates":{"lat":48.851774,"lng":2.349619},"country":"france"},{"coordinates":{"lat":29.979069,"lng":31.132831},"country":"egypt"},{"coordinates":{"lat":40.71484,"lng":-73.99805},"country":"usa"},{"coordinates":{"lat":47.804216,"lng":107.528345},"country":"mongolia"},{"coordinates":{"lat":35.39185,"lng":138.606416},"country":"japan"},{"coordinates":{"lat":-1.377668,"lng":34.893306},"country":"kenya"}]'
const newLocationString = '[{"coordinates":{"lat":46.9171876,"lng":17.8951832},"country":"hungary"},{"coordinates":{"lat":55.749445,"lng":37.624346},"country":"russia"},{"coordinates":{"lat":15.663209,"lng":-96.512044},"country":"mexico"},{"coordinates":{"lat":42.131053,"lng":77.007336},"country":"kyrgyzstan"},{"coordinates":{"lat":48.851774,"lng":2.349619},"country":"france"},{"coordinates":{"lat":29.979069,"lng":31.132831},"country":"egypt"},{"coordinates":{"lat":40.71484,"lng":-73.99805},"country":"usa"},{"coordinates":{"lat":47.804216,"lng":107.528345},"country":"mongolia"},{"coordinates":{"lat":35.39185,"lng":138.606416},"country":"japan"},{"coordinates":{"lat":-1.377668,"lng":34.893306},"country":"kenya"},{"coordinates":{"lat":33.971836,"lng":-116.166548},"country":"usa"},{"coordinates":{"lat":-22.951848,"lng":-43.210001},"country":"brazil"},{"coordinates":{"lat":64.206597,"lng":-15.728497},"country":"iceland"}]'

// const locations = [
//   { coordinates: { lat: 46.9171876, lng: 17.8951832 }, country: 'hungary' },
//   { coordinates: { lat: 55.749445, lng: 37.624346 }, country: 'russia' },
//   { coordinates: { lat: 15.663209, lng: -96.512044 }, country: 'mexico' },
//   { coordinates: { lat: 42.131053, lng: 77.007336 }, country: 'kyrgyzstan' },
//   { coordinates: { lat: 48.851774, lng: 2.349619 }, country: 'france' },
//   { coordinates: { lat: 29.979069, lng: 31.132831 }, country: 'egypt' }, 
//   { coordinates: { lat: 40.71484, lng: -73.99805 }, country: 'usa' }, 
//   { coordinates: { lat: 47.804216, lng: 107.528345}, country: 'mongolia' },
//   { coordinates: { lat: 35.391850, lng: 138.606416}, country: 'japan' },
//   { coordinates: { lat: -1.377668, lng: 34.893306}, country: 'kenya' },
//   { coordinates: { lat: 33.971836, lng: -116.166548}, country: 'usa' },
//   { coordinates: { lat: -22.951848, lng: -43.210001}, country: 'brazil' },
//   { coordinates: { lat: 64.206597, lng: -15.728497}, country: 'iceland' },
//   ];

app.use(express.json());

app.get('/locations', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080').send(newLocationString);
})

app.post('/locations', (req, res) => {
  res.json(req.body);
}) 

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Listening on port ${PORT}...`)
}); 