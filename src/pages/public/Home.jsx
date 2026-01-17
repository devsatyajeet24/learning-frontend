import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
        {/* ===== BACKGROUND LAYERS ===== */}
<div className="absolute inset-0">

  {/* main gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-indigo-700/30 to-pink-700/30"></div>

  {/* radial glow top-left */}
  <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-40"></div>

  {/* radial glow bottom-right */}
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-40"></div>

  {/* subtle grid overlay */}
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  ></div>
</div>

<div className="relative z-10">
 



      {/* ================= HERO ================= */}
      <section className="relative py-28">
        {/* gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-indigo-600/30 to-pink-600/30"></div>

        <div className="relative max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-sm">
              🇮🇳 India’s Modern Learning Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Learn Skills That <br />
              <span className="text-purple-400">
                Get You Job-Ready
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Structured courses, industry mentors, and real-world projects —
              everything you need to build a strong career.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/courses"
                className="bg-purple-600 hover:bg-purple-700 px-7 py-4 rounded-xl font-semibold transition"
              >
                Explore Courses
              </Link>

              <Link
                to="/login"
                className="border border-white/20 px-7 py-4 rounded-xl hover:bg-white/10 transition"
              >
                Login
              </Link>
            </div>
          </div>

          {/* RIGHT – HERO CARDS */}
          <div className="relative grid grid-cols-2 gap-6">
            {[
              ["Full Stack Dev", "HTML, CSS, JS, React"],
              ["Cyber Security", "Network & Web Security"],
              ["DSA", "Placement focused"],
              ["AI Basics", "Future-ready skills"]
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:scale-105 transition"
              >
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="bg-[#020617] py-16">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-8 text-center">
          {[
            ["100K+", "Students"],
            ["150+", "Courses"],
            ["Top Mentors", "From Industry"],
            ["4.9★", "Student Rating"]
          ].map(([num, label]) => (
            <div key={label}>
              <p className="text-3xl font-bold">{num}</p>
              <p className="text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LEARNING PATHS ================= */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            Choose Your <span className="text-purple-400">Learning Path</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Web Development", "Frontend + Backend + Projects"],
              ["Cyber Security", "Beginner to Advanced"],
              ["Data & AI", "Future skills roadmap"]
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {title}
                </h3>
                <p className="text-gray-600 mb-6">{desc}</p>
                <Link
                  to="/courses"
                  className="text-purple-600 font-semibold"
                >
                  View Courses →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
        <div className="text-center px-10">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg text-purple-100 mb-10">
            Learn from experts. Build real skills. Get job-ready.
          </p>
          <Link
            to="/courses"
            className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold"
          >
            Get Started
          </Link>
        </div>
      </section>
</div>
    </div>
  );
}
