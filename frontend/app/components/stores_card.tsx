import React from 'react';
import Link from 'next/link';

interface StoryCardProps {
  img: string;
  title: string;
  desc: string;
  tag?: string;
  link: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ img, title, desc, tag, link }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="space-y-4">
        {/* Image & Tag Section */}
        <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-gray-100 group">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {tag && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-gray-800 shadow-sm">
              {tag}
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold leading-snug text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-gray-100">
        <Link
          href={link || '#'}
          className="text-xs font-bold text-gray-900 hover:text-[#D97706] inline-flex items-center gap-1.5 transition-colors"
        >
          Read story →
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;