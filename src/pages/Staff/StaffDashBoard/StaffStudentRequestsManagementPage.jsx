import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import {
  Search,
  Filter,
  MessageSquare,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
} from "lucide-react";

const StudentRequests = () => {
  const requests = [
    {
      id: 1,
      date: "08/01/2025",
      student: "Nguyễn Văn X",
      type: "Đổi lịch học",
      content: "Xin đổi lịch học ngày 15/01 sang 16/01",
      status: "Đang chờ",
      urgency: "Cao",
    },
    {
      id: 2,
      date: "07/01/2025",
      student: "Trần Thị Y",
      type: "Nghỉ học",
      content: "Xin nghỉ học ngày 12/01 vì lý do sức khỏe",
      status: "Đã duyệt",
      urgency: "Thường",
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
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Tổng số yêu cầu
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">15</h3>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12%
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
                <p className="text-sm font-medium text-gray-500">Đang chờ</p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">5</h3>
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
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Đã duyệt</p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">8</h3>
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
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                <XCircle className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Từ chối</p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">2</h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
          </CardContent>
        </Card>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Yêu cầu học viên
          </h1>
          <p className="text-gray-500 mt-1">
            Xem và quản lý các yêu cầu từ học viên
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
                placeholder="Tìm kiếm theo tên học viên, loại yêu cầu..."
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

      {/* Requests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {requests.map((request) => (
          <Card
            key={request.id}
            className="border-none ring-1 ring-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-200"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center font-medium text-sm">
                  {request.student.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {request.student}
                  </h3>
                  <p className="text-sm text-gray-500">{request.date}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Loại yêu cầu
                  </p>
                  <p className="text-sm text-gray-900">{request.type}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Nội dung</p>
                  <p className="text-sm text-gray-900">{request.content}</p>
                </div>

                <div className="flex gap-2">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                      request.urgency === "Cao"
                        ? "bg-red-50 text-red-700 border border-red-200/50"
                        : "bg-blue-50 text-blue-700 border border-blue-200/50"
                    }`}
                  >
                    {request.urgency}
                  </span>

                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                      request.status === "Đã duyệt"
                        ? "bg-green-50 text-green-700 border border-green-200/50"
                        : request.status === "Từ chối"
                        ? "bg-red-50 text-red-700 border border-red-200/50"
                        : "bg-yellow-50 text-yellow-700 border border-yellow-200/50"
                    }`}
                  >
                    {request.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Phản hồi
                </Button>
                {request.status === "Đang chờ" && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Duyệt
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

export default StudentRequests;
