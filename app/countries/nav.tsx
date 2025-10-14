"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/app/constant/navigation";
import Particles from "../components/particles";

export const Navbar: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const pathName = usePathname();
  const [isIntersecting, setIntersecting] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledPastWhiteSection, setIsScrolledPastWhiteSection] =
    useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref} className="w-full">
      <div
        className={`absolute inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b bg-[rgb(10,_62,_114)] w-full ${
          isIntersecting
            ? "bg-zinc-900/700 border-transparent"
            : "bg-zinc-900/700 border-zinc-800"
        }`}
      >
        <Particles className="absolute inset-0 -z-10" quantity={25} />

        <div className="container flex items-center justify-between p-6 mx-auto">
          <Link
            href="/tour"
            className="duration-200 font-bold text-white hover:text-white text-2xl whitespace-nowrap cursor-pointer"
          >
            <ArrowLeft className="inline-block w-5 h-5 ml-2" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navigation?.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`transition-colors duration-200 text-white hover:text-white font-bold ${
                  pathName === item.href ? "font-bold underline" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Popup Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-4">
            {navigation?.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg text-white hover:text-white ${
                  pathName === item.href ? "font-semibold underline" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
