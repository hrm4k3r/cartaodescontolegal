import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./includes/header";
import Footer from "./includes/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cartão Desconto Legal",
  description: "Ganhar descontos, nunca foi tão legal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
