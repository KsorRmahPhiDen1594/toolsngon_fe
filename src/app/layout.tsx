// app/layout.tsx
import "@/app/styles/globals.css";
import { Inter } from "next/font/google";
import ClientWrapper from "@/app/layouts/ClientWrapper"; // thêm dòng này

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trang web",
  description: "Mô tả trang web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  );
}
