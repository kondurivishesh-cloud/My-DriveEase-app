export const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
};

export const getBadgeStyle = (badge) => {
  const styles = {
    "Legend Driver": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "Elite Driver": "bg-brand-500/20 text-brand-300 border-brand-500/30",
    "Veteran Driver": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Verified Pro": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "Rising Star": "bg-sky-500/20 text-sky-300 border-sky-500/30",
  };
  return styles[badge] || "bg-white/10 text-slate-300 border-white/10";
};

export const getSpecColor = (spec) => {
  const colors = {
    "Long Trips": "bg-blue-500/15 text-blue-300 border-blue-500/25",
    Outstation: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    "City Driving": "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    "Full Day": "bg-amber-500/15 text-amber-300 border-amber-500/25",
    Emergency: "bg-red-500/15 text-red-300 border-red-500/25",
  };
  return colors[spec] || "bg-white/10 text-slate-300 border-white/10";
};

export const formatTrips = (trips) => {
  if (trips >= 1000) return `${(trips / 1000).toFixed(1)}k`;
  return trips.toString();
};
