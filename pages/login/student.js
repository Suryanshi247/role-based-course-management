import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import { useState } from 'react'; // Import useState for managing input values
import styles from '../../styles/LoginForm.module.css';

export default function StudentLogin() {
  const router = useRouter(); // Initialize the router
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Example credentials (replace this with API call logic)
    const validEmail = 'student@example.com';
    const validPassword = 'student123';

    if (email === validEmail && password === validPassword) {
      alert('Student login successful!');
      router.push('/student/dashboard'); // Navigate to /student/dashboard after successful login
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Student Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          required
        />
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
      <Link href="/">Back to Home</Link>
    </div>
  );
}