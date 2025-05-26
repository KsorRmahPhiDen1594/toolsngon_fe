'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postRegister } from '@/lib/api';
import Image from 'next/image';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeRobot, setAgreeRobot] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!agreeRobot) {
      setError('Vui lòng xác nhận bạn không phải là người máy.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp.');
      return;
    }

    try {
      await postRegister({ username, email, phone, password });
      setSuccess('Đăng ký thành công! Đang chuyển hướng đến trang đăng nhập...');
      setTimeout(() => router.push('/login'), 2000);
    } catch (err) {
      setError('Đăng ký thất bại. Email hoặc số điện thoại đã tồn tại.');
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/images/login-bg.jpg')" }}
    >
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

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-10">
        <button className="bg-white border px-4 py-1 rounded-full shadow-sm text-sm">
          🌐 Tiếng Việt
        </button>
      </div>

      {/* Background decor */}
      <div className="absolute bottom-0 left-0 z-0 bg-decor-left">
        <Image
          src="/assets/bg-login-wind.svg"
          alt="Decor Wind"
          width={750}
          height={700}
          className="w-[595px] h-[489px] object-contain"
        />
      </div>

      {/* Register Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md p-6 border border-gray-300 rounded-md bg-white"
      >
        <h1 className="text-3xl font-bold text-black text-center mb-6">Đăng ký</h1>

        <div className="mb-3">
          <label className="block text-sm mb-1 text-black">Tên người dùng</label>
          <input
            type="text"
            placeholder="yourname123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1 text-black">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1 text-black">Số điện thoại</label>
          <input
            type="tel"
            placeholder="0123456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1 text-black">Mật khẩu</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1 text-black">Xác nhận mật khẩu</label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="robotCheck"
            checked={agreeRobot}
            onChange={(e) => setAgreeRobot(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="robotCheck" className="text-sm text-black">
            Tôi không phải là người máy
          </label>
        </div>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Đăng ký
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-2 text-sm text-gray-600">HOẶC</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <p className="text-center text-sm text-gray-700">
          Đã có tài khoản?{' '}
          <a href="/login" className="text-blue-600 underline hover:text-blue-800">
            Đăng nhập ngay
          </a>
        </p>
      </form>

      {/* Floating buttons */}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3">
        <a href="https://zalo.me/yourZaloID" target="_blank" className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
          <Image src="/images/zalo-button.png" alt="Zalo" width={48} height={48} className="w-full h-full object-cover" />
        </a>
        <a href="https://m.me/yourMessengerUsername" target="_blank" className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
          <Image src="/images/messenger-button.png" alt="Messenger" width={48} height={48} className="w-full h-full object-cover" />
        </a>
        <a href="https://t.me/yourTelegramUsername" target="_blank" className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
          <Image src="/images/telegram-button.png" alt="Telegram" width={48} height={48} className="w-full h-full object-cover" />
        </a>
      </div>
    </div>
  );
}
