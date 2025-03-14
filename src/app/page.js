'use client';
import { useEffect, useState } from 'react';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs from the API route
  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch('/api/jobs');
        if (!res.ok) throw new Error('Failed to fetch jobs');
        const data = await res.json();
        setJobs(data);
        setFilteredJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchJobs();
  }, []);

  // Filter function passed down to SearchBar
  const handleSearch = (criteria) => {
    // Example: filtering by location and job type
    const results = jobs.filter(job => 
      job.location.toLowerCase().includes(criteria.location.toLowerCase()) &&
      job.type.toLowerCase().includes(criteria.type.toLowerCase())
    );
    setFilteredJobs(results);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Job Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!isLoading && !error && <JobList jobs={filteredJobs} />}
    </main>
  );
}
