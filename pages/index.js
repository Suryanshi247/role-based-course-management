import Header from "../components/Header";

export default function Home({ role }) {
  return (
    <div>
      <Header role={role} />
      <main>
        <h1>Welcome to the Course Management System</h1>
        <p>Log in to access your dashboard.</p>
      </main>
    </div>
  );
}
