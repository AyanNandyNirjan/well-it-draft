import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: { default: "Well IT & Consultancy Ltd | Offshore Staffing", template: "%s | Well IT" },
  description: "Dedicated offshore teams and remote staffing solutions from Bangladesh for businesses in the US, UK, Europe, Canada and Australia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar />{children}<Footer /><Toaster position="bottom-right" toastOptions={{ duration: 3500, style: { borderRadius: 14, padding: "14px 16px" } }} /></body></html>;
}
