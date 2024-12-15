// pages/admin.js
// pages/admin/dashboard.js
import AdminDashboard from '../../components/AdminDashboard'; // Adjust the path to the correct location
import styles from "../../styles/AdminDashboard.module.css"; // Import styles

export default function AdminPage() {
  return (
    <div className={styles.container}> {/* Apply a container class for layout */}
      <AdminDashboard /> {/* Render AdminDashboard component */}
    </div>
  );
}

