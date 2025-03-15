"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import JobCard from "./JobCard";

const JobList = ({ filters }) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Build the query string based on the current page and filters
  const buildQueryString = (page) => {
    let query = `page=${page}&limit=10`;
    if (filters.location)
      query += `&location=${encodeURIComponent(filters.location)}`;
    if (filters.salaryMin)
      query += `&salaryMin=${encodeURIComponent(filters.salaryMin)}`;
    if (filters.salaryMax)
      query += `&salaryMax=${encodeURIComponent(filters.salaryMax)}`;
    return query;
  };

  // Function to fetch jobs from the API
  const fetchJobs = async () => {
    try {
      const res = await fetch(`/api/jobs?${buildQueryString(page)}`);
      const newJobs = await res.json();
      if (newJobs.length < 10) {
        setHasMore(false);
      }
      setJobs((prevJobs) => {
        // Combine the previous jobs with the new jobs
        const combinedJobs = [...prevJobs, ...newJobs];
        // Deduplicate based on the _id property
        const uniqueJobs = Array.from(
          new Map(combinedJobs.map((job) => [job._id.toString(), job])).values()
        );
        return uniqueJobs;
      });
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // When filters change, reset the list
  useEffect(() => {
    setJobs([]);
    setPage(1);
    setHasMore(true);
    fetchJobs();
  }, [filters]);

  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={fetchJobs}
      hasMore={hasMore}
      loader={<h4>Loading more jobs...</h4>}
      endMessage={<p style={{ textAlign: "center" }}>No more jobs to load.</p>}
    >
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </InfiniteScroll>
  );
};

export default JobList;
