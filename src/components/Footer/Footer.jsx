import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Music,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Music className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">
                InstruLearn
              </span>
            </div>
            <p className="text-sm">
              Khám phá thế giới âm nhạc cùng những khóa học chất lượng từ các
              nghệ sĩ hàng đầu. Chúng tôi cam kết mang đến trải nghiệm học tập
              tốt nhất cho bạn.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
                <span className="text-sm">123 Đường Nhạc, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-500" />
                <span className="text-sm">Hotline: 1900 1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-500" />
                <span className="text-sm">info@musicmaster.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Thông Tin</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-500 transition-colors"
                >
                  Điều Khoản Dịch Vụ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-500 transition-colors"
                >
                  Chính Sách Bảo Mật
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-500 transition-colors"
                >
                  Chính Sách Hoàn Tiền
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Kết Nối</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2025 MusicMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
