import React from 'react';

function PlaceList({ places, onBookmark }) {
  if (!places.length) return null;

  return (
    <div className="place-list">
      <h3>Nearby Places</h3>
      {places.map((place) => (
        <div key={place.place_id} className="place-details-card">
          <h4>{place.name}</h4>
          <p>{place.vicinity}</p>
          <button className="bookmark-btn" onClick={() => onBookmark(place)}>
            📌 Bookmark
          </button>
        </div>
      ))}
    </div>
  );
}

export default PlaceList;
