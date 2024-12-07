import { useRouter } from "next/router";
import LoginForm from "../components/LoginForm";

export default function LoginPage({ onLogin }) {
  const router = useRouter();

  const handleLogin = (role) => {
    onLogin(role);
    router.push(`/${role}/dashboard`);
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
