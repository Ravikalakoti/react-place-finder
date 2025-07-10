import React from 'react';

function Bookmarks({ bookmarks, onSelect }) {
  if (!bookmarks.length) return null;

  return (
    <div className="bookmarks-list">
      <h3>📚 Bookmarked Places</h3>
      <ul>
        {bookmarks.map((place, index) => (
          <li key={index}>
            <button
              onClick={() => onSelect(place)}
              style={{
                background: 'none',
                border: 'none',
                color: '#007bff',
                textDecoration: 'underline',
                cursor: 'pointer',
                padding: 0,
                font: 'inherit',
              }}
            >
              {place.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookmarks;
