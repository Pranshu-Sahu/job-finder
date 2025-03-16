"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import JobCard from "./JobCard";

const JobList = ({ filters }) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);



  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs?jobType=Engineer');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const newJobs = await response.json();
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
