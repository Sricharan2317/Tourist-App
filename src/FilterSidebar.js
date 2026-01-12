
import React, { useState } from "react";
import "./FilterSidebar.css";

const FilterSidebar = ({ onSelectStates }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStates, setSelectedStates] = useState(["All"]);

  const states = [
    "All",
    "Andhra Pradesh",
    "Telangana",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
  ];

  const handleCheckboxChange = (state) => {
    if (state === "All") {
      setSelectedStates(["All"]);
      onSelectStates("All");
      return;
    }

    const updated = selectedStates.includes(state)
      ? selectedStates.filter((s) => s !== state)
      : [...selectedStates.filter((s) => s !== "All"), state];

    const finalSelection = updated.length === 0 ? ["All"] : updated;
    setSelectedStates(finalSelection);
    onSelectStates(finalSelection);
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-content">
        <h3 className="sidebar-title">Filter by State</h3>
        <ul className="state-list">
          {states.map((state) => (
            <li key={state}>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={
                    selectedStates.includes(state) ||
                    (selectedStates.includes("All") && state === "All")
                  }
                  onChange={() => handleCheckboxChange(state)}
                />
                <span className="checkmark" /> {state}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="toggle-arrow"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#555"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#555"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FilterSidebar;

