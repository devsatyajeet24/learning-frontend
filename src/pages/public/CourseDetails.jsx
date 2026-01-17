import { useParams } from "react-router-dom";
import mockCourses from "../../mock/courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = mockCourses.find(c => c._id === id);

  if (!course) {
    return <div className="p-10 text-center">Course not found</div>;
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-8 py-14 grid md:grid-cols-3 gap-10">
          
          {/* LEFT CONTENT */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">
              {course.title}
            </h1>

            <p className="text-lg text-blue-100 mb-6">
              {course.description}
            </p>

            <div className="flex gap-6 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded">
                Beginner Friendly
              </span>
              <span className="bg-white/20 px-3 py-1 rounded">
                20+ Hours Content
              </span>
              <span className="bg-white/20 px-3 py-1 rounded">
                Certificate Included
              </span>
            </div>
          </div>

          {/* BUY CARD */}
          <div className="bg-white text-black rounded-xl shadow-lg p-6 h-fit">
            <p className="text-3xl font-bold text-blue-600 mb-4">
              ₹{course.price}
            </p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Enroll Now
            </button>

            <p className="text-sm text-gray-500 mt-3 text-center">
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>

      {/* BODY SECTION */}
      <div className="max-w-6xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">
        
        {/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* WHAT YOU WILL LEARN */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              What you’ll learn
            </h2>

            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li>✔ Build real-world projects</li>
              <li>✔ Understand core concepts clearly</li>
              <li>✔ Industry best practices</li>
              <li>✔ Interview preparation basics</li>
            </ul>
          </section>

          {/* CURRICULUM */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Course Curriculum
            </h2>

            <div className="border rounded-lg divide-y bg-white">
              {[
                "Introduction & Setup",
                "Core Fundamentals",
                "Hands-on Projects",
                "Advanced Concepts",
                "Final Assessment"
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 hover:bg-slate-50 cursor-pointer flex justify-between"
                >
                  <span>{item}</span>
                  <span className="text-gray-400">▶</span>
                </div>
              ))}
            </div>
          </section>

          {/* INSTRUCTOR */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Instructor
            </h2>

            <div className="flex gap-4 items-center bg-white p-5 rounded-lg shadow">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                I
              </div>
              <div>
                <p className="font-semibold">Industry Expert</p>
                <p className="text-sm text-gray-600">
                  10+ years experience | 50k+ students
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* SIDE INFO */}
        <aside className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Course Includes</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>📺 On-demand videos</li>
              <li>📄 Downloadable resources</li>
              <li>📱 Mobile & TV access</li>
              <li>🏆 Certificate of completion</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
