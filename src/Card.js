import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ place, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={place.image} alt={place.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{place.name}</h3>
        <p className="card-description">{place.Description}</p>
        <div className="card-buttons">
          <button className="explore-btn" onClick={() => navigate(`/place/${place.id}`)}>
            Explore
          </button>
          <button className="edit-btn" onClick={() => onEdit(place)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(place.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;