export default function JobCard({ job }) {
    return (
      <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{job.title}</h2>
        <p className="mb-1 text-gray-700"><strong>Location:</strong> {job.location}</p>
        <p className="mb-1 text-gray-700"><strong>Type:</strong> {job.type}</p>
        <p className="text-sm text-gray-600">{job.description}</p>
        {/* Add more details or a link to a detailed job page as needed */}
      </div>
    );
  }
  