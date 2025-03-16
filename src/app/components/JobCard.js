import React from 'react';
const JobCard = ({ job }) => {
  return (
    <div className="
      relative
      bg-gradient-to-b from-gray-900 to-gray-800
      rounded-lg
      p-6
      mb-5
      shadow-lg shadow-orange-500/20
      transition-transform
      duration-300
      hover:-translate-y-1
      hover:shadow-orange-500/40
    ">
      {/* Job Title */}
      <h3 className="
        text-2xl
        font-bold
        text-orange-500
        mb-3
        drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]
      ">
        {job.title}
      </h3>
      
      {/* Company */}
      <p className="text-white mb-2">
        <span className="text-blue-400 font-medium">Company:</span>
        <span className="ml-2">{job.company}</span>
      </p>

      {/* Location */}
      <p className="text-white mb-2">
        <span className="text-blue-400 font-medium">Location:</span>
        <span className="ml-2">{job.location}</span>
      </p>

      {/* Salary */}
      <p className="text-white mb-2">
        <span className="text-blue-400 font-medium">Salary:</span>
        <span className="ml-2">{job.salary}</span>
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4">
        {job.description}
      </p>

      {/* Posting Date */}
      <p className="text-gray-400 text-xs mb-4">
        Posted on {new Date(job.postingDate).toLocaleDateString()}
      </p>

      {/* Apply Button */}
      <button className="
        bg-orange-500
        hover:bg-orange-600
        text-white
        font-semibold
        py-2
        px-4
        rounded-lg
        shadow-md shadow-orange-500/40
        hover:shadow-orange-500/60
        transition-shadow
        duration-300
        focus:outline-none
      ">
        Apply Now
      </button>
    </div>
  );
};


export default JobCard;
