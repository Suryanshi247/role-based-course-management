import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/LoginForm.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication
    if (email === "student@example.com" && password === "password" && role === "student") {
      alert("Login was successful");
      router.push("/student/dashboard");
    } else if (email === "admin@example.com" && password === "password" && role === "admin") {
      alert("Login was successful");
      router.push("/admin/dashboard");
    } else if (email === "instructor@example.com" && password === "password" && role === "instructor") {
      alert("Login was successful");
      router.push("/instructor/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="instructor">Instructor</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
