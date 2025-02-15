import React from 'react';
import { Bookmark } from 'lucide-react';

const LearningCard = ({
  title = "Basis of the computer",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  slides = 10,
  tags = ["Basic", "Present"],
  imageUrl = ""
}) => {
  return (
    <div
      className="flex bg-white shadow-md border border-gray-200"
      style={{
        maxWidth: '900px',
        borderRadius: '15px',
        overflow: 'hidden', // Ensures border-radius applies to child elements
      }}
    >
      {/* Image container on the left */}
      <div
        className="w-1/4 bg-gray-100"
        style={{
          overflow: 'hidden', // Ensures the image respects the border-radius
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover" // Ensures the image fills the container without distortion
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Content container on the right */}
      <div className="flex-1 p-6 flex flex-col relative">
        {/* Bookmark button positioned at the top-right */}
        <button className="absolute top-2 right-2 text-black bg-white p-2 rounded-full hover:bg-gray-200 border border-gray-300">
          <Bookmark size={20} />
        </button>

        {/* Title of the Learning Module */}
        <h3 className="text-lg font-semibold text-blue-600 mb-2">
          {title}
        </h3>

        {/* Description of the Learning Module */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Bottom section containing slides count and tags */}
        <div className="mt-auto flex items-center gap-4">
          {/* Number of slides */}
          <span className="text-sm text-gray-500">{slides} Slides</span>

          {/* Tags */}
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  index === 0
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-pink-100 text-pink-800'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
