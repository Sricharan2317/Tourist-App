import React from 'react';
import { useParams } from 'react-router-dom';
import './PlaceDetail.css'; 

function PlaceDetail({ allPlaces }) {
  const { id } = useParams();
  const place = allPlaces.find((p) => String(p.id) === id);

  if (!place) {
    return <div className="place-detail-error">Place not found.</div>;
  }

  return (
    <div className="place-detail-container">
      <h2 className="place-title">{place.name}</h2>
      <img src={place.image} alt={place.name} className="place-image" />
      <p className="place-description">{place.LongDescription}
      </p>
    </div>
  );
}

export default PlaceDetail;