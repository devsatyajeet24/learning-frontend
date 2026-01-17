export default function InstructorRegister() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-[420px] animate-login">
        <h2 className="text-3xl font-bold text-center mb-6">
          Instructor Sign Up
        </h2>

        <input
          className="w-full border-b-2 mb-5 py-2 outline-none"
          placeholder="Full Name"
        />
        <input
          className="w-full border-b-2 mb-5 py-2 outline-none"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full border-b-2 mb-6 py-2 outline-none"
          placeholder="Password"
        />

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Create Account
        </button>
      </div>
    </div>
  );
}
