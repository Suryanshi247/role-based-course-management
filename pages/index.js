import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Course Management System</h1>
      <p className={styles.description}>
        Select your role to proceed to the appropriate dashboard.
      </p>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardCard}>
          <h2>Student Dashboard</h2>
          <p>Explore courses, purchase them, and provide feedback.</p>
          <Link href="/login/student">
            <button className={styles.dashboardButton}>Go to Student Login</button>
          </Link>
        </div>
        <div className={styles.dashboardCard}>
          <h2>Admin Dashboard</h2>
          <p>Manage users, courses, and monitor the system.</p>
          <Link href="/login/admin">
            <button className={styles.dashboardButton}>Go to Admin Login</button>
          </Link>
        </div>
        <div className={styles.dashboardCard}>
          <h2>Instructor Dashboard</h2>
          <p>Create courses, manage content, and view feedback.</p>
          <Link href="/login/instructor">
            <button className={styles.dashboardButton}>Go to Instructor Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
