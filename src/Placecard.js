import React from "react";

function PlaceCard({ place }) {
  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "20px", padding: "16px", borderRadius: "8px" }}>
      <img src={place.image} alt={place.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h2>{place.name}</h2>
      <p>{place.shortDescription}</p>
      <p><strong>State:</strong> {place.state}</p>
    </div>
  );
}

export default PlaceCard;