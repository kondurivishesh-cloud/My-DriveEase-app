import React from "react";

const stats = [
  { value: "500+", label: "Verified Drivers" },
  { value: "50k+", label: "Trips Completed" },
  { value: "4.8★", label: "Average Rating" },
  { value: "24/7", label: "Availability" },
];

const HeroSection = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-300 font-mono">
            Live · 47 drivers available near Hyderabad
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-slide-up">
          Your Car.
          <br />
          <span className="gradient-text">Our Driver.</span>
        </h1>

        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed">
          Book certified professional drivers for your personal car. Perfect for
          long trips, full-day city drives, or those moments when you simply
          can't drive.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up">
          <button
            onClick={onExplore}
            className="btn-primary text-base px-8 py-4 shadow-xl shadow-brand-500/20 flex items-center gap-2"
          >
            <span>Find a Driver Now</span>
            <span>→</span>
          </button>
          <button className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
            <span>▶</span>
            <span>See How It Works</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-4 text-center"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div id="how" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              step: "01",
              title: "Browse & Filter",
              desc: "Find verified drivers by experience, rating, and availability.",
              icon: "🔍",
            },
            {
              step: "02",
              title: "Choose & Book",
              desc: "Select your booking type — full day, long trip, or emergency.",
              icon: "📅",
            },
            {
              step: "03",
              title: "Sit Back & Relax",
              desc: "Your driver arrives at your location, ready to take the wheel.",
              icon: "🚗",
            },
          ].map((item) => (
            <div key={item.step} className="glass-card rounded-2xl p-6 group hover:border-brand-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <div className="font-mono text-xs text-brand-400 mb-1">{item.step}</div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
