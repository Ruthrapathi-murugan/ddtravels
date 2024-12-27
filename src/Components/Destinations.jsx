import React from "react";
import ootyImage from "../assets/ooty.jpeg";// Replace with the actual image path
import Athirapally from "../assets/Athirapally.jpeg";
import maldives from "../assets/maldives.jpeg";
import kodaikanal from "../assets/kodaikanal.jpeg";

const Destinations = () => {
  return (
    <section
      id="destinations"
      style={{
        padding: "100px 50px",
        borderTop: "5px solid #f4a261",
        backgroundColor: "#fdfdfd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2a9d8f", marginBottom: "20px" }}>
        Explore Our Destinations
      </h1>
      <p style={{ textAlign: "center", fontSize: "18px", color: "#264653" }}>
        Whether you wish to discover the cultural heritage of Coimbatore, serene hill
        stations, or exotic destinations worldwide, we bring you the best travel
        experiences. Start your journey with us today!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {/* Local destinations */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <img
            src={ootyImage}
            alt="Ooty"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "#e76f51" }}>Ooty</h2>
            <p style={{ color: "#6d6875" }}>
              Known as the "Queen of Hill Stations," Ooty is famous for its tea
              gardens, breathtaking views, and serene environment.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
         <img
            src={Athirapally}
            alt="Ooty"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "#e76f51" }}>Athirappilly Falls</h2>
            <p style={{ color: "#6d6875" }}>
              Located just a short drive from Coimbatore, these stunning waterfalls
              offer a refreshing escape into nature.
            </p>
          </div>
        </div>

        {/* International destinations */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <img
            src={maldives}
            alt="maldeives"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "#e76f51" }}>Maldives</h2>
            <p style={{ color: "#6d6875" }}>
              Experience the pristine beaches, turquoise waters, and luxurious resorts
              of the Maldives, a tropical paradise.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
            <img
            src={kodaikanal}
            alt="kodaikanal"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "#e76f51" }}>Kodaikanal</h2>
            <p style={{ color: "#6d6875" }}>
              Discover the majestic peaks, charming villages, and thrilling adventures
              that await in the Alps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
