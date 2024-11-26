import React from 'react';

const Recommendations: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-[#0077b6] mb-6">Recommendations</h2>
        <p className="text-lg text-gray-700">Here are your energy recommendations.</p>
      </main>
    </div>
  );
};

export default Recommendations;