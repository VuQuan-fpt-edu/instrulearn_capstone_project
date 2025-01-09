import React from "react";
import { Trophy } from "lucide-react";
import CourseCard from "./CourseCard";

const HighRatedCourses = ({ courses }) => {
  const topRatedCourses = courses.filter((course) => course.isTopRated);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800">
            <Trophy className="w-7 h-7 text-amber-600" />
            Khóa học được đánh giá cao
          </h2>
          <button className="px-6 py-2 rounded-lg text-amber-600 hover:bg-amber-50 transition-colors duration-300">
            Xem tất cả
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topRatedCourses.slice(0, 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighRatedCourses;
