'use client';

import { useState } from 'react';
import JobList from '././components/JobList';
import Filters from '././components/Filters';

export default function Home() {
  const [filters, setFilters] = useState({});

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Job Finder</h1>
      <Filters onApply={handleApplyFilters} />
      <JobList filters={filters} />
    </div>
  );
}
