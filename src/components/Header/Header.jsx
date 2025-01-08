import React from "react";
import { Search, Heart, ShoppingCart, Music, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Music className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              InstruLearn
            </span>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Tìm khóa học..."
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-indigo-600">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-indigo-600 rounded-full text-white text-xs flex items-center justify-center">
                0
              </span>
            </button>

            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-indigo-600 text-sm font-medium">
                Đăng nhập
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
