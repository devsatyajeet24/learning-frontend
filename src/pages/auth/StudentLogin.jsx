export default function StudentLogin() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="card p-10 w-[420px]">
        <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
        <p className="text-gray-500 mb-8">
          Sign in to continue learning
        </p>

        <input className="input mb-4" placeholder="Email" />
        <input className="input mb-6" type="password" placeholder="Password" />

        <button className="btn-primary w-full">
          Sign In
        </button>

        <p className="text-sm text-gray-500 text-center mt-6">
          New here? <a href="/register" className="text-blue-600">Create account</a>
        </p>
      </div>
    </div>
  );
}
