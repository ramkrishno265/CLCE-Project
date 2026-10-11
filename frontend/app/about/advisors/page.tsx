import React from 'react';
import { FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

const advisors = [
  {
    name: "Dr. Rahman Chowdhury",
    role: "Chief Academic & Technical Advisor",
    designation: "Professor, Dept. of CSE",
    bio: "Over 15+ years of experience in AI, Software Architecture, and Higher Education leadership.",
    image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    linkedin: "https://linkedin.com",
    twitter: "#",
    website: "#"
  },
  {
    name: "Sultana Parveen",
    role: "Strategic Growth Advisor",
    designation: "Ex-VP of Operations, TechCorp",
    bio: "Specializes in organizational growth, product scale, and international partnerships.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    linkedin: "https://linkedin.com",
    twitter: "#"
  }
];

export default function AdvisorsPage() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Meet Our Advisory Board
        </h2>
        <p className="text-lg text-gray-600">
          Our distinguished advisors bring decades of industry expertise, guiding our mission toward continuous innovation and growth.
        </p>
      </div>

      {/* Advisors Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.map((advisor, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-gray-100"
          >
            {/* Image */}
            <img 
              src={advisor.image} 
              alt={advisor.name} 
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-50"
            />
            
            {/* Name & Role */}
            <h3 className="text-xl font-bold text-gray-800">{advisor.name}</h3>
            <span className="text-sm font-semibold text-indigo-600 mt-1">{advisor.role}</span>
            <p className="text-xs text-gray-500 mb-3">{advisor.designation}</p>

            {/* Bio */}
            <p className="text-sm text-gray-600 mb-6 flex-grow">{advisor.bio}</p>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-400">
              {advisor.linkedin && (
                <a href={advisor.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                  <FaLinkedin size={20} />
                </a>
              )}
              {advisor.twitter && (
                <a href={advisor.twitter} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                  <FaTwitter size={20} />
                </a>
              )}
              {advisor.website && (
                <a href={advisor.website} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                  <FaGlobe size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}