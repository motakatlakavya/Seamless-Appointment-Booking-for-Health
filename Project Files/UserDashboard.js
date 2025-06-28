import React from "react";

function UserDashboard() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Dashboard</h2>
      <p style={styles.text}>Hello! From this dashboard you can:</p>
      <ul style={styles.list}>
        <li>Browse available doctors</li>
        <li>Book appointments</li>
        <li>Manage your appointment history</li>
        <li>Cancel or reschedule existing bookings</li>
      </ul>
    </div>
  );
}

const styles = {
  container: { padding: "30px", fontFamily: "Arial" },
  heading: { color: "#27ae60" },
  text: { fontSize: "16px" },
  list: { paddingLeft: "20px", fontSize: "15px" }
};

export default UserDashboard;
