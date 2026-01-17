export default function InstructorLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">

      <div className="absolute w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-30 top-10 right-10 animate-pulse"></div>

      <div className="relative bg-white rounded-2xl shadow-2xl p-10 w-[420px] animate-login">
        <h2 className="text-3xl font-bold text-center mb-6">
          Instructor Login
        </h2>

        <div className="mb-5">
          <label className="text-sm text-gray-600">Email</label>
          <input className="w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-2" />
        </div>

        <div className="mb-6">
          <label className="text-sm text-gray-600">Password</label>
          <input type="password" className="w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-2" />
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Login
        </button>
      </div>
    </div>
  );
}
