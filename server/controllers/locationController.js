const Location = require('../models/locationModel');

// const locations = [
//   [{ lat: 46.9171876, lng: 17.8951832 }, 'hungary'],
//   [{ lat: 55.749445, lng: 37.624346 }, 'russia'],
//   [{ lat: 15.663209, lng: -96.512044 }, 'mexico'],
//   [{ lat: 42.131053, lng: 77.007336 }, 'kyrgyzstan'],
//   [{ lat: 48.851774, lng: 2.349619 }, 'france'],
//   [{ lat: 29.979069, lng: 31.132831 }, 'egypt'], 
//   [{ lat: 40.71484, lng: -73.99805 }, 'usa'], 
//   [{ lat: 47.804216, lng:  107.528345}, 'mongolia'],
//   [{ lat: 35.391850, lng:  138.606416}, 'japan'],
//   [{ lat: -1.377668, lng:  34.893306}, 'kenya'],
// ];

const locationController = {};

locationController.getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find({});
    console.log(locations);
    res.locals.locations = locations;
    return next();
  } catch (err) {
    return next('Error in locationController.getLocations ' + JSON.stringify(err));
  }
};

locationController.addLocation = async (req, res, next) => {
  const { coordinates, country } = req.body;
  try {
    const newLocation = await Location.create({ coordinates, country });
    res.locals.location = newLocation;
    return next();
  } catch (err) {
    return next('Error in locationController.addLocation ' + JSON.stringify(err));
  }
};

module.exports = locationController;