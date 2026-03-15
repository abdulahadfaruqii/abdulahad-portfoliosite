import {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/component/Navbar";

const poppins = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abdul Ahad's Portfolio",
  description: "Abdul Ahad's Portfolio",
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
  
