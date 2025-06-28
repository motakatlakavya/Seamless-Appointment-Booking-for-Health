import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>DocSpot: Seamless Appointment Booking</h1>
      <p style={styles.text}>
        Easily schedule appointments with trusted doctors from the comfort of your home.
        Browse by specialty, location, and availability.
      </p>

      <div style={styles.buttonContainer}>
        <Link to="/register" style={styles.button}>Register</Link>
        <Link to="/login" style={styles.button}>Login</Link>
      </div>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3209/3209283.png"
        alt="doctor illustration"
        style={{ width: "150px", marginTop: "20px" }}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
    textAlign: "center",
    backgroundColor: "#f4f6f7",
    minHeight: "100vh"
  },
  title: {
    fontSize: "32px",
    color: "#2c3e50"
  },
  text: {
    fontSize: "18px",
    margin: "20px auto",
    maxWidth: "600px"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px"
  }
};

export default LandingPage;
