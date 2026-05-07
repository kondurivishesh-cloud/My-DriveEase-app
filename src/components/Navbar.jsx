import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-brand-500/30">
            D
          </div>
          <span className="font-display text-xl font-bold text-white">
            Drive<span className="gradient-text">Ease</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#drivers" className="hover:text-white transition-colors">
            Find Drivers
          </a>
          <a href="#how" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="/" className="hover:text-white transition-colors">
            Support
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block btn-secondary text-sm py-2 px-4">
            Sign In
          </button>
          <button className="btn-primary text-sm py-2 px-4">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
