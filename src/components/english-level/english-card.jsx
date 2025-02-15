import React from 'react';

const CertificationCard = ({ title, description, variant = 'blue', imageSrc }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      {/* Banner Image */}
      <div className={`h-32 relative p-4 ${variant === 'pink' ? 'bg-pink-400' : 'bg-blue-600'}`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Certification Banner"
            className="w-full h-full object-cover"
          />
        ) : (
          <svg className="w-full h-full" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stars and decorative elements */}
            <circle cx="30" cy="30" r="4" fill="#FFF" opacity="0.6" />
            <circle cx="350" cy="40" r="4" fill="#FFF" opacity="0.6" />
            <path d="M200 20l2 2-2 2-2-2z" fill="#FF69B4" opacity="0.8" />
            <path d="M320 70l2 2-2 2-2-2z" fill="#FF69B4" opacity="0.8" />
            
            {/* Laptop/Certificate illustration */}
            <rect x="120" y="40" width="160" height="100" rx="8" fill="#FFF" opacity="0.2" />
            <rect x="140" y="60" width="120" height="60" fill="#FFF" opacity="0.3" />
            
            {/* Certificate elements */}
            <circle cx="180" cy="90" r="15" fill="#FFD700" opacity="0.8" />
            <path d="M175 90l5 5 10-10" stroke="#FFF" strokeWidth="2" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          Start learning
        </button>
      </div>
    </div>
  );
};

export default CertificationCard;
