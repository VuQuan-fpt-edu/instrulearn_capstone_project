import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { Textarea } from "../../../ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Filter,
  Users,
  Clock,
  CreditCard,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const CourseManagement = () => {
  const [courses] = useState([
    {
      id: 1,
      name: "Piano cơ bản",
      instructor: "Nguyễn Văn A",
      duration: "3 tháng",
      price: "2,500,000 VND",
      students: 15,
      status: "Đang hoạt động",
    },
    {
      id: 2,
      name: "Guitar nâng cao",
      instructor: "Trần Thị B",
      duration: "6 tháng",
      price: "3,500,000 VND",
      students: 10,
      status: "Đang hoạt động",
    },
  ]);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="relative overflow-hidden border-none ring-1 ring-inset ring-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Tổng khóa học
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">12</h3>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +2.5%
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
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Học viên</p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">156</h3>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12%
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
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Giờ học</p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">480</h3>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5.3%
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
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Doanh thu</p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-2xl font-bold text-gray-900">45.2M</h3>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.1%
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
          </CardContent>
        </Card>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Quản lý khóa học
          </h1>
          <p className="text-gray-500 mt-1">
            Quản lý tất cả các khóa học của bạn tại một nơi
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg transition-all">
              <Plus className="mr-2 h-4 w-4" />
              Thêm khóa học mới
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Thêm khóa học mới
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right font-medium">
                  Tên khóa học
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  placeholder="Nhập tên khóa học..."
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="instructor" className="text-right font-medium">
                  Giảng viên
                </Label>
                <Input
                  id="instructor"
                  className="col-span-3"
                  placeholder="Chọn giảng viên..."
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right font-medium">
                  Thời lượng
                </Label>
                <Input
                  id="duration"
                  className="col-span-3"
                  placeholder="VD: 3 tháng"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right font-medium">
                  Học phí
                </Label>
                <Input
                  id="price"
                  className="col-span-3"
                  placeholder="VD: 2,500,000 VND"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right font-medium">
                  Mô tả
                </Label>
                <Textarea
                  id="description"
                  className="col-span-3"
                  placeholder="Mô tả chi tiết về khóa học..."
                  rows={4}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" className="hover:bg-gray-50">
                Hủy
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                Lưu khóa học
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Courses Table */}
      <Card className="mb-8 border-none ring-1 ring-gray-200/50 bg-white/70 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Tìm kiếm theo tên khóa học, giảng viên..."
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

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="group border-none ring-1 ring-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="p-0">
              {/* Course Image */}
              <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-white hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-full shadow-lg"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-white hover:bg-red-50 hover:text-red-600 transition-colors rounded-full shadow-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      ID: #{course.id}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200/50">
                    {course.status}
                  </span>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center font-medium text-sm">
                    {course.instructor.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {course.instructor}
                  </span>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>{course.students} học viên</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CreditCard className="h-4 w-4" />
                    <span>{course.price}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;
