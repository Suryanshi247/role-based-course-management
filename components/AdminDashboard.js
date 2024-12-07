import styles from "../../styles/AdminDashboard.module.css";

export default function AdminDashboard() {
  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <div className={styles.metrics}>
        <div>Users: 100</div>
        <div>Courses: 50</div>
        <div>Ratings: 4.5</div>
      </div>
      <div className={styles.actions}>
        <button>Manage Courses</button>
        <button>Manage Users</button>
        <button>View Ratings</button>
      </div>
    </div>
  );
}
