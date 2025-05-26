"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <nav className="px-4 lg:px-0 top-4 left-0 z-[999] fixed right-0 container mx-auto">
      <div className="w-full lg:grid flex justify-between lg:grid-cols-12 items-center p-2 rounded-2xl bg-white relative shadow-lg">
        {/* Logo + Toggle button */}
        <div className="flex items-center justify-start lg:col-span-2 pl-2">
          {/* Logo cho màn hình lớn (desktop) */}
          <div>
            <Image
              src="/assets/logo-full_apptoolsngon.png"
              alt="Logo"
              width={120}
              height={32}
              priority
              className="h-8 w-auto hidden lg:block dark:grayscale dark:brightness-200"
            />

            {/* Logo cho màn hình nhỏ (mobile) */}
            <Image
              src="/assets/logo-full_apptoolsngon.png"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 block lg:hidden dark:grayscale dark:brightness-200"
            />
          </div>

          <button
            aria-label="Toggle mobile menu"
            onClick={toggleMenu}
            className="text-slate-800 flex items-center justify-center lg:hidden p-3 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`col-span-8 items-center justify-center gap-2 absolute top-full bg-white rounded-2xl w-full p-4 mt-2 lg:top-0 lg:relative lg:p-0 lg:mt-0 left-0 ${
            show ? "flex" : "hidden"
          } lg:flex`}
        >
          <Link
            href="/"
            className="text-slate-600 px-3 py-1 hover:bg-slate-100 rounded-xl text-xs lg:text-lg"
          >
            Trang Chủ
          </Link>
          <a
            href="/subscriptions"
            className="text-slate-600 px-3 py-1 hover:bg-slate-100 rounded-xl text-xs lg:text-lg"
          >
            Bảng Giá
          </a>
          <a
            href="/function"
            className="text-slate-600 px-3 py-1 hover:bg-slate-100 rounded-xl text-xs lg:text-lg"
          >
            Tính Năng
          </a>
          <Link
            href="/contact"
            className="text-slate-600 px-3 py-1 hover:bg-slate-100 rounded-xl text-xs lg:text-lg"
          >
            Liên hệ
          </Link>
        </div>

        {/* Buttons */}
        <div className="lg:col-span-2 flex items-center justify-end gap-2 relative z-20">
          <Link
            href="/register"
            className="text-white bg-blue-500 hover:bg-blue-600 lg:py-3 px-3 py-1.5 rounded-2xl text-sm whitespace-nowrap"
          >
            Dùng Thử Miễn Phí
          </Link>
          <Link
            href="/login"
            className="text-slate-900 bg-white border border-slate-300 lg:py-3 rounded-2xl px-3 py-1.5 text-sm whitespace-nowrap"
          >
            Đăng Nhập
          </Link>
        </div>
      </div>
    </nav>
  );
}
