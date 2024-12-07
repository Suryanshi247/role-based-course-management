import ProtectedRoute from "../../components/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute role="admin">
      <div>
        <h1>Admin Dashboard</h1>
        <p>Manage Courses, Users, and Ratings here.</p>
      </div>
    </ProtectedRoute>
  );
}
