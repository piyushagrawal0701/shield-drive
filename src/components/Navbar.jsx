"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const navItems = [
  { label: "Home", id: "home" },
  { label: "Benefits", id: "benefits" },
  { label: "Reviews", id: "testimonials" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileOpen(false);

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4 overflow-x-hidden">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-xl">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-md">
              S
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              <span className="text-blue-600">Shield</span>Drive
            </h1>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection("quote-form")}
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Get Free Quote
              </button>

              <Link
                href="/admin"
                className="rounded-xl bg-gray-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
              >
                Admin
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-96 border-t" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 p-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-lg px-4 py-3 text-left transition ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("quote-form")}
              className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get Free Quote
            </button>

            <Link
              href="/admin"
              className="mt-4 block w-full rounded-xl bg-gray-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-gray-700"
            >
              Admin
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
