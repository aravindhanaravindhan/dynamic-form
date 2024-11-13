// /src/components/Tab.js
import React from "react";

const Tab = ({ activeTab, setActiveTab, sections }) => {
  return (
    <div className="tab-container">
      {Object.keys(sections).map((section) => (
        <button
          key={section}
          className={`tab ${activeTab === section ? "active" : ""}`}
          onClick={() => setActiveTab(section)}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default Tab;
