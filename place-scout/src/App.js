import React, { useState } from 'react';
import './App.css';
import { LoadScript } from '@react-google-maps/api';
import SearchControls from './components/SearchControls';
import PlaceList from './components/PlaceList';
import Bookmarks from './components/Bookmarks';

const libraries = ['places'];

function App() {
  const [places, setPlaces] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const handleSearch = (location, type) => {
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const loc = results[0].geometry.location;

        service.nearbySearch(
          {
            location: loc,
            radius: 2000,
            type: type,
          },
          (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setPlaces(results);
            } else {
              alert('No results found!');
              setPlaces([]);
            }
          }
        );
      } else {
        alert('Location not found.');
      }
    });
  };

  const handleBookmark = (place) => {
    const exists = bookmarks.some((b) => b.place_id === place.place_id);
    if (!exists) setBookmarks([...bookmarks, place]);
  };

  return (
    <LoadScript googleMapsApiKey="APIKEY" libraries={libraries}>
      <div className="app-container">
        <h1>📍 Place Scout</h1>
        <SearchControls onSearch={handleSearch} />
        <PlaceList places={places} onBookmark={handleBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </LoadScript>
  );
}

export default App;
