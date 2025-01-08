import React, { useState } from "react";
import { Card, CardContent } from "../../../ui/card";
import { Star, Users, Search, Clock, PlayCircle } from "lucide-react";

const LEVELS = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Professional",
];

const INSTRUMENTS = [
  "Piano",
  "Guitar",
  "Violin",
  "Drums",
  "Bass",
  "Saxophone",
  "Flute",
  "Cello",
  "Ukulele",
];

const MOCK_COURSES = [
  {
    id: 1,
    title: "Complete Piano Course: From Beginner to Advanced",
    instructor: "John Williams",
    level: "All Levels",
    instrument: "Piano",
    rating: 4.8,
    reviews: 256,
    students: 12850,
    duration: "45.5 hours",
    lectures: 72,
    price: 299000,
    originalPrice: 1799000,
    bestseller: true,
  },
  {
    id: 2,
    title: "Professional Guitar Masterclass 2024",
    instructor: "David Martinez",
    level: "Advanced",
    instrument: "Guitar",
    rating: 4.9,
    reviews: 189,
    students: 8940,
    duration: "38 hours",
    lectures: 65,
    price: 499000,
    originalPrice: 1999000,
    bestseller: true,
  },
  {
    id: 3,
    title: "Violin for Beginners: Start Playing Today",
    instructor: "Sarah Chang",
    level: "Beginner",
    instrument: "Violin",
    rating: 5.0,
    reviews: 124,
    students: 4560,
    duration: "28 hours",
    lectures: 42,
    price: 799000,
    originalPrice: 2499000,
    bestseller: false,
  },
  {
    id: 4,
    title: "Jazz Drumming: Intermediate to Professional",
    instructor: "Mike Porter",
    level: "Intermediate",
    instrument: "Drums",
    rating: 4.7,
    reviews: 98,
    students: 3240,
    duration: "32 hours",
    lectures: 55,
    price: 599000,
    originalPrice: 1899000,
    bestseller: false,
  },
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedInstrument, setSelectedInstrument] = useState("All");

  const filteredCourses = MOCK_COURSES.filter((course) => {
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;
    const matchesInstrument =
      selectedInstrument === "All" || course.instrument === selectedInstrument;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesInstrument && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Master Your Musical Journey
            </h1>
            <p className="text-xl mb-8">
              Learn from professional musicians and start playing your favorite
              instrument today
            </p>

            <div className="relative">
              <input
                type="text"
                placeholder="What instrument do you want to learn?"
                className="w-full px-4 py-4 pr-12 rounded-lg text-gray-900 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold mb-3">Skill Level</h2>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {LEVELS.map((level) => (
                  <button
                    key={level}
                    className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedLevel === level
                        ? "bg-blue-600 text-white"
                        : "border hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-3">Instruments</h2>
              <div className="flex gap-4 overflow-x-auto pb-2">
                <button
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedInstrument === "All"
                      ? "bg-blue-600 text-white"
                      : "border hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedInstrument("All")}
                >
                  All Instruments
                </button>
                {INSTRUMENTS.map((instrument) => (
                  <button
                    key={instrument}
                    className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedInstrument === instrument
                        ? "bg-blue-600 text-white"
                        : "border hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedInstrument(instrument)}
                  >
                    {instrument}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border-0"
            >
              <div className="relative">
                <img
                  src={`/api/placeholder/300/200`}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="bg-white p-2 rounded-lg shadow-lg">
                    <button className="text-sm text-gray-700">
                      Preview this course
                    </button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-base mb-1 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {course.instructor}
                </p>
                <div className="flex items-center gap-1 mb-1">
                  <span className="font-bold text-amber-700">
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
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <PlayCircle className="w-4 h-4 mr-1" />
                    {course.lectures} lectures
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">
                    {course.price.toLocaleString("vi-VN")}đ
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {course.originalPrice.toLocaleString("vi-VN")}đ
                  </span>
                </div>
                {course.bestseller && (
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 mt-2">
                    Bestseller
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
