import React from "react";
import { Card, CardContent } from "../../../../ui/card";
import { Star, Users, Clock, PlayCircle } from "lucide-react";

const CourseCard = ({ course }) => (
  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="relative">
      <img
        src={`/api/placeholder/300/200`}
        alt={course.title}
        className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white/90 backdrop-blur px-6 py-3 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-gray-800 font-medium">Xem trước khóa học</span>
        </button>
      </div>
    </div>
    <CardContent className="p-6 bg-gradient-to-b from-white to-gray-50">
      <div className="min-h-[180px] flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800">
            {course.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>

          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-amber-600 text-lg">
              {course.rating}
            </span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({course.reviews.toLocaleString()})
            </span>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="flex items-center justify-center bg-blue-50 rounded-lg p-2">
              <Clock className="w-4 h-4 text-blue-600 mr-1.5" />
              <span className="text-xs text-gray-700">{course.duration}</span>
            </div>
            <div className="flex items-center justify-center bg-blue-50 rounded-lg p-2">
              <PlayCircle className="w-4 h-4 text-blue-600 mr-1.5" />
              <span className="text-xs text-gray-700">{course.lectures}</span>
            </div>
            <div className="flex items-center justify-center bg-blue-50 rounded-lg p-2">
              <Users className="w-4 h-4 text-blue-600 mr-1.5" />
              <span className="text-xs text-gray-700">
                {course.students.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">
                {course.price.toLocaleString("vi-VN")}đ
              </span>
              <span className="text-sm text-gray-400 line-through">
                {course.originalPrice.toLocaleString("vi-VN")}đ
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        {course.bestseller && (
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full">
            Bán chạy nhất
          </span>
        )}
        {course.discount >= 75 && (
          <span className="inline-block bg-rose-100 text-rose-800 text-xs font-medium px-3 py-1.5 rounded-full">
            -{course.discount}%
          </span>
        )}
        {course.isTopRated && (
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1.5 rounded-full">
            Đánh giá cao
          </span>
        )}
      </div>
    </CardContent>
  </Card>
);

export default CourseCard;
