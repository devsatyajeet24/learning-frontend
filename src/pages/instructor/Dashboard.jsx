import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h2>Instructor Dashboard</h2>
      <Link to="/instructor/create-course">Create New Course</Link>
    </>
  );
}
