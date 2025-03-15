// components/Filters.jsx
'use client';

import { useState } from 'react';

const Filters = ({ onApply }) => {
  const [location, setLocation] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');

  const handleApply = () => {
    onApply({ location, salaryMin, salaryMax });
  };

  return (
    <div className="p-4 rounded-md shadow-md mb-4">
      <div className="mb-2">
        <label className="block text-sm font-medium">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Salary Range:</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={salaryMin}
            onChange={(e) => setSalaryMin(e.target.value)}
            className="mt-1 p-2 border rounded w-1/2"
          />
          <input
            type="number"
            placeholder="Max"
            value={salaryMax}
            onChange={(e) => setSalaryMax(e.target.value)}
            className="mt-1 p-2 border rounded w-1/2"
          />
        </div>
      </div>
      <button
        onClick={handleApply}
        className="mt-2 px-4 py-2 bg-teal-600 text-white rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
