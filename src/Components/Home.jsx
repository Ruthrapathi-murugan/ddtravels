import React from "react";
import "./Home.css"; // External CSS for styling

const Home = () => {
  return (
    <>
    <div> 
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to DD Holidays and Travels from Coimbatore</h1>
          <p>Your gateway to exploring the world. Let's make your travel dreams come true!</p>
        </header>
      </div>
      <div>
        <br></br>
        <h3>TOURS AND TRAVELS IN COIMBATORE</h3>
        <p style={{ textAlign: "center" }}>
          DD Holidays and Travels, the leading Tours and Travels service in Coimbatore, offers a diverse range of travel options, including 4-seater, 6-seater, and 7-seater car rentals, 12-seater, 14-seater, and 17-seater Tempo Traveller Rentals, Coach Rentals, as well as mini bus and bus rental services. We specialize in accommodating groups of various sizes, providing the comfort and space you need for your travels in Coimbatore.
        </p>
      </div>
      </div>
    </>
  );
};

export default Home;
