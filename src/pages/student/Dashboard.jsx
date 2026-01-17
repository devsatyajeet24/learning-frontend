export default function Dashboard() {
  return (
    <div className="bg-slate-50 min-h-screen px-10 py-12">
      
      {/* header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">
          Track your learning progress
        </p>
      </div>

      {/* stats */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {["Enrolled", "In Progress", "Completed"].map((t, i) => (
          <div key={i} className="card p-6">
            <p className="text-sm text-gray-500">{t}</p>
            <p className="text-2xl font-bold mt-2">0</p>
          </div>
        ))}
      </div>

      {/* empty state */}
      <div className="card p-10 text-center">
        <p className="text-gray-600 mb-4">
          You haven’t enrolled in any course yet
        </p>
        <a href="/courses" className="btn-primary inline-block">
          Explore Courses
        </a>
      </div>
    </div>
  );
}
