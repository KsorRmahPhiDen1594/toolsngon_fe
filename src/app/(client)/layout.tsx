// app/layout.tsx
import "@/app/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
          {children}
      </body>
    </html>
  );
}
