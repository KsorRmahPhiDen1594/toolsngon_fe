"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { postLogin } from "@/lib/api";
import { saveTokens } from "@/lib/auth";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const data = await postLogin(email, password);
      saveTokens(data.access_token, ""); // hoặc xóa nếu không cần

      if (data.role === "ADMIN") {
        router.push("/dashboardadmin");
      } else {
        router.push("/dashboaruser");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  }

  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/images/login-bg.jpg')",
      }}
    >
      {/* Lớp phủ mờ nền */}
      <div className="absolute inset-0 text-white bg-opacity-50 z-0"></div>

      {/* Logo */}
      <div className="absolute top-6 left-6 ml-5 z-10 flex items-center space-x-2">
        <Image
          src="/assets/logo-full_apptoolsngon.png"
          alt="App Tools Ngon"
          width={300}
          height={100}
          className="w-[300px] h-auto object-contain"
        />
      </div>

      {/* Ngôn ngữ */}
      <div className="absolute top-6 right-6 z-10">
        <button className="bg-white border px-4 py-1 rounded-full shadow-sm text-sm">
          🌐 Tiếng Việt
        </button>
      </div>

      {/* Ảnh nền ở góc trái */}
      <div className="absolute bottom-0 left-0 z-0 bg-decor-left">
        <Image
          src="/assets/bg-login-wind.svg"
          alt="Decor Wind"
          width={750}
          height={700}
          className="w-[595px] h-[489px] object-contain"
        />
      </div>

      {/* Form Login (trực tiếp trên nền, không khung trắng) */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md p-6 border border-gray-300 rounded-md bg-white"
      >
        <h1 className="text-4xl font-bold text-black text-center mb-6">
          Login
        </h1>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-black">
            Username or email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="phiden123"
            className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm mb-1 text-black">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="•••••••••••"
            className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-sm text-blue-600 hover:text-blue-800"
          >
            {showPassword ? "Ẩn" : "Hiển thị"}
          </button>
        </div>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Login
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-2 text-sm text-gray-600">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <p className="text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Subscribe now
          </a>
        </p>

        <p className="mt-4 text-sm text-blue-600 underline cursor-pointer text-center hover:text-blue-800">
          Forgot password
        </p>
      </form>
      {/* Nút nổi */}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3">
        <a
          href="https://zalo.me/yourZaloID"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
        >
          <Image
            src="/images/zalo-button.png"
            alt="Zalo"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </a>
        <a
          href="https://m.me/yourMessengerUsername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
        >
          <Image
            src="/images/messenger-button.png"
            alt="Messenger"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </a>
        <a
          href="https://t.me/yourTelegramUsername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
        >
          <Image
            src="/images/telegram-button.png"
            alt="Telegram"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </div>
  );
}
