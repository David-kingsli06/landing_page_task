import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import WrapperNav from "@/components/Navbar/WrapperNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";


const font =Rubik({
  weight: ['300','400','500','700','800','900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Next JS Landing Page",
  description: "A modern landing page built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WrapperNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
