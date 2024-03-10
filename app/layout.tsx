import type { Metadata } from "next";
import { Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import { BackgroundDots } from "@/components/background-dots";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

const inter = Noto_Serif_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundDots>
          <div className="min-h-screen">
            <Topbar />
            {children}
          </div>
          <Footer />
        </BackgroundDots>
      </body>
    </html>
  );
}
