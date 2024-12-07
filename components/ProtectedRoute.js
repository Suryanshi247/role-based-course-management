import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ProtectedRoute({ children, role }) {
  const router = useRouter();

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (userRole !== role) {
      router.push("/login");
    }
  }, [role, router]);

  return <>{children}</>;
}
