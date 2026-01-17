import mockCourses from "../../mock/courses";
import CourseCard from "../../components/CourseCard";

export default function Courses() {
  return (
    
    <div className="min-h-screen bg-slate-50">
      {/* PAGE HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-10 py-10">
          <h2 className="text-4xl font-bold mb-2">
            Explore Our Courses
          </h2>
          <p className="text-gray-600">
            Learn skills that are in demand and industry-ready
          </p>
        </div>
      </div>

      {/* COURSES GRID */}
      <div className="max-w-7xl mx-auto px-10 py-12 animate-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockCourses.map((course, index) => (
            <CourseCard
              key={course._id}
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
