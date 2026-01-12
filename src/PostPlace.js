import React, { useState, useEffect } from 'react';
import './PlaceModal.css';

function PostPlace({ initialData = {}, onSave, onClose }) {

  const states = [
    'Andhra Pradesh',
    'Telangana',
    'Karnataka',
    'Tamil Nadu',
    'Kerala',
  ];

  const [formData, setFormData] = useState({
    id: initialData?.id || null,
    name: initialData?.name || '',
    image: initialData?.image || '',
    Description: initialData?.Description || '',
    LongDescription: initialData?.LongDescription || '',
    state: initialData?.state || '',  // For dropdown selected state
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData?.id || null,
        name: initialData?.name || '',
        image: initialData?.image || '',
        Description: initialData?.Description || '',
        LongDescription: initialData?.LongDescription || '',
        state: initialData?.state || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{formData.id ? 'Edit Existing Place' : 'Add New Place'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Place Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select a State</option>
            {states.map(state => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <textarea
            name="description"
            placeholder="Short Description"
            value={formData.Description}
            onChange={handleChange}
            rows={2}
            required
          />
          <textarea
            name="longDescription"
            placeholder="Long Description"
            value={formData.LongDescription}
            onChange={handleChange}
            rows={4}
            required
          />
          <div className="button-row">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostPlace;


