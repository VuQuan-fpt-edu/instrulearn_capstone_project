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
import { Mail, Lock, ArrowRight, Music2, Volume2, VolumeX } from "lucide-react";

const Login = () => {
  const [isEmailLogin, setIsEmailLogin] = useState(false);
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

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email login submitted");
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
            Chào mừng trở lại
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Tiếp tục hành trình âm nhạc của bạn
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-8">
          {!isEmailLogin ? (
            <div className="space-y-6">
              <Button
                variant="outline"
                className="w-full h-14 space-x-2 hover:bg-purple-50 text-lg"
                onClick={handleGoogleLogin}
              >
                <img
                  src="/assets/image/login-google.png"
                  alt="Google logo"
                  className="w-6 h-6"
                />
                <span>Đăng nhập với Google</span>
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
                onClick={() => setIsEmailLogin(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                Đăng nhập với Email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
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
                <div className="flex justify-between">
                  <Label htmlFor="password" className="text-lg">
                    Mật khẩu
                  </Label>
                  <a
                    href="/forgot-password"
                    className="text-purple-600 hover:underline text-lg"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
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
              <Button
                type="submit"
                className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-lg"
              >
                Đăng nhập
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 pb-8">
          <div className="text-gray-500 text-center text-lg">
            Chưa có tài khoản?{" "}
            <a href="/registration" className="text-purple-600 hover:underline">
              Đăng ký ngay
            </a>
          </div>
          {isEmailLogin && (
            <Button
              variant="ghost"
              className="w-full hover:text-purple-600 text-lg"
              onClick={() => setIsEmailLogin(false)}
            >
              Quay lại
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
