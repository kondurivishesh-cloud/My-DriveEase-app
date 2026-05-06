import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const specs = ["Long Trips", "City Driving", "Outstation", "Full Day", "Emergency"];

const FilterBar = ({ filters, updateFilter, resetFilters, totalResults }) => {
  const hasActiveFilters =
    filters.minExperience > 0 ||
    filters.minRating > 0 ||
    filters.availability ||
    filters.specialization ||
    filters.searchQuery;

  return (
    <div className="glass-card rounded-2xl p-5 mb-8 animate-slide-down">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="font-display text-xl font-semibold text-white">
            Filter Drivers
          </h2>
          <p className="text-slate-500 text-sm">
            Showing{" "}
            <span className="text-brand-400 font-semibold">{totalResults}</span>{" "}
            drivers
          </p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-xs text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1 border border-white/10 px-3 py-1.5 rounded-lg hover:border-brand-500/30"
          >
            ✕ Clear Filters
          </button>
        )}
      </div>

      {/* Filter grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="sm:col-span-2 lg:col-span-1">
          <label className="block text-xs text-slate-500 font-medium mb-2">
            Search Driver
          </label>
          <input
            type="text"
            placeholder="Name or specialization..."
            value={filters.searchQuery}
            onChange={(e) => updateFilter("searchQuery", e.target.value)}
            className="input-field w-full"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-xs text-slate-500 font-medium mb-2">
            Min Experience:{" "}
            <span className="text-brand-400">{filters.minExperience}+ yrs</span>
          </label>
          <input
            type="range"
            min={0}
            max={20}
            step={1}
            value={filters.minExperience}
            onChange={(e) =>
              updateFilter("minExperience", Number(e.target.value))
            }
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #f97316 0%, #f97316 ${
                (filters.minExperience / 20) * 100
              }%, rgba(255,255,255,0.1) ${
                (filters.minExperience / 20) * 100
              }%, rgba(255,255,255,0.1) 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-slate-600 mt-1">
            <span>0</span>
            <span>20 yrs</span>
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-xs text-slate-500 font-medium mb-2">
            Min Rating:{" "}
            <span className="text-brand-400">
              {filters.minRating > 0 ? `${filters.minRating}★` : "Any"}
            </span>
          </label>
          <div className="flex gap-1.5 mt-1">
            {[0, 4.0, 4.5, 4.8].map((r) => (
              <button
                key={r}
                onClick={() => updateFilter("minRating", r)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                  filters.minRating === r
                    ? "bg-brand-500 border-brand-500 text-white"
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-brand-500/40"
                }`}
              >
                {r === 0 ? "All" : `${r}+`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Availability + Specialization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {/* Availability */}
        <div>
          <label className="block text-xs text-slate-500 font-medium mb-2">
            Available On
          </label>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() =>
                  updateFilter(
                    "availability",
                    filters.availability === day ? "" : day
                  )
                }
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all border ${
                  filters.availability === day
                    ? "bg-brand-500 border-brand-500 text-white shadow-lg shadow-brand-500/20"
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-brand-500/40"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Specialization */}
        <div>
          <label className="block text-xs text-slate-500 font-medium mb-2">
            Specialization
          </label>
          <div className="flex flex-wrap gap-2">
            {specs.map((spec) => (
              <button
                key={spec}
                onClick={() =>
                  updateFilter(
                    "specialization",
                    filters.specialization === spec ? "" : spec
                  )
                }
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all border ${
                  filters.specialization === spec
                    ? "bg-brand-500 border-brand-500 text-white shadow-lg shadow-brand-500/20"
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-brand-500/40"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
