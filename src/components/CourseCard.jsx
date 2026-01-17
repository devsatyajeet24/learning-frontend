import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="card p-6 group cursor-pointer">
      
      {/* tag */}
      <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        Bestseller
      </span>

      <h3 className="text-xl font-semibold mt-4 group-hover:text-blue-600 transition">
        {course.title}
      </h3>

      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {course.description}
      </p>

      <div className="flex justify-between items-center mt-6">
        <span className="text-lg font-bold text-blue-600">
          ₹{course.price}
        </span>

        <Link
          to={`/course/${course._id}`}
          className="text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition"
        >
          View details →
        </Link>
      </div>
    </div>
  );
}
