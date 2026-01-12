import React, { useState, useEffect } from 'react';
import './PlaceModal.css';

function PlaceModal({ initialData = {}, onSave, onClose, existingStates = [] }) {
  const [formData, setFormData] = useState({
    id: initialData?.id || null,
    name: initialData?.name || '',
    image: initialData?.image || '',
    description: initialData?.description || '',
    longDescription: initialData?.longDescription || '',
    state: initialData?.state || '',
  });

  const [stateOptions, setStateOptions] = useState(existingStates);

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData?.id || null,
        name: initialData?.name || '',
        image: initialData?.image || '',
        description: initialData?.description || '',
        longDescription: initialData?.longDescription || '',
        state: initialData?.state || '',
      });
    }
  }, [initialData]);

  useEffect(() => {
    setStateOptions(existingStates);
  }, [existingStates]);

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

          {/* Dropdown select for states */}
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select a State</option>
            {stateOptions.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <textarea
            name="Description"
            placeholder="Short Description"
            value={formData.Description}
            onChange={handleChange}
            rows={2}
            required
          />
          <textarea
            name="LongDescription"
            placeholder="Long Description"
            value={formData.LongDescription}
            onChange={handleChange}
            rows={4}
            required
          />
          <div className="button-row">
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlaceModal;

