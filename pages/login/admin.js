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
    const validEmail = 'admin@example.com';
    const validPassword = 'admin123';

    if (email === validEmail && password === validPassword) {
      alert('Admin login successful!');
      router.push('/admin/dashboard');  // Redirect to /admin/dashboard after login
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Login</h1>  {/* Scoped class name */}
      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}  
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}  
          required
        />
       <button type="submit" className={styles.submitButton}>Login</button>

      </form>
    </div>
  );
}
