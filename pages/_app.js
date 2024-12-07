import "../styles/globals.css";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [role, setRole] = useState("");

  const handleLogin = (userRole) => {
    localStorage.setItem("role", userRole);
    setRole(userRole);
  };

  return <Component {...pageProps} role={role} onLogin={handleLogin} />;
}
