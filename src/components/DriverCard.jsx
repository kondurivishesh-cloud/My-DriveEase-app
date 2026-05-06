import React, { useState } from "react";
import { getBadgeStyle, getSpecColor, formatTrips } from "../utils/helpers";

const DriverCard = ({ driver, onBook }) => {
  const [imgError, setImgError] = useState(false);

  const initials = driver.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:border-brand-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10 animate-fade-in relative flex flex-col`}
    >
      {/* Top Rated badge */}
      {driver.isTopRated && (
        <div className="absolute top-3 right-3 z-10 bg-yellow-500/90 text-yellow-950 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          ✦ Top Rated
        </div>
      )}

      {/* Card header with photo */}
      <div className="relative bg-gradient-to-br from-white/5 to-white/0 p-5 pb-0">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            {!imgError ? (
              <img
                src={driver.photo}
                alt={driver.name}
                onError={() => setImgError(true)}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-white/10 group-hover:border-brand-500/30 transition-all"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-brand-500/20 border-2 border-brand-500/30 flex items-center justify-center text-brand-400 font-display font-bold text-xl">
                {initials}
              </div>
            )}
            {/* Online dot */}
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900 flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
            </span>
          </div>

          {/* Name + badge */}
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="font-display text-lg font-semibold text-white truncate leading-tight">
              {driver.name}
            </h3>
            <span
              className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full border mt-1 ${getBadgeStyle(
                driver.badge
              )}`}
            >
              {driver.badge}
            </span>
            <p className="text-slate-500 text-xs mt-1 flex items-center gap-1">
              <span>📍</span> {driver.location}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4 pb-4 border-b border-white/5">
          <div className="flex items-center gap-1 bg-yellow-500/15 border border-yellow-500/25 rounded-lg px-2.5 py-1">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-yellow-300 font-bold text-sm">
              {driver.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-slate-500 text-xs">
            ({driver.reviews.length} reviews)
          </span>
          <span className="ml-auto text-slate-500 text-xs font-mono">
            Age {driver.age}
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 divide-x divide-white/5 text-center py-3 px-2">
        <div>
          <div className="font-display text-lg font-bold text-white">
            {driver.experience}
            <span className="text-xs text-slate-500 font-sans font-normal">
              yrs
            </span>
          </div>
          <div className="text-xs text-slate-500">Experience</div>
        </div>
        <div>
          <div className="font-display text-lg font-bold text-white">
            {formatTrips(driver.trips)}
          </div>
          <div className="text-xs text-slate-500">Trips</div>
        </div>
        <div>
          <div className="font-display text-lg font-bold text-white">
            {driver.availability.length}
          </div>
          <div className="text-xs text-slate-500">Days/wk</div>
        </div>
      </div>

      {/* Specializations */}
      <div className="px-5 pb-3">
        <div className="flex flex-wrap gap-1.5">
          {driver.specialization.map((spec) => (
            <span
              key={spec}
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getSpecColor(
                spec
              )}`}
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Availability days */}
      <div className="px-5 pb-3">
        <div className="flex gap-1">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className={`flex-1 text-center py-1 rounded-md text-xs font-medium transition-all ${
                driver.availability.includes(day)
                  ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                  : "bg-white/3 text-slate-600 border border-white/5"
              }`}
            >
              {day[0]}
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="px-5 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-xs">🗣</span>
          <span className="text-slate-400 text-xs">
            {driver.languages.join(" · ")}
          </span>
        </div>
      </div>

      {/* Reviews preview */}
      {driver.reviews.length > 0 && (
        <div className="px-5 pb-4">
          <div className="bg-white/3 border border-white/5 rounded-xl p-3">
            <p className="text-slate-400 text-xs leading-relaxed italic">
              "{driver.reviews[0].comment}"
            </p>
            <p className="text-slate-600 text-xs mt-1.5">
              — {driver.reviews[0].user}
            </p>
          </div>
        </div>
      )}

      {/* Book button */}
      <div className="px-5 pb-5 mt-auto">
        <button
          onClick={() => onBook(driver)}
          className="w-full btn-primary text-sm py-3 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-brand-500/25"
        >
          <span>Book Now</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default DriverCard;
