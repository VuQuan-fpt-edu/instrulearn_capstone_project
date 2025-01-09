import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Button } from "../../../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Users,
  BookOpen,
  Clock,
  Plus,
  TrendingUp,
} from "lucide-react";

const TeachingSchedule = () => {
  const [currentWeek] = useState("06/01/2025 - 12/01/2025");
  const [schedules] = useState([
    {
      id: 1,
      time: "09:00 - 10:30",
      course: "Piano cơ bản",
      student: "Nguyễn Văn X",
      room: "Phòng 101",
      status: "Đã xác nhận",
    },
    {
      id: 2,
      time: "14:00 - 15:30",
      course: "Guitar nâng cao",
      student: "Trần Thị Y",
      room: "Phòng 202",
      status: "Chờ xác nhận",
    },
  ]);

  const weekDays = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "Chủ nhật",
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="relative overflow-hidden border-none ring-1 ring-inset ring-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Tổng số buổi học
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">24</h3>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15%
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-none ring-1 ring-inset ring-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Học viên tuần này
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">12</h3>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    +2 mới
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-none ring-1 ring-inset ring-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Khóa học</p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">5</h3>
                  <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full flex items-center">
                    Đang dạy
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-none ring-1 ring-inset ring-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <CalendarIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Giờ dạy/tuần
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">36</h3>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8%
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
          </CardContent>
        </Card>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Lịch dạy
          </h1>
          <p className="text-gray-500 mt-1">
            Xem và quản lý lịch dạy trong tuần
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="hover:bg-white border-gray-200 transition-all duration-200 hover:border-purple-500"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Xem theo tháng
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="mr-2 h-4 w-4" />
            Thêm lịch dạy
          </Button>
        </div>
      </div>

      {/* Week Navigation */}
      <Card className="mb-8 border-none ring-1 ring-gray-200/50 bg-white/70 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold">Tuần: {currentWeek}</h2>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 mb-8">
        {weekDays.map((day, index) => (
          <Card
            key={index}
            className="border-none ring-1 ring-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-md transition-all duration-200"
          >
            <CardHeader className="p-4 border-b border-gray-100">
              <CardTitle className="text-sm text-center font-medium text-gray-600">
                {day}
              </CardTitle>
              <p className="text-xs text-center text-gray-400 mt-1">
                {new Date(2025, 0, 6 + index).getDate()}/01
              </p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="min-h-[120px]">
                {index === 0 && (
                  <div className="text-sm p-3 bg-blue-50 rounded-lg mb-2 hover:bg-blue-100 transition-colors cursor-pointer border border-blue-100">
                    <div className="font-medium text-blue-800">
                      09:00 - 10:30
                    </div>
                    <div className="text-blue-600 mt-1">Piano cơ bản</div>
                    <div className="text-blue-500 text-xs mt-1">Phòng 101</div>
                  </div>
                )}
                {index === 2 && (
                  <div className="text-sm p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer border border-purple-100">
                    <div className="font-medium text-purple-800">
                      14:00 - 15:30
                    </div>
                    <div className="text-purple-600 mt-1">Guitar nâng cao</div>
                    <div className="text-purple-500 text-xs mt-1">
                      Phòng 202
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Schedule Details */}
      <Card className="border-none ring-1 ring-gray-200/50 bg-white/70 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle>Chi tiết lịch dạy trong tuần</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedules.map((schedule) => (
              <Card
                key={schedule.id}
                className="border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center font-medium text-sm">
                      {schedule.student.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {schedule.student}
                      </h3>
                      <p className="text-sm text-gray-500">{schedule.course}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{schedule.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="h-4 w-4" />
                      <span className="text-sm">{schedule.room}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                        schedule.status === "Đã xác nhận"
                          ? "bg-green-50 text-green-700 border border-green-200/50"
                          : "bg-yellow-50 text-yellow-700 border border-yellow-200/50"
                      }`}
                    >
                      {schedule.status}
                    </span>
                  </div>

                  <Button className="w-full mt-3" variant="outline">
                    Chi tiết
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeachingSchedule;
