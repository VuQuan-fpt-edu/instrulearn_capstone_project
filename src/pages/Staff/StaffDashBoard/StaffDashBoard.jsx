import React from "react";
import { Card, CardContent } from "../../../ui/card";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import {
  Calendar,
  BarChart3,
  BookOpen,
  Clock,
  Bell,
  Settings,
  Search,
  LogOut,
  User,
  Calendar as CalendarIcon,
  Bookmark,
  Users,
  List,
} from "lucide-react";

const StaffDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <header className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Tìm kiếm khóa học, học viên..."
                className="pl-8 w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-screen shadow-sm p-4">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Quản lý khóa học
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              Lịch dạy
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bookmark className="mr-2 h-4 w-4" />
              Đặt dịch vụ
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <List className="mr-2 h-4 w-4" />
              Yêu cầu học viên
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="mr-2 h-4 w-4" />
              Tiến độ lớp học
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" />
              Thông báo
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Cài đặt
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Tổng học viên</p>
                    <p className="text-2xl font-bold">150</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-500">
                      Lớp học đang hoạt động
                    </p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <List className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-500">Yêu cầu chờ xử lý</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-500">Lịch học hôm nay</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Lịch dạy</h3>
                <div className="h-96 bg-gray-50 rounded-lg border flex items-center justify-center">
                  <CalendarIcon className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-gray-500">Calendar Component</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Thao tác nhanh</h3>
                <div className="space-y-2">
                  <Button className="w-full">Xác nhận lịch học</Button>
                  <Button className="w-full">Cập nhật tiến độ</Button>
                  <Button className="w-full">Tạo thông báo</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StaffDashboard;
