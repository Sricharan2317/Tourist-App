import React, { useState } from "react";
import "./FilterSidebar.css";

const FilterSidebar = ({
  onSelectStates,
  isSidebarOpen,
  toggleSidebar,
  stateOptions = [],
}) => {
  const [selectedStates, setSelectedStates] = useState(["All"]);

  const states = ["All", ...stateOptions];

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

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar-container ${isSidebarOpen ? "open" : "closed"}`}>
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
      </div>

      {/* Toggle Arrow (ALWAYS VISIBLE) */}
      <button
        className={`sidebar-toggle ${isSidebarOpen ? "open" : "closed"}`}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isSidebarOpen ? "❮" : "❯"}
      </button>
    </>
  );
};

export default FilterSidebar;

