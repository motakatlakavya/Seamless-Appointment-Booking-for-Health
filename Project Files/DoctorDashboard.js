import React from "react";

function DoctorDashboard() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Doctor Dashboard</h2>
      <p style={styles.text}>Welcome, Doctor. From this dashboard, you can:</p>
      <ul style={styles.list}>
        <li>View your appointment schedule</li>
        <li>Accept or reschedule appointments</li>
        <li>Access patient details and records</li>
        <li>Update appointment status</li>
      </ul>
    </div>
  );
}

const styles = {
  container: { padding: "30px", fontFamily: "Arial" },
  heading: { color: "#2980b9" },
  text: { fontSize: "16px" },
  list: { paddingLeft: "20px", fontSize: "15px" }
};

export default DoctorDashboard;
