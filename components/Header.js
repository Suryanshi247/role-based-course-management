import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header({ role }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Course Manager</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          {!role && <li><Link href="/login">Login</Link></li>}
          {role === "admin" && <li><Link href="/admin/dashboard">Dashboard</Link></li>}
          {role === "instructor" && <li><Link href="/instructor/dashboard">Dashboard</Link></li>}
          {role === "student" && <li><Link href="/student/dashboard">Dashboard</Link></li>}
        </ul>
      </nav>
    </header>
  );
}
