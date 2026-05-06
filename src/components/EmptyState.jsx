import React from "react";

const EmptyState = ({ onReset }) => (
  <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
    <div className="text-6xl mb-6">🔍</div>
    <h3 className="font-display text-2xl font-semibold text-white mb-3">
      No Drivers Found
    </h3>
    <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
      No drivers match your current filters. Try adjusting your search criteria
      or clearing all filters.
    </p>
    <button onClick={onReset} className="btn-primary px-8 py-3">
      Clear All Filters
    </button>
  </div>
);

export default EmptyState;
