import JobCard from './JobCard';

export default function JobList({ jobs }) {
  if (!jobs.length) return <p>No jobs found matching your criteria.</p>;

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
