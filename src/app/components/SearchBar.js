'use client';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, type });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mb-6">
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded"
        aria-label="Search by location"
      />
      <input
        type="text"
        placeholder="Job Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border rounded"
        aria-label="Search by job type"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}
