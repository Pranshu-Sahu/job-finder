import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-5 transition duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
      <p className="mb-2 text-gray-700">
        <strong className="text-teal-500">Company:</strong> {job.company}
      </p>
      <p className="mb-2 text-gray-700">
        <strong className="text-teal-500">Location:</strong> {job.location}
      </p>
      <p className="mb-2 text-gray-700">
        <strong className="text-teal-500">Salary:</strong> ${job.salary}/month
      </p>
      <p className="text-gray-600 text-sm mb-4">{job.description}</p>
      <p className="text-gray-500 text-sm mb-4">
        Posted on {new Date(job.postingDate).toLocaleDateString()}
      </p>
      <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
