import Link from "next/link";
import styles from "../../styles/LoginForm.module.css";

export default function InstructorLogin() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic for instructors here
    alert("Instructor login successful!");
  };

  return (
    <div className={styles.container}>
      <h1>Instructor Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
