import ProtectedRoute from "../../components/ProtectedRoute";

export default function InstructorDashboard() {
  return (
    <ProtectedRoute role="instructor">
      <div>
        <h1>Instructor Dashboard</h1>
        <p>Manage your courses and view ratings.</p>
      </div>
    </ProtectedRoute>
  );
}
