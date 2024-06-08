import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "Portfolio | taesookim.dev",
  description: "김태수의 포트폴리오",
  icons: {
    icon: "/assets/images/icon.png",
  },
};

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <div className="root-container">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
