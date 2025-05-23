import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './header.js';
import ClientLayout from "./ClientLayout";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDB Review Predictor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="corporate" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ClientLayout>
        {children}
        </ClientLayout>
      </body>
    </html>
  );
}
