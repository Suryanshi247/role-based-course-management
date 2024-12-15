import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/LoginForm.module.css'; // Correctly import the CSS module

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Example admin credentials (replace with actual credentials or API logic)
    const validEmail = 'instructor@example.com';
    const validPassword = 'student123';

    if (email === validEmail && password === validPassword) {
      alert('student login successful!');
      router.push('/instructor/dashboard');  // Redirect to /admin/dashboard after login
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Student Login</h1>  {/* Use the title class */}
      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
}
