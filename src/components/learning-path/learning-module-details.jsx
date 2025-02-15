import React from "react";

const LearningModuleDetails = ({ title, subtitle, chapters }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Banner */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-600">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* Chapter List */}
      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 border-b pb-4 last:border-b-0"
          >
            <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
              {index + 1}
            </div>
            <div>
              <h3 className="font-medium text-gray-800">{chapter.title}</h3>
              <p className="text-sm text-gray-600">{chapter.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningModuleDetails;
