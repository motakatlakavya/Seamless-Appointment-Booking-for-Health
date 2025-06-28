import React from "react";

function AdminDashboard() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Dashboard</h2>
      <p style={styles.text}>Welcome, Admin. From here you can:</p>
      <ul style={styles.list}>
        <li>Approve or reject doctor registrations</li>
        <li>Manage platform users</li>
        <li>Monitor appointments and platform usage</li>
        <li>Ensure policy compliance</li>
      </ul>
    </div>
  );
}

const styles = {
  container: { padding: "30px", fontFamily: "Arial" },
  heading: { color: "#e67e22" },
  text: { fontSize: "16px" },
  list: { paddingLeft: "20px", fontSize: "15px" }
};

export default AdminDashboard;
