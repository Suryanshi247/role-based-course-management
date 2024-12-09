import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import { useState } from 'react'; // Import useState for managing input values
import styles from '../../styles/LoginForm.module.css';

export default function InstructorLogin() {
  const router = useRouter(); // Initialize the router
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Example credentials (replace this with API call logic)
    const validEmail = 'instructor@example.com';
    const validPassword = 'instructor123';

    if (email === validEmail && password === validPassword) {
      alert('Instructor login successful!');
      router.push('/instructor/dashboard'); // Navigate to /instructor/dashboard after successful login
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.loginTitle}>Instructor Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email" className={styles.formLabel}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
          className={styles.formInput}
          required
        />
        <label htmlFor="password" className={styles.formLabel}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          className={styles.formInput}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
      <Link href="/" className={styles.link}>Back to Home</Link>
    </div>
  );
}
