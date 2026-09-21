import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApplyFlow",
  description: "이직 지원 현황을 한곳에서 관리하세요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
