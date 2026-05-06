import React, { useEffect, useState } from "react";

const ConfirmationScreen = ({ booking, onClose }) => {
  const [visible, setVisible] = useState(false);
  const bookingId = `DRV-${Math.floor(100000 + Math.random() * 900000)}`;

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const formattedDate = booking.date
    ? new Date(booking.date).toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
    >
      <div
        className={`modal-content bg-slate-900 border border-white/10 rounded-3xl w-full max-w-md shadow-2xl transition-all duration-500 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Success animation */}
        <div className="flex flex-col items-center pt-10 pb-6 px-6 text-center border-b border-white/5">
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/30 flex items-center justify-center text-4xl animate-bounce">
              ✅
            </div>
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping" />
          </div>

          <h2 className="font-display text-3xl font-bold text-white mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Your driver has been booked. You'll receive a confirmation shortly.
          </p>

          {/* Booking ID */}
          <div className="mt-4 bg-brand-500/10 border border-brand-500/20 rounded-xl px-6 py-3">
            <p className="text-slate-500 text-xs font-mono mb-1">Booking ID</p>
            <p className="text-brand-400 font-mono font-bold text-lg tracking-wider">
              {bookingId}
            </p>
          </div>
        </div>

        {/* Booking details */}
        <div className="p-6 space-y-4">
          {/* Driver */}
          <div className="flex items-center gap-4 glass-card rounded-2xl p-4">
            <img
              src={booking.driver.photo}
              alt={booking.driver.name}
              className="w-14 h-14 rounded-xl object-cover border border-white/10"
              onError={(e) => (e.target.style.display = "none")}
            />
            <div>
              <p className="text-xs text-slate-500 font-mono mb-0.5">DRIVER</p>
              <p className="font-display font-semibold text-white">
                {booking.driver.name}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-yellow-400">★ {booking.driver.rating}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">{booking.driver.experience} yrs exp</span>
              </div>
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-card rounded-xl p-3">
              <p className="text-xs text-slate-500 font-mono mb-1">TYPE</p>
              <p className="text-white font-semibold text-sm flex items-center gap-1">
                <span>{booking.bookingType.icon}</span>
                {booking.bookingType.label}
              </p>
            </div>
            <div className="glass-card rounded-xl p-3">
              <p className="text-xs text-slate-500 font-mono mb-1">DATE</p>
              <p className="text-white font-semibold text-sm">{formattedDate}</p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <p className="text-emerald-300 font-semibold text-sm">Driver Notified</p>
              <p className="text-slate-500 text-xs">
                Expected confirmation within 15 minutes
              </p>
            </div>
          </div>

          {/* What's next */}
          <div className="space-y-2">
            {[
              { icon: "📱", text: "Driver will call you 30 min before arrival" },
              { icon: "📍", text: "Share your live location when driver calls" },
              { icon: "🔑", text: "Have your car keys and documents ready" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 text-sm text-slate-400">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full btn-primary py-3.5 mt-2"
          >
            Done — Back to Drivers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
