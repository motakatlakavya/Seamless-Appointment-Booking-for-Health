import React, { useState } from "react";
import axios from "axios";
import registerBg from "../assets/images/p2.png"; // ✅ Corrected import path (relative!)

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, form);
    alert("Registered!");
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${registerBg})` }}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={styles.input}
        />
        <select
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          style={styles.input}
        >
          <option value="user">User</option>
          <option value="doctor">Doctor</option>
        </select>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: `url(${registerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif"
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px"
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#2c3e50"
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Register;
