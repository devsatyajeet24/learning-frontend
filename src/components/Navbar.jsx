import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-black/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Edu<span className="text-purple-400">LMS</span>
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/courses" className="text-gray-200 hover:text-white">
            Courses
          </Link>
          <Link
            to="/login"
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl font-semibold text-white transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
