'use client';
import { Inter } from 'next/font/google';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={` flex min-h-screen bg-slate-100 dark:bg-slate-950`}>
        <Sidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </body>
    </html>
  );
}