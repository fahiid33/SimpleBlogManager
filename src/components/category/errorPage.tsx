import React from 'react';

const NoBlogsAvailable: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">No blogs available</h1>
        <p className="text-gray-600">Check back later for more updates!</p>
      </div>
    </div>
  );
};

export default NoBlogsAvailable;
