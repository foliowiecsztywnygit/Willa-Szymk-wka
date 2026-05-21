import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Toaster from "@/components/Toaster";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
}

