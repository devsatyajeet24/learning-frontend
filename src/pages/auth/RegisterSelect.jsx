import { Link } from "react-router-dom";

export default function RegisterSelect() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      
      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 -top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-30 bottom-0 right-0 animate-pulse"></div>

      <div className="relative bg-white rounded-2xl shadow-2xl p-10 w-[420px] animate-login">
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Choose how you want to sign up
        </p>

        <div className="space-y-4">
          <Link
            to="/register/student"
            className="block w-full text-center py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Sign up as Student
          </Link>

          <Link
            to="/register/instructor"
            className="block w-full text-center py-3 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100 transition"
          >
            Sign up as Instructor
          </Link>
        </div>
      </div>
    </div>
  );
}
