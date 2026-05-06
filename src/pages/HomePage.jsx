import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import FilterBar from "../components/FilterBar";
import DriverCard from "../components/DriverCard";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import { useDrivers } from "../hooks/useDrivers";

const HomePage = ({ onBook }) => {
  const driversRef = useRef(null);
  const { drivers, loading, filters, updateFilter, resetFilters } = useDrivers();

  const scrollToDrivers = () => {
    driversRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <HeroSection onExplore={scrollToDrivers} />

      {/* Drivers section */}
      <section
        id="drivers"
        ref={driversRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 scroll-mt-8"
      >
        {/* Section header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-sm text-slate-400 font-mono">
              Nearby Drivers
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Available Drivers
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm">
            All drivers are background-verified, licensed, and rated by real
            customers.
          </p>
        </div>

        {/* Filters */}
        {!loading && (
          <FilterBar
            filters={filters}
            updateFilter={updateFilter}
            resetFilters={resetFilters}
            totalResults={drivers.length}
          />
        )}

        {/* Content */}
        {loading ? (
          <LoadingSpinner />
        ) : drivers.length === 0 ? (
          <EmptyState onReset={resetFilters} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {drivers.map((driver, index) => (
              <div
                key={driver.id}
                style={{ animationDelay: `${index * 60}ms` }}
                className="animate-slide-up"
              >
                <DriverCard driver={driver} onBook={onBook} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
