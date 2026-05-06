import { useState, useEffect, useMemo } from "react";
import { driversData } from "../data/drivers";

export const useDrivers = () => {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    minExperience: 0,
    minRating: 0,
    availability: "",
    specialization: "",
    searchQuery: "",
  });

  // Simulate async data fetch
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const filteredDrivers = useMemo(() => {
    return driversData.filter((driver) => {
      const expMatch = driver.experience >= filters.minExperience;
      const ratingMatch = driver.rating >= filters.minRating;
      const availMatch =
        !filters.availability ||
        driver.availability.includes(filters.availability);
      const specMatch =
        !filters.specialization ||
        driver.specialization.some((s) =>
          s.toLowerCase().includes(filters.specialization.toLowerCase())
        );
      const searchMatch =
        !filters.searchQuery ||
        driver.name
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        driver.specialization.some((s) =>
          s.toLowerCase().includes(filters.searchQuery.toLowerCase())
        );

      return expMatch && ratingMatch && availMatch && specMatch && searchMatch;
    });
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      minExperience: 0,
      minRating: 0,
      availability: "",
      specialization: "",
      searchQuery: "",
    });
  };

  return {
    drivers: filteredDrivers,
    allDrivers: driversData,
    loading,
    filters,
    updateFilter,
    resetFilters,
  };
};
