import React, { useState } from "react";
import CourseCard from "../Home/HomePageComponents/CourseCard";
import DiscountCourses from "../Home/HomePageComponents/DiscountCourses";
import HighRatedCourses from "../Home/HomePageComponents/HighRatedCourses";
import RecommendedCourses from "../Home/HomePageComponents/RecommendedCourses";
import FilterSection from "../Home/HomePageComponents/FilterSection";
import HeroSection from "../Home/HomePageComponents/HeroSection";

const PROMOTIONAL_MESSAGES = [
  "Học những kỹ năng được yêu cầu cao với hơn 250,000 khóa học video",
  "Học từ những chuyên gia hàng đầu trong ngành âm nhạc",
  "Tự do học tập theo tốc độ của riêng bạn, với quyền truy cập trọn đời trên di động và máy tính",
  "Khám phá âm nhạc cùng cộng đồng hơn 100,000 học viên",
  "Bắt đầu hành trình âm nhạc của bạn ngay hôm nay",
];

const ALL_COURSES = [
  {
    id: 1,
    title: "Khóa học Piano Toàn diện: Từ Cơ bản đến Nâng cao",
    instructor: "Nguyễn Văn An",
    level: "Tất cả",
    instrument: "Piano",
    rating: 4.8,
    reviews: 256,
    students: 12850,
    duration: "45.5 giờ",
    lectures: 72,
    price: 299000,
    originalPrice: 1799000,
    bestseller: true,
    discount: 83,
    isTopRated: true,
  },
  {
    id: 2,
    title: "Lớp Guitar Chuyên nghiệp 2024",
    instructor: "Lê Hoàng Nam",
    level: "Nâng cao",
    instrument: "Guitar",
    rating: 4.9,
    reviews: 189,
    students: 8940,
    duration: "38 giờ",
    lectures: 65,
    price: 499000,
    originalPrice: 1999000,
    bestseller: true,
    discount: 75,
    isTopRated: true,
  },
  {
    id: 3,
    title: "Violin cho người mới bắt đầu",
    instructor: "Trần Thu Hà",
    level: "Mới bắt đầu",
    instrument: "Violin",
    rating: 5.0,
    reviews: 124,
    students: 4560,
    duration: "28 giờ",
    lectures: 42,
    price: 799000,
    originalPrice: 2499000,
    bestseller: false,
    discount: 68,
    isTopRated: true,
  },
  {
    id: 4,
    title: "Jazz Drumming: Trung cấp đến Chuyên nghiệp",
    instructor: "Nguyễn Minh Đức",
    level: "Trung cấp",
    instrument: "Trống",
    rating: 4.7,
    reviews: 98,
    students: 3240,
    duration: "32 giờ",
    lectures: 55,
    price: 599000,
    originalPrice: 1899000,
    bestseller: false,
    discount: 68,
    isTopRated: false,
  },
  {
    id: 5,
    title: "Saxophone Jazz cho người mới bắt đầu",
    instructor: "Trần Minh Đức",
    level: "Mới bắt đầu",
    instrument: "Saxophone",
    rating: 4.9,
    reviews: 156,
    students: 5670,
    duration: "30 giờ",
    lectures: 45,
    price: 399000,
    originalPrice: 1599000,
    bestseller: false,
    discount: 75,
    isTopRated: true,
  },
  {
    id: 6,
    title: "Guitar Fingerstyle nâng cao",
    instructor: "Lê Hoàng Nam",
    level: "Nâng cao",
    instrument: "Guitar",
    rating: 4.95,
    reviews: 320,
    students: 8900,
    duration: "35 giờ",
    lectures: 60,
    price: 449000,
    originalPrice: 1899000,
    bestseller: true,
    discount: 76,
    isTopRated: true,
  },
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Tất cả");
  const [selectedInstrument, setSelectedInstrument] = useState("Tất cả");
  const [currentPromoMessage, setCurrentPromoMessage] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoMessage(
        (prev) => (prev + 1) % PROMOTIONAL_MESSAGES.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredCourses = ALL_COURSES.filter((course) => {
    const matchesLevel =
      selectedLevel === "Tất cả" || course.level === selectedLevel;
    const matchesInstrument =
      selectedInstrument === "Tất cả" ||
      course.instrument === selectedInstrument;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesInstrument && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute transform -rotate-45 left-1/2 top-0 w-96 h-96 bg-white rounded-full mix-blend-overlay"></div>
            <div className="absolute transform rotate-45 right-1/4 bottom-0 w-96 h-96 bg-white rounded-full mix-blend-overlay"></div>
          </div>

          <HeroSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            currentPromoMessage={currentPromoMessage}
            className="relative z-10"
          />
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <FilterSection
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          selectedInstrument={selectedInstrument}
          setSelectedInstrument={setSelectedInstrument}
          className="container mx-auto px-4 py-4"
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {filteredCourses.length > 0 && (
            <section className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Kết quả tìm kiếm
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          )}

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6">
            <DiscountCourses courses={ALL_COURSES} />
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
            <HighRatedCourses courses={ALL_COURSES} />
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <RecommendedCourses courses={ALL_COURSES} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
