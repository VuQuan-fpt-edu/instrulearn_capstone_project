import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import {
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Users,
  Clock,
  Calendar,
  TrendingUp,
  CheckSquare,
} from "lucide-react";

const ServiceBookings = () => {
  const bookings = [
    {
      id: 1,
      date: "09/01/2025",
      student: "Lê Văn A",
      service: "Khóa học Piano cơ bản",
      status: "Chờ xác nhận",
      contact: "0912345678",
      notes: "Muốn học vào buổi tối",
    },
    {
      id: 2,
      date: "10/01/2025",
      student: "Phạm Thị B",
      service: "Khóa học Guitar nâng cao",
      status: "Đã xác nhận",
      contact: "0987654321",
      notes: "Đã học guitar 1 năm",
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="relative overflow-hidden border-none ring-1 ring-inset ring-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Tổng số đặt dịch vụ
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">25</h3>
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
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Chờ xác nhận
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">8</h3>
                  <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full flex items-center">
                    Cần xử lý
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
                <CheckSquare className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Đã xác nhận</p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">17</h3>
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

        <Card className="relative overflow-hidden border-none ring-1 ring-inset ring-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Học viên mới
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">12</h3>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +25%
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
          </CardContent>
        </Card>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Quản lý đặt dịch vụ
          </h1>
          <p className="text-gray-500 mt-1">
            Xem và quản lý tất cả các yêu cầu đặt dịch vụ
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <Card className="mb-8 border-none ring-1 ring-gray-200/50 bg-white/70 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Tìm kiếm theo tên học viên, dịch vụ..."
                className="pl-12 bg-white/80 border-gray-200 focus:border-purple-500 focus:ring-purple-500 hover:bg-white transition-colors"
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 hover:bg-white border-gray-200 transition-all duration-200 hover:border-purple-500"
            >
              <Filter className="h-5 w-5" />
              Bộ lọc nâng cao
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bookings.map((booking) => (
          <Card
            key={booking.id}
            className="border-none ring-1 ring-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-200"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center font-medium text-sm">
                  {booking.student.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {booking.student}
                  </h3>
                  <p className="text-sm text-gray-500">{booking.contact}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Dịch vụ</p>
                  <p className="text-sm text-gray-900">{booking.service}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Ngày đặt</p>
                  <p className="text-sm text-gray-900">{booking.date}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Ghi chú</p>
                  <p className="text-sm text-gray-900">{booking.notes}</p>
                </div>

                <div>
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                      booking.status === "Đã xác nhận"
                        ? "bg-green-50 text-green-700 border border-green-200/50"
                        : "bg-yellow-50 text-yellow-700 border border-yellow-200/50"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Chi tiết
                </Button>
                {booking.status === "Chờ xác nhận" && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Xác nhận
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Từ chối
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceBookings;
