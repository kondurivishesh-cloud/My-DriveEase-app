import React from "react";

const Footer = () => (
  <footer className="border-t border-white/5 mt-24 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
              D
            </div>
            <span className="font-display text-xl font-bold text-white">
              Drive<span className="gradient-text">Ease</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Professional driver booking for your personal car. Safe, reliable,
            and always on time.
          </p>
        </div>

        {/* Links */}
        {[
          {
            title: "Platform",
            links: ["Find Drivers", "How It Works", "Pricing", "Safety"],
          },
          {
            title: "Support",
            links: ["Help Center", "Contact Us", "Terms", "Privacy"],
          },
          {
            title: "Company",
            links: ["About", "Blog", "Careers", "Press"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="/"
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-xs font-mono">
          © 2025 DriveEase. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-slate-600 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
