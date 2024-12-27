import React from "react";
import "../App.css"; // Import your global styles

const Packages = () => {
  return (
    
    <section id="packages" className="packages-section" style={{
      padding: "120px 50px"}}>
      <div className="packages-header">
        <h1>Travel Packages</h1>
        <p>
          Choose from a wide range of travel packages designed to suit every
          budget and preference. Whether you're looking for luxury escapes,
          adventure trips, or family vacations, we've got you covered.
        </p>
      </div>
      <div className="packages-container">
        <div className="package-card">
          <h2>Luxury Getaways</h2>
          <p>Experience the ultimate luxury in exotic destinations.</p>
        </div>
        <div className="package-card">
          <h2>Adventure Trips</h2>
          <p>Gear up for thrilling adventures in stunning locations.</p>
        </div>
        <div className="package-card">
          <h2>Family Vacations</h2>
          <p>Create unforgettable memories with your loved ones.</p>
        </div>
      </div>
    </section>
  
  );
};

export default Packages;
