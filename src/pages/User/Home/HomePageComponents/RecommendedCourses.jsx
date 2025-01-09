import React from "react";
import { Heart } from "lucide-react";
import CourseCard from "./CourseCard";

const RecommendedCourses = ({ courses }) => {
  const recommendedCourses = courses.filter((course) => course.students > 5000);

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Heart className="w-6 h-6 text-blue-600" />
          Có thể bạn sẽ thích
        </h2>
        <button className="text-blue-600 hover:underline">Xem tất cả</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recommendedCourses.slice(0, 4).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedCourses;
