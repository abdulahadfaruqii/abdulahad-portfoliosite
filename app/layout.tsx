import {Metadata} from "next";
import {Inter} from "next/font/google";
import { ReactNode } from "react";
import { Navbar } from "@/component/Navbar";
import "@/app/globals.css";
const poppins = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abdul Ahad Farooqi | React & React Native Developer",
  description:
    "React.js & React Native Developer with 2+ years of experience building scalable web and mobile apps. Delivered 20+ projects with 100% client satisfaction.",
  keywords: [
    "Abdul Ahad Farooqi",
    "React Developer Pakistan",
    "React Native Developer",
    "Next.js Developer",
    "Frontend Developer Karachi",
    "Mobile App Developer",
    "Hire React Developer",
  ],
  verification: {
    google: "P8LD0alGMwDzro3556o0uvCkDv_c93D2FARr0qWv4xs",
  },
  authors: [{ name: "Abdul Ahad Farooqi" }],
  creator: "Abdul Ahad Farooqi",
  metadataBase: new URL("https://abdulahadfarooqiportfolio.vercel.app"),  // ✅ updated

  openGraph: {
    title: "Abdul Ahad Farooqi | React & React Native Developer",
    description:
      "Building modern web & mobile apps with React.js and React Native. 3+ years experience, 20+ projects delivered.",
    url: "https://abdulahadfarooqiportfolio.vercel.app",  // ✅ updated
    siteName: "Abdul Ahad Farooqi Portfolio",
    images: [
      {
        url: "/professional-pic.png",
        width: 1200,
        height: 630,
        alt: "Abdul Ahad Farooqi - React Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdul Ahad Farooqi | React & React Native Developer",
    description:
      "Building modern web & mobile apps with React.js and React Native.",
    images: ["/professional-pic.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};
export default function Rootlayout({
  children}:{children:ReactNode}){
    return(
<html lang="en" className={'scroll-smooth'}>
  <body className={`${poppins.className} inter_53234ce1-module__luKqfq__className`} cz-shortcut-listen="true">
    <Navbar/>
    <main>

    {children}
    </main>
    {/* <Cursor /> */}
  </body>
</html>
    )
  }
  
