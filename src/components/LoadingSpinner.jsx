import React from "react";

const SkeletonCard = () => (
  <div className="glass-card rounded-2xl overflow-hidden">
    <div className="p-5 pb-0">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl shimmer-bg" />
        <div className="flex-1 pt-1 space-y-2">
          <div className="h-5 w-32 rounded-lg shimmer-bg" />
          <div className="h-4 w-20 rounded-full shimmer-bg" />
          <div className="h-3 w-24 rounded shimmer-bg" />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 pb-4 border-b border-white/5">
        <div className="h-7 w-16 rounded-lg shimmer-bg" />
        <div className="h-4 w-20 rounded shimmer-bg" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 py-3 px-5">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-1 text-center">
          <div className="h-6 w-12 mx-auto rounded shimmer-bg" />
          <div className="h-3 w-16 mx-auto rounded shimmer-bg" />
        </div>
      ))}
    </div>
    <div className="px-5 pb-3">
      <div className="flex gap-2">
        <div className="h-6 w-20 rounded-full shimmer-bg" />
        <div className="h-6 w-24 rounded-full shimmer-bg" />
      </div>
    </div>
    <div className="px-5 pb-4">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="flex-1 h-6 rounded-md shimmer-bg" />
        ))}
      </div>
    </div>
    <div className="px-5 pb-5">
      <div className="h-11 w-full rounded-xl shimmer-bg" />
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div>
    {/* Inline spinner for small contexts */}
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <div className="relative w-12 h-12">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 absolute" />
        <div className="w-12 h-12 rounded-full border-2 border-t-brand-500 border-r-transparent border-b-transparent border-l-transparent animate-spin absolute" />
      </div>
      <p className="text-slate-500 text-sm font-mono animate-pulse">
        Finding drivers near you...
      </p>
    </div>

    {/* Skeleton cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </div>
);

export default LoadingSpinner;
