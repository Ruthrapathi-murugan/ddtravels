import React from "react";

const Contact = () => {
  return (
    
    <section
      id="contact"
      style={{
        padding: "20px",
        borderTop: "5px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "20px",
      }}
    >
      {/* Contact Form */}
      <div style={{ flex: 1, paddingRight: "20px",  alignItems:"center"}}>
        <h1>Contact Us</h1>
        <br></br>
        <p>
          Have questions? We'd love to hear from you! Please fill out the form
          below, and we’ll get back to you shortly.
        </p>
        <form
          action="mailto:support@travelnow.com"
          method="POST"
          encType="text/plain"
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div style={{ flex: 1, paddingLeft: "100px", textAlign: "left" }}>
        
        <h2>Contact Details</h2>
        <br></br>
        <p>
          <strong>Email:</strong> deerey16@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 95009-96626
        </p>
        <p>
          <strong>Address:</strong> Coimbatore
        </p>
      </div>
    </section>
   
  );
};

export default Contact;
