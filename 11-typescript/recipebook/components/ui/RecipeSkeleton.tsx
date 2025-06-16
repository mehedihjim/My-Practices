import React from "react";

const RecipeCardSkeleton: React.FC = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-200 rounded-t-2xl" />

      {/* Card Body Skeleton */}
      <div className="p-4">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />

        {/* Button Skeleton */}
        <div className="h-10 bg-gray-300 rounded w-1/2" />
      </div>
    </div>
  );
};

export default RecipeCardSkeleton;
