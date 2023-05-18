import React from 'react';

export const CardLoadingSkeleton: React.FC = () => {
  return (
    <div className="p-4 h-40 bg-white rounded shadow">
      <div className="aspect-w-2 aspect-h-3 bg-gray-200 rounded animate-pulse"></div>
      <div className="bg-gray-200 h-4 w-24 mt-2 rounded animate-pulse"></div>
      <div className="bg-gray-200 h-4 w-32 mt-2 rounded animate-pulse"></div>
    </div>
  );
};

