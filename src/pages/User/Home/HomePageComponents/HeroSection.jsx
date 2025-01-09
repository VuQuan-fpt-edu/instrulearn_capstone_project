import React from "react";
import { Search } from "lucide-react";

const PROMOTIONAL_MESSAGES = [
  "Học những kỹ năng được yêu cầu cao với hơn 250,000 khóa học video",
  "Học từ những chuyên gia hàng đầu trong ngành âm nhạc",
  "Tự do học tập theo tốc độ của riêng bạn, với quyền truy cập trọn đời trên di động và máy tính",
  "Khám phá âm nhạc cùng cộng đồng hơn 100,000 học viên",
  "Bắt đầu hành trình âm nhạc của bạn ngay hôm nay",
];

const HeroSection = ({ searchQuery, setSearchQuery, currentPromoMessage }) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
      <div className="container mx-auto px-4 py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Khám Phá Hành Trình Âm Nhạc
          </h1>
          <p className="text-2xl mb-6 text-blue-100">
            Học từ những nghệ sĩ chuyên nghiệp và bắt đầu chơi nhạc cụ yêu thích
            của bạn ngay hôm nay
          </p>
          <p className="text-lg mb-10 text-blue-200/90 transition-opacity duration-500">
            {PROMOTIONAL_MESSAGES[currentPromoMessage]}
          </p>

          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Bạn muốn học nhạc cụ nào?"
              className="w-full px-6 py-5 pr-12 rounded-xl text-gray-900 text-lg bg-white/95 backdrop-blur focus:bg-white transition-all duration-300 focus:shadow-xl outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-blue-600 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
