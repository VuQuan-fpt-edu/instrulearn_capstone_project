import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../ui/card";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Music2,
  Volume2,
  VolumeX,
} from "lucide-react";

const Registration = () => {
  const [isEmailSignup, setIsEmailSignup] = useState(false);
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [audio] = useState(
    new Audio("/assets/image/registration-login-musicBG.mp3")
  );
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    audio.loop = true;

    const playAudio = async () => {
      try {
        await audio.play();
        audio.muted = true;
      } catch (error) {
        console.log("Audio playback failed:", error);
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setShowOTPInput(true);
  };

  const toggleMute = async () => {
    try {
      if (isMuted) {
        audio.muted = false;
        await audio.play();
      } else {
        audio.muted = true;
      }
      setIsMuted(!isMuted);
    } catch (error) {
      console.log("Toggle audio failed:", error);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/assets/image/register-loginBG.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <Music2
            key={i}
            className="absolute text-purple-600"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 p-3 rounded-full bg-white/80 hover:bg-white transition-all duration-300 shadow-lg flex items-center gap-2"
      >
        {isMuted ? (
          <>
            <VolumeX className="h-6 w-6 text-purple-600" />
            <span className="text-sm text-purple-600 pr-1">Bật nhạc</span>
          </>
        ) : (
          <>
            <Volume2 className="h-6 w-6 text-purple-600" />
            <span className="text-sm text-purple-600 pr-1">Tắt nhạc</span>
          </>
        )}
      </button>

      <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Music2 className="h-16 w-16 text-purple-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-center">
            Tham gia cộng đồng học nhạc
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Bắt đầu hành trình âm nhạc của bạn ngay hôm nay
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-8">
          {!isEmailSignup ? (
            <div className="space-y-6">
              <Button
                variant="outline"
                className="w-full h-14 space-x-2 hover:bg-purple-50 text-lg"
                onClick={handleGoogleSignup}
              >
                <img
                  src="/assets/image/login-google.png"
                  alt="Google logo"
                  className="w-6 h-6"
                />
                <span>Đăng ký với Google</span>
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm uppercase">
                  <span className="bg-white px-2 text-gray-500">Hoặc</span>
                </div>
              </div>
              <Button
                className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-lg"
                onClick={() => setIsEmailSignup(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                Đăng ký với Email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              {!showOTPInput ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-lg">
                      Họ và tên
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="fullname"
                        placeholder="Nhập họ và tên"
                        className="pl-10 h-12 text-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="pl-10 h-12 text-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-lg">
                      Mật khẩu
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 h-12 text-lg"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-lg">Nhạc cụ quan tâm</Label>
                      <Select>
                        <SelectTrigger className="h-12 text-lg">
                          <SelectValue placeholder="Chọn nhạc cụ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="piano">Piano</SelectItem>
                          <SelectItem value="guitar">Guitar</SelectItem>
                          <SelectItem value="violin">Violin</SelectItem>
                          <SelectItem value="drums">Trống</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-lg">Trình độ</Label>
                      <Select>
                        <SelectTrigger className="h-12 text-lg">
                          <SelectValue placeholder="Chọn trình độ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Mới bắt đầu</SelectItem>
                          <SelectItem value="intermediate">
                            Trung cấp
                          </SelectItem>
                          <SelectItem value="advanced">Nâng cao</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-lg"
                  >
                    Gửi mã OTP
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-600 text-lg">
                      Mã xác thực đã được gửi đến email của bạn
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="otp" className="text-lg">
                      Nhập mã OTP
                    </Label>
                    <Input
                      id="otp"
                      placeholder="Nhập mã 6 số"
                      className="text-center text-2xl tracking-widest h-14"
                      maxLength={6}
                    />
                  </div>
                  <Button className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-lg">
                    Bắt đầu hành trình âm nhạc
                  </Button>
                </div>
              )}
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 pb-8">
          <div className="text-gray-500 text-center text-lg">
            Đã có tài khoản?{" "}
            <a href="/login" className="text-purple-600 hover:underline">
              Đăng nhập ngay
            </a>
          </div>
          {isEmailSignup && (
            <Button
              variant="ghost"
              className="w-full hover:text-purple-600 text-lg"
              onClick={() => {
                setIsEmailSignup(false);
                setShowOTPInput(false);
              }}
            >
              Quay lại
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Registration;
